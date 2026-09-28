'use client';

import { useMemo, useState } from 'react';

type Msg={role:'user'|'assistant';content:string};

const plans = [
  {name:'Studio',monthly:29,annual:348},
  {name:'Atelier',monthly:59,annual:708},
  {name:'Signature',monthly:99,annual:1188},
];

export default function StudioPage(){
  const [sale,setSale]=useState('1000');
  const [plan,setPlan]=useState('Atelier');
  const [adminKey,setAdminKey]=useState('');
  const [question,setQuestion]=useState('');
  const [messages,setMessages]=useState<Msg[]>([]);
  const [busy,setBusy]=useState(false);

  const calc=useMemo(()=>{
    const gross=Math.max(0,Number(sale)||0);
    const commission=Math.round(gross*.18*100)/100;
    return {gross,commission,artist:gross-commission};
  },[sale]);

  async function askViolet(){
    if(!question.trim()||!adminKey.trim()||busy)return;
    const next=[...messages,{role:'user' as const,content:question.trim()}];
    setMessages(next); setQuestion(''); setBusy(true);
    try{
      const res=await fetch('/api/violet',{
        method:'POST',
        headers:{'Content-Type':'application/json','x-lavender-admin':adminKey.trim()},
        body:JSON.stringify({messages:next})
      });
      const data=await res.json();
      setMessages([...next,{role:'assistant',content:data.content||data.error||'No response.'}]);
    }catch{
      setMessages([...next,{role:'assistant',content:'Violet could not connect.'}]);
    }finally{setBusy(false)}
  }

  const selected=plans.find(x=>x.name===plan)!;

  return <main className="studio-page">
    <header className="studio-header">
      <a href="/">LAVENDER NORTH</a>
      <div><span>Studio</span><a href="/onboarding">Artist onboarding</a></div>
    </header>

    <section className="studio-hero">
      <p className="kicker">Private operating workspace</p>
      <h1>Lavender North Studio</h1>
      <p>Artist administration, onboarding, campaigns, gallery economics and Violet — your dedicated administrative assistant.</p>
    </section>

    <section className="studio-grid">
      <article className="studio-card">
        <span className="studio-num">01</span>
        <h2>Artist onboarding</h2>
        <p>Send new and returning artists through the structured onboarding journey. Submissions are stored for human review.</p>
        <a className="btn dark" href="/onboarding">Open onboarding</a>
      </article>

      <article className="studio-card">
        <span className="studio-num">02</span>
        <h2>Commercial model</h2>
        <label>Membership plan<select value={plan} onChange={e=>setPlan(e.target.value)}>{plans.map(p=><option key={p.name}>{p.name}</option>)}</select></label>
        <div className="commercial-mini">
          <div><strong>£{selected.monthly}</strong><span>monthly collection</span></div>
          <div><strong>£{selected.annual}</strong><span>12-month commitment</span></div>
          <div><strong>18%</strong><span>gallery commission</span></div>
        </div>
        <p className="studio-small">Monthly payment spreads the annual membership commitment. A sale does not remove the remaining membership obligation.</p>
      </article>

      <article className="studio-card">
        <span className="studio-num">03</span>
        <h2>Sale calculator</h2>
        <label>Artwork sale price (£)<input inputMode="decimal" value={sale} onChange={e=>setSale(e.target.value)}/></label>
        <div className="sale-results">
          <div><span>Gross sale</span><strong>£{calc.gross.toFixed(2)}</strong></div>
          <div><span>Lavender North 18%</span><strong>£{calc.commission.toFixed(2)}</strong></div>
          <div><span>Artist before other deductions</span><strong>£{calc.artist.toFixed(2)}</strong></div>
        </div>
        <p className="studio-small">Illustrative only. VAT, payment processing, delivery, refunds and any other agreed deductions are not included here.</p>
      </article>

      <article className="studio-card studio-wide">
        <span className="studio-num">04</span>
        <h2>Violet — artist admin assistant</h2>
        <p>Use Violet to draft onboarding summaries, artist emails, campaign plans, website briefs, exhibition checklists, commission calculations and routine gallery administration.</p>
        <div className="violet-access">
          <label>Private admin access key<input type="password" value={adminKey} onChange={e=>setAdminKey(e.target.value)} placeholder="Configured in Vercel"/></label>
        </div>
        <div className="violet-thread">
          {messages.length===0 && <div className="violet-empty">
            <strong>Try asking:</strong>
            <button onClick={()=>setQuestion('Create a 30-day launch plan for a returning oil painter joining on Atelier.')}>30-day artist launch plan</button>
            <button onClick={()=>setQuestion('Calculate the Lavender North commission on a £2,850 sale and explain it clearly to the artist.')}>Explain a sale</button>
            <button onClick={()=>setQuestion('Draft an onboarding follow-up asking an artist for missing biography, pricing and exhibition history.')}>Onboarding follow-up</button>
          </div>}
          {messages.map((m,i)=><div className={m.role==='assistant'?'violet-message assistant':'violet-message user'} key={i}><b>{m.role==='assistant'?'Violet':'Lindsay'}</b><p>{m.content}</p></div>)}
        </div>
        <div className="violet-compose">
          <textarea value={question} onChange={e=>setQuestion(e.target.value)} rows={3} placeholder="Ask Violet about an artist, campaign, sale, exhibition or admin task…"/>
          <button onClick={askViolet} disabled={busy||!question.trim()||!adminKey.trim()}>{busy?'Working…':'Ask Violet'}</button>
        </div>
        <p className="studio-small">Violet drafts and assists. Artist acceptance, curatorial selection, binding terms, refunds, payouts and legal commitments always require human approval.</p>
      </article>

      <article className="studio-card studio-wide">
        <span className="studio-num">05</span>
        <h2>What Lavender North does for an artist</h2>
        <div className="studio-pathway">
          <span>Onboard</span><i>→</i><span>Build site</span><i>→</i><span>Catalogue work</span><i>→</i><span>Launch social</span><i>→</i><span>Paid campaigns</span><i>→</i><span>Collector journey</span><i>→</i><span>Exhibit</span><i>→</i><span>Sell & retain</span>
        </div>
      </article>
    </section>
  </main>
}
