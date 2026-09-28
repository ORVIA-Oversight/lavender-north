'use client';

import { FormEvent, useState } from 'react';

const SUPABASE_URL = 'https://qokkyynptzeuuebykmbo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_4EaQGyC5dYqhCIiAPcymVg_SIouLR5h';

const goalOptions = ['Professional website','Sell artwork','Grow collector list','Commissions','Exhibitions','Marketing & social','Paid campaigns','Archive relaunch'];
const marketingOptions = ['Social content plan','Launch campaign','Paid advertising','Collector email','Press/media pack','Exhibition promotion'];

export default function ArtistOnboarding() {
  const [state,setState] = useState<'idle'|'sending'|'done'|'error'>('idle');
  const [error,setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending'); setError('');
    const fd = new FormData(e.currentTarget);
    const body = {
      artist_name: String(fd.get('artist_name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      location: String(fd.get('location') || ''),
      website: String(fd.get('website') || ''),
      instagram: String(fd.get('instagram') || ''),
      primary_medium: String(fd.get('primary_medium') || ''),
      career_stage: String(fd.get('career_stage') || ''),
      price_range: String(fd.get('price_range') || ''),
      artist_statement: String(fd.get('artist_statement') || ''),
      goals: fd.getAll('goals').map(String),
      website_style: String(fd.get('website_style') || ''),
      marketing_help: fd.getAll('marketing_help').map(String),
      exhibition_interest: fd.get('exhibition_interest') === 'on',
      archive_help: fd.get('archive_help') === 'on',
      notes: String(fd.get('notes') || ''),
      accepted_commercial_principles: fd.get('accepted_commercial_principles') === 'on'
    };

    const res = await fetch(`${SUPABASE_URL}/rest/v1/lavender_north_artist_onboarding`, {
      method:'POST',
      headers:{
        apikey:SUPABASE_KEY,
        Authorization:`Bearer ${SUPABASE_KEY}`,
        'Content-Type':'application/json',
        Prefer:'return=minimal'
      },
      body:JSON.stringify(body)
    });

    if (res.ok) { setState('done'); e.currentTarget.reset(); return; }
    const t = await res.text(); setError(t || 'Unable to submit.'); setState('error');
  }

  return <main className="onboarding-page">
    <header className="onboarding-top"><a href="/" className="back-link">← Lavender North</a><span>ARTIST ONBOARDING</span></header>
    <section className="onboarding-hero">
      <p className="kicker">Lavender North Artist Programme</p>
      <h1>Build the world around your work.</h1>
      <p>This onboarding helps us understand your practice, where you want to go, and which parts of Lavender North can genuinely help.</p>
    </section>

    <section className="commercial-summary">
      <div><strong>18%</strong><span>working digital/platform gallery commission on qualifying sales generated through Lavender North</span></div>
      <div><strong>12 months</strong><span>membership commitment, even where the annual commitment is collected monthly</span></div>
      <div><strong>Human curation</strong><span>subscription buys services and growth support — never curatorial endorsement or exhibition selection</span></div>
    </section>

    <form className="onboarding-form" onSubmit={submit}>
      <fieldset><legend>01 · About you</legend>
        <div className="form-grid">
          <label>Artist name<input name="artist_name" required/></label>
          <label>Email<input name="email" type="email" required/></label>
          <label>Phone<input name="phone"/></label>
          <label>Location<input name="location"/></label>
          <label>Current website<input name="website" type="url" placeholder="https://"/></label>
          <label>Instagram / social<input name="instagram"/></label>
        </div>
      </fieldset>

      <fieldset><legend>02 · Your practice</legend>
        <div className="form-grid">
          <label>Primary medium<input name="primary_medium" placeholder="Oil, sculpture, mixed media..."/></label>
          <label>Career stage<select name="career_stage"><option value="">Select</option><option>Returning to practice</option><option>Emerging</option><option>Established</option><option>Professional / represented</option></select></label>
          <label>Typical price range<input name="price_range" placeholder="e.g. £300–£3,000"/></label>
          <label>Preferred website direction<select name="website_style"><option>White Cube</option><option>Atelier</option><option>Editorial</option><option>Collector</option><option>Not sure yet</option></select></label>
        </div>
        <label>Artist statement<textarea name="artist_statement" rows={6}/></label>
      </fieldset>

      <fieldset><legend>03 · What do you want Lavender North to help with?</legend>
        <div className="check-grid">{goalOptions.map(x=><label className="check" key={x}><input type="checkbox" name="goals" value={x}/><span>{x}</span></label>)}</div>
      </fieldset>

      <fieldset><legend>04 · Marketing & growth</legend>
        <p className="field-help">Select the support you would actually use. Paid media budget is separate from subscription fees unless expressly agreed otherwise.</p>
        <div className="check-grid">{marketingOptions.map(x=><label className="check" key={x}><input type="checkbox" name="marketing_help" value={x}/><span>{x}</span></label>)}</div>
        <div className="check-row"><label className="check"><input type="checkbox" name="exhibition_interest"/><span>I want to be considered for exhibitions / physical gallery opportunities</span></label></div>
        <div className="check-row"><label className="check"><input type="checkbox" name="archive_help"/><span>I need help recovering or rebuilding an older art archive</span></label></div>
      </fieldset>

      <fieldset><legend>05 · Anything we should know?</legend>
        <label>Notes<textarea name="notes" rows={5} placeholder="Past gallery relationships, upcoming collections, launch dates, concerns, or anything else."/></label>
      </fieldset>

      <fieldset className="terms-box"><legend>06 · Commercial principles</legend>
        <p>Lavender North currently works on a proposed <strong>18% digital/platform gallery commission</strong> on qualifying sales generated through Lavender North, alongside the selected membership plan. Membership is a <strong>12-month commitment</strong>. Monthly collection spreads the annual commitment; it does not convert the membership into a month-to-month arrangement. A sale in month one does not cancel the remaining membership commitment.</p>
        <p>Current working membership levels are <strong>Studio £95/month</strong>, <strong>Atelier £195/month</strong> and <strong>Signature £395/month</strong>, with separate onboarding charges and paid-advertising media spend where applicable. Full physical representation or exhibition handling may use a separately agreed commission because it involves additional gallery services and cost.</p>
        <p>Final artist terms, cancellation rights, VAT treatment, refunds, commission attribution and payment timing will be set out in the signed Artist Agreement. This onboarding is not itself the final contract.</p>
        <label className="check consent"><input required type="checkbox" name="accepted_commercial_principles"/><span>I understand these proposed commercial principles and want Lavender North to continue my onboarding.</span></label>
      </fieldset>

      <button className="submit-onboarding" disabled={state==='sending'}>{state==='sending'?'Submitting…':'Submit artist onboarding'}</button>
      {state==='done' && <p className="success-msg">Thank you. Your onboarding has been received for human review.</p>}
      {state==='error' && <p className="error-msg">Submission failed. {error}</p>}
    </form>
  </main>;
}
