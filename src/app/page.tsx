import Image from 'next/image';

const works = [
  { id:'01', title:'North Light', artist:'Amelia Hart', meta:'Oil on linen · 2026', price:'£2,850', src:'/gallery/art-01.png' },
  { id:'02', title:'Still Air', artist:'Daniel Rowe', meta:'Mixed media · 2026', price:'£1,950', src:'/gallery/art-02.png' },
  { id:'03', title:'After Rain', artist:'Elena March', meta:'Oil & wax · 2025', price:'£3,400', src:'/gallery/art-03.png' },
  { id:'04', title:'Quiet Form', artist:'Theo Mercer', meta:'Pigment on panel · 2026', price:'Price on request', src:'/gallery/art-04.png' },
  { id:'05', title:'Golden Strata', artist:'Amelia Hart', meta:'Mixed media · 2026', price:'£2,250', src:'/gallery/art-05.png' },
  { id:'06', title:'Passage', artist:'Iris Vale', meta:'Oil & gold leaf · 2026', price:'£4,200', src:'/gallery/art-06.png' },
  { id:'07', title:'Orchard Light', artist:'Elena March', meta:'Oil on canvas · 2026', price:'£3,100', src:'/gallery/art-07.png' },
  { id:'08', title:'Still Life No. 4', artist:'Daniel Rowe', meta:'Oil & plaster · 2026', price:'£2,600', src:'/gallery/art-08.png' },
];

const artists = [
  { name:'Lindsay McGowan', note:'Founding Artist · archive being prepared', src:'/gallery/art-11.png' },
  { name:'Amelia Hart', note:'Demo Artist · Painting', src:'/gallery/art-12.png' },
  { name:'Daniel Rowe', note:'Demo Artist · Mixed Media', src:'/gallery/art-13.png' },
  { name:'Elena March', note:'Demo Artist · Landscape', src:'/gallery/art-14.png' },
];

const edit = [
  '/gallery/art-15.png','/gallery/art-16.png','/gallery/art-17.png',
  '/gallery/art-18.png','/gallery/art-19.png','/gallery/art-20.png'
];

