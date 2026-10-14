/* Réseau simulé pour la démo hors ligne (simulateur.html). Utilisé seulement avec ?mock dans l'adresse. */
(() => {
  const bc = new BroadcastChannel("vandb-quizz-demo");
  const all = new Set();
  class Emitter { constructor(){this._h={}} on(e,f){(this._h[e]=this._h[e]||[]).push(f);return this} emit(e,...a){(this._h[e]||[]).forEach(f=>{try{f(...a)}catch(x){console.error(x)}})} }
  class Conn extends Emitter { constructor(peer,remote,id){super();this.peer=peer;this.remote=remote;this.connectionId=id;this.open=false;}
    send(d){ if(!this.open) throw new Error("closed"); bc.postMessage({type:"data",to:this.remote,cid:this.connectionId,data:JSON.parse(JSON.stringify(d))}); }
    close(){ if(!this.open&&this._closed) return; this.open=false; this._closed=true; bc.postMessage({type:"close",to:this.remote,cid:this.connectionId}); this.peer.conns.delete(this.connectionId); this.emit("close"); } }
  class Peer extends Emitter {
    constructor(id,opts){ super(); if(typeof id!=="string"){ id="anon-"+Math.random().toString(36).slice(2); } this.id=id; this.conns=new Map(); this.open=false; this.destroyed=false; this.disconnected=false; all.add(this);
      const q=Math.random().toString(36).slice(2); this._q=q; let taken=false;
      this._probe=e=>{ if(e.data.type==="iam"&&e.data.q===q) taken=true; }; bc.addEventListener("message",this._probe);
      bc.postMessage({type:"whois",id,q});
      setTimeout(()=>{ bc.removeEventListener("message",this._probe); if(this.destroyed) return; if(taken){ this.emit("error",{type:"unavailable-id"}); return; } this.open=true; this.emit("open",id); },150);
    }
    connect(remote){ const cid="c-"+Math.random().toString(36).slice(2); const c=new Conn(this,remote,cid); this.conns.set(cid,c);
      bc.postMessage({type:"connect",to:remote,from:this.id,cid});
      c._t=setTimeout(()=>{ if(!c.open){ this.conns.delete(cid); this.emit("error",{type:"peer-unavailable"}); } },700);
      return c; }
    reconnect(){}
    destroy(){ this.destroyed=true; this.open=false; [...this.conns.values()].forEach(c=>c.close()); all.delete(this); }
  }
  bc.onmessage = e => { const m=e.data;
    for(const p of all){
      if(!p.open && m.type!=="whois") continue;
      if(m.type==="whois" && m.id===p.id && p.open) bc.postMessage({type:"iam",q:m.q});
      if(m.to!==p.id) continue;
      if(m.type==="connect"){ const c=new Conn(p,m.from,m.cid); p.conns.set(m.cid,c); c.open=true; p.emit("connection",c); bc.postMessage({type:"ack",to:m.from,cid:m.cid}); setTimeout(()=>c.emit("open"),0); }
      else if(m.type==="ack"){ const c=p.conns.get(m.cid); if(c){ clearTimeout(c._t); c.open=true; c.emit("open"); } }
      else if(m.type==="data"){ const c=p.conns.get(m.cid); if(c&&c.open) c.emit("data",m.data); }
      else if(m.type==="close"){ const c=p.conns.get(m.cid); if(c){ c.open=false; c._closed=true; p.conns.delete(m.cid); c.emit("close"); } }
    } };
  addEventListener("pagehide",()=>{ for(const p of [...all]) p.destroy(); });
  window.Peer = Peer;
})();