function Mark() {
  return (
    <div className="brand-lockup" aria-label="Lavender North">
      <div className="monogram"><span className="door"/><span className="l">L</span><span className="n">N</span><span className="sprig">⌇</span></div>
      <div><div className="wordmark">LAVENDER NORTH</div><div className="descriptor">CONTEMPORARY ART GALLERY</div></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">Curated art · artist representation · websites · social campaigns · collector marketing · exhibitions</div>
      <header className="site-header shell">
        <Mark />
        <nav className="main-nav" aria-label="Primary">
          <a href="#art">Art</a><a href="#artists">Artists</a><a href="#exhibitions">Exhibitions</a><a href="#curators-edit">Curator&apos;s Edit</a><a href="#visit">Visit</a><a href="#for-artists">For Artists</a><a href="#about">About</a>
        </nav>
        <div className="utility"><button>Search</button><button>Saved</button><button>Account</button></div>
      </header>

      <section className="hero hero-photo">
        <Image src="/gallery/art-09.png" alt="Lavender North featured artwork" fill priority sizes="100vw" className="cover-image" />
        <div className="hero-shade"/>
        <div className="hero-copy shell">
          <p className="eyebrow">LAVENDER NORTH</p>
          <h1>Art worth living with.</h1>
          <p>A contemporary gallery built around discovery, curation and beautifully presented artists.</p>
          <div className="actions"><a className="btn dark" href="#art">Explore Art</a><a className="btn light" href="#artists">Meet the Artists</a></div>
        </div>
      </section>

      <section className="manifesto shell">
        <p className="kicker">A contemporary gallery for discovery</p>
        <h2>Curated by people. Built around artists. Made for collectors.</h2>
        <p className="lede">Lavender North is first a gallery: a place to discover, acquire and commission original work. Behind it sits a quiet digital platform giving artists professional websites, archive tools and collector relationships without turning the gallery into a marketplace.</p>
      </section>

      <section id="exhibitions" className="feature-grid shell">
        <div className="feature-image real-feature"><Image src="/gallery/art-10.png" alt="Featured Lavender North exhibition artwork" fill sizes="(max-width:900px) 100vw, 60vw" className="cover-image"/></div>
        <div className="feature-copy">
          <p className="kicker">Featured Exhibition</p>
          <h2>Returning to the Canvas</h2>
          <p>A relaunch exhibition concept designed to bring an established artist&apos;s archive and new work back into public view.</p>
          <p className="quiet">Lindsay McGowan is shown as the founding-artist prototype. Biography and historical archive content remain intentionally unclaimed until genuine material is supplied.</p>
          <a className="text-link" href="#artists">Enter Exhibition <span>→</span></a>
        </div>
      </section>

      <section id="art" className="section shell">
        <div className="section-head"><div><p className="kicker">Discover Art</p><h2>Selected works</h2></div><button className="refine">Refine +</button></div>
        <div className="art-grid">
          {works.map((w) => (
            <article className="work-card" key={w.id}>
              <div className="art-thumb real-art"><Image src={w.src} alt={w.title} fill sizes="(max-width:720px) 100vw, 50vw" className="cover-image"/><span>{w.id}</span></div>
              <div className="work-meta"><div><h3>{w.title}</h3><p>{w.artist}</p><small>{w.meta}</small></div><strong>{w.price}</strong></div>
            </article>
          ))}
        </div>
        <div className="center"><a className="btn light" href="#">Browse all work</a></div>
      </section>

      <section id="curators-edit" className="curator-band">
        <div className="shell curator-inner">
          <div className="curator-mark">LN</div>
          <div><p className="kicker">The Curator&apos;s Edit</p><h2>Work we believe deserves closer attention.</h2><p>Artists cannot buy inclusion here. Membership level never determines artistic endorsement.</p><span className="seal">SELECTED BY LAVENDER NORTH</span></div>
        </div>
        <div className="curator-strip">
          {edit.map((src,i)=><div className="curator-strip-image" key={src}><Image src={src} alt={`Curator selection ${i+1}`} fill sizes="17vw" className="cover-image"/></div>)}
        </div>
      </section>

      <section id="artists" className="section shell">
        <div className="section-head"><div><p className="kicker">Artists</p><h2>Meet the artists</h2></div><a className="text-link" href="#">View all artists →</a></div>
        <div className="artist-grid artist-grid-four">
          {artists.map((a) => (
            <article className="artist-card" key={a.name}>
              <div className="artist-visual real-artist"><Image src={a.src} alt={`${a.name} featured work`} fill sizes="(max-width:720px) 100vw, 25vw" className="cover-image"/></div>
              <h3>{a.name}</h3><p>{a.note}</p><a href="#" className="text-link">View Artist →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="collector-split shell">
        <div className="collector-image real-collector"><Image src="/gallery/art-18.png" alt="Lavender North collector selection" fill sizes="60vw" className="cover-image"/></div>
        <div className="collector-copy"><p className="kicker">Lavender North Collectors</p><h2>Discover something worth keeping.</h2><p>Join free for early access to new work, private previews, artist introductions, exhibition invitations and commission opportunities.</p><a className="btn dark" href="#">Join Collectors</a></div>
      </section>

      <section className="film-guide shell">
        <div className="section-head"><div><p className="kicker">The Lavender North Experience</p><h2>See how the artist journey comes together.</h2></div><p>Two short films show the vision: presentation first, then the full support model behind the artist.</p></div>
        <div className="film-grid">
          <article className="film-card"><video controls preload="metadata" playsInline poster="/gallery/art-09.png"><source src="/media/lavender-north-film-01.mp4" type="video/mp4"/></video><div><span>01</span><h3>From studio to gallery</h3><p>How Lavender North presents work, creates context and gives artists a premium stage.</p></div></article>
          <article className="film-card"><video controls preload="metadata" playsInline poster="/gallery/art-18.png"><source src="/media/lavender-north-film-02.mp4" type="video/mp4"/></video><div><span>02</span><h3>From presence to growth</h3><p>Websites, campaigns, collector journeys, private views and commercial momentum around the artist.</p></div></article>
        </div>
      </section>

      <section className="growth-suite">
        <div className="shell">
          <div className="growth-head">
            <div><p className="kicker">The Lavender North Artist Growth Suite</p><h2>You create the work. We build the world around it.</h2></div>
            <p>Lavender North is designed to do more than host an artist profile. The platform combines presentation, audience-building, campaign support and collector journeys so artists have a clear route from studio to sale.</p>
          </div>
          <div className="growth-grid">
            <article><span>01</span><h3>Your digital home</h3><p>Individual artist website, own domain options, artwork catalogue, commissions, archive, SEO-ready pages and gallery integration.</p></article>
            <article><span>02</span><h3>Your social pathway</h3><p>Campaign-ready artwork, launch assets, social content plans, collection announcements and clear pathways from posts back to the artist and gallery.</p></article>
            <article><span>03</span><h3>Your marketing</h3><p>Collector email campaigns, exhibition promotion, press-ready assets and paid-campaign setup on eligible plans. Advertising media spend is separate.</p></article>
            <article><span>04</span><h3>Your audience</h3><p>Collector enquiries, private viewing journeys, saved works, mailing-list growth, campaign analytics and repeat-contact opportunities.</p></article>
            <article><span>05</span><h3>Your opportunities</h3><p>Curated exhibitions, physical residency opportunities, art-for-spaces enquiries and selected gallery promotion where the work fits.</p></article>
            <article><span>06</span><h3>Your commercial pathway</h3><p>Artwork presentation, pricing support, reservations, sales journeys, commissions and performance insight without turning the artist into a marketplace listing.</p></article>
          </div>
          <div className="growth-rule"><strong>Important:</strong> artists can subscribe to services and marketing support, but curatorial endorsement cannot be bought.</div>
        </div>
      </section>

      <section id="for-artists" className="for-artists">
        <div className="shell">
          <div className="section-head artist-intro"><div><p className="kicker">For Artists</p><h2>Three ways to work with Lavender North.</h2></div><p>Services can be purchased. Curatorial endorsement cannot.</p></div>
          <div className="offer-grid">
            <article><span className="offer-num">01</span><h3>Gallery Representation</h3><p>Apply to have your work considered for the curated gallery, exhibitions and collector promotion.</p><a href="#" className="text-link">Apply to the gallery →</a></article>
            <article><span className="offer-num">02</span><h3>Artist Membership</h3><p>A managed commercial presence combining website, catalogue, collector tools, campaigns, analytics and artist-growth support.</p><a href="#memberships" className="text-link">See memberships →</a></article>
            <article><span className="offer-num">03</span><h3>One-off Projects</h3><p>Commission a standalone artist website, archive migration, portfolio, exhibition page or digital relaunch without a subscription.</p><a href="#builder" className="text-link">Explore Builder →</a></article>
          </div>
        </div>
      </section>

      <section id="memberships" className="section shell memberships">
        <p className="kicker">Artist Memberships</p><h2>Your work deserves more than a profile page.</h2><p className="lede narrow">Membership combines a professional digital home with marketing, collector and growth support. The figures below are the current working commercial model and remain subject to final terms.</p>
        <div className="pricing-grid">
          <article><p className="plan">Studio</p><h3>£95<span>/month</span></h3><p>For artists who need a credible commercial digital home, not another profile page.</p><ul><li>Artist website + gallery profile</li><li>Lavender North subdomain</li><li>Up to 50 artworks</li><li>Enquiries + commissions</li><li>QR artwork pages + analytics</li><li>SEO-ready pages</li><li>Social launch toolkit</li><li>Monthly campaign-ready creative</li></ul><p className="plan-detail">12-month commitment · £1,140 annual value · current onboarding £295</p><a className="btn light" href="/onboarding">Start onboarding</a></article>
          <article className="featured-plan"><p className="plan">Atelier</p><h3>£195<span>/month</span></h3><p>For artists actively exhibiting, marketing and building a collector base.</p><ul><li>Own domain connection</li><li>Up to 250 artworks + collections</li><li>Private viewing rooms + exhibitions</li><li>Collector CRM + newsletter</li><li>Online sales + certificates</li><li>Monthly social campaign pack</li><li>Collection launch support</li><li>Quarterly artist growth review</li></ul><p className="plan-detail">12-month commitment · £2,340 annual value · current onboarding £595</p><a className="btn dark" href="/onboarding">Start onboarding</a></article>
          <article><p className="plan">Signature</p><h3>£395<span>/month</span></h3><p>For established artists who want a managed commercial presence around their practice.</p><ul><li>Unlimited catalogue</li><li>Bespoke website treatment</li><li>Video + press/media integration</li><li>Advanced collector tools</li><li>Managed campaign planning</li><li>Paid-ad setup + optimisation</li><li>Priority launch + collector campaigns</li><li>Monthly commercial marketing programme</li></ul><p className="plan-detail">12-month commitment · £4,740 annual value · current onboarding £1,250</p><a className="btn light" href="/onboarding">Start onboarding</a></article>
        </div>
        <p className="prototype-note">Working commercial model — final Artist Agreement will define VAT, cancellation, attribution, payment timing and any promotional annual-payment terms. Advertising media spend is separate.</p>
      </section>

      <section id="builder" className="builder shell">
        <div><p className="kicker">Lavender North Builder</p><h2>One platform. Your identity. Your own domain.</h2><p>Artists choose a visual direction and manage their site without code while Lavender North keeps presentation consistent, fast and commercially credible.</p><div className="template-row"><span>White Cube</span><span>Atelier</span><span>Editorial</span><span>Collector</span></div></div>
        <div className="browser-mock"><div className="browser-top"><i/><i/><i/></div><div className="mock-page"><p>LINDSAY McGOWAN</p><div className="mock-art real-mock"><Image src="/gallery/art-17.png" alt="Artist website example" fill sizes="50vw" className="cover-image"/></div><small>Represented digitally by Lavender North</small></div></div>
      </section>

      <section id="visit" className="visit-band"><div className="shell visit-grid"><div><p className="kicker">Lavender North — In Residence</p><h2>A gallery that can move before it settles.</h2></div><div><p>Lavender North can operate from selected exhibition and residency spaces while developing a permanent gallery programme. No permanent premises are claimed in this prototype.</p><a className="text-link" href="#">View programme →</a></div></div></section>

      <section id="about" className="final-statement"><div className="shell"><p>ART DOESN&apos;T BELONG IN A FEED.</p><h2>IT BELONGS IN YOUR LIFE.</h2><Mark /></div></section>

      <footer className="footer shell"><div><Mark/><p>A contemporary gallery, artist platform and future physical exhibition programme.</p></div><div><h4>ART</h4><a>Browse</a><a>Artists</a><a>Exhibitions</a><a>Curator&apos;s Edit</a></div><div><h4>COLLECT</h4><a>Collectors</a><a>Private Viewing</a><a>Commissions</a><a>Art for Spaces</a></div><div><h4>ARTISTS</h4><a>Membership</a><a>Builder</a><a>Applications</a><a>Artist Login</a></div><div><h4>LAVENDER NORTH</h4><a>About</a><a>Visit</a><a>Journal</a><a>Contact</a></div></footer>
      <div className="legal shell">Prototype website · Demo artists and demo artworks are clearly illustrative · © 2026 Lavender North</div>
    </main>
  );
}
