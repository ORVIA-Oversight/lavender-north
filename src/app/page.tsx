const works = [
  { id: '01', title: 'North Light', artist: 'Amelia Hart', meta: 'Oil on linen · 2026', price: '£2,850', cls: 'art-a' },
  { id: '02', title: 'Still Air', artist: 'Daniel Rowe', meta: 'Mixed media · 2026', price: '£1,950', cls: 'art-b' },
  { id: '03', title: 'After Rain', artist: 'Elena March', meta: 'Oil & wax · 2025', price: '£3,400', cls: 'art-c' },
  { id: '04', title: 'Quiet Form', artist: 'Theo Mercer', meta: 'Pigment on panel · 2026', price: 'Price on request', cls: 'art-d' },
];

const artists = [
  { name: 'Lindsay McGowan', note: 'Founding Artist · archive being prepared', cls: 'portrait-lindsay' },
  { name: 'Amelia Hart', note: 'Demo Artist · Painting', cls: 'portrait-a' },
  { name: 'Daniel Rowe', note: 'Demo Artist · Mixed Media', cls: 'portrait-b' },
];

function Mark() {
  return (
    <div className="brand-lockup" aria-label="Lavender North">
      <div className="monogram"><span className="door"/><span className="l">L</span><span className="n">N</span><span className="sprig">⌇</span></div>
      <div>
        <div className="wordmark">LAVENDER NORTH</div>
        <div className="descriptor">CONTEMPORARY ART GALLERY</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">Curated art · artist representation · individual artist websites · commissions</div>
      <header className="site-header shell">
        <Mark />
        <nav className="main-nav" aria-label="Primary">
          <a href="#art">Art</a><a href="#artists">Artists</a><a href="#exhibitions">Exhibitions</a><a href="#curators-edit">Curator&apos;s Edit</a><a href="#visit">Visit</a><a href="#for-artists">For Artists</a><a href="#about">About</a>
        </nav>
        <div className="utility"><button>Search</button><button>Saved</button><button>Account</button></div>
      </header>

      <section className="hero">
        <div className="hero-art" role="img" aria-label="Demo abstract gallery artwork"><div className="canvas-one"/><div className="canvas-two"/><div className="canvas-three"/></div>
        <div className="hero-copy shell">
          <p className="eyebrow">LAVENDER NORTH</p>
          <h1>Art worth living with.</h1>
          <p>Lavender North brings artists, collectors and remarkable work together through carefully curated exhibitions, individual artist spaces and a gallery designed for discovery.</p>
          <div className="actions"><a className="btn dark" href="#art">Explore Art</a><a className="btn light" href="#artists">Meet the Artists</a></div>
        </div>
      </section>

      <section className="manifesto shell">
        <p className="kicker">A contemporary gallery for discovery</p>
        <h2>Curated by people. Built around artists. Made for collectors.</h2>
        <p className="lede">Lavender North is first a gallery: a place to discover, acquire and commission original work. Behind it sits a quiet digital platform giving artists professional websites, archive tools and collector relationships without turning the gallery into a marketplace.</p>
      </section>

      <section id="exhibitions" className="feature-grid shell">
        <div className="feature-image feature-return"><span className="image-label">PROTOTYPE EXHIBITION</span></div>
        <div className="feature-copy">
          <p className="kicker">Featured Exhibition</p>
          <h2>Returning to the Canvas</h2>
          <p>A new body of work and archive selection from an established artist returning to practice.</p>
          <p className="quiet">Lindsay McGowan is shown as the founding-artist prototype. Biography and historical archive content remain intentionally unclaimed until genuine material is supplied.</p>
          <a className="text-link" href="#artists">Enter Exhibition <span>→</span></a>
        </div>
      </section>

      <section id="art" className="section shell">
        <div className="section-head"><div><p className="kicker">Discover Art</p><h2>Selected works</h2></div><button className="refine">Refine +</button></div>
        <div className="art-grid">
          {works.map((w) => <article className="work-card" key={w.id}><div className={`art-thumb ${w.cls}`}><span>{w.id}</span></div><div className="work-meta"><div><h3>{w.title}</h3><p>{w.artist}</p><small>{w.meta}</small></div><strong>{w.price}</strong></div></article>)}
        </div>
        <div className="center"><a className="btn light" href="#">Browse all work</a></div>
      </section>

      <section id="curators-edit" className="curator-band">
        <div className="shell curator-inner">
          <div className="curator-mark">LN</div>
          <div><p className="kicker">The Curator&apos;s Edit</p><h2>Work we believe deserves closer attention.</h2><p>Artists cannot buy inclusion here. Membership level never determines artistic endorsement.</p><span className="seal">SELECTED BY LAVENDER NORTH</span></div>
        </div>
      </section>

      <section id="artists" className="section shell">
        <div className="section-head"><div><p className="kicker">Artists</p><h2>Meet the artists</h2></div><a className="text-link" href="#">View all artists →</a></div>
        <div className="artist-grid">
          {artists.map((a) => <article className="artist-card" key={a.name}><div className={`artist-visual ${a.cls}`}/><h3>{a.name}</h3><p>{a.note}</p><a href="#" className="text-link">View Artist →</a></article>)}
        </div>
      </section>

      <section className="collector-split shell">
        <div className="collector-image"><div className="frame-art"/></div>
        <div className="collector-copy"><p className="kicker">Lavender North Collectors</p><h2>Discover something worth keeping.</h2><p>Join free for early access to new work, private previews, artist introductions, exhibition invitations and commission opportunities.</p><a className="btn dark" href="#">Join Collectors</a></div>
      </section>

      <section id="for-artists" className="for-artists">
        <div className="shell">
          <div className="section-head artist-intro"><div><p className="kicker">For Artists</p><h2>Three ways to work with Lavender North.</h2></div><p>Services can be purchased. Curatorial endorsement cannot.</p></div>
          <div className="offer-grid">
            <article><span className="offer-num">01</span><h3>Gallery Representation</h3><p>Apply to have your work considered for the curated gallery, exhibitions and collector promotion.</p><a href="#" className="text-link">Apply to the gallery →</a></article>
            <article><span className="offer-num">02</span><h3>Artist Membership</h3><p>A professional website, catalogue, enquiries, commissions, analytics and collector tools, from a monthly membership.</p><a href="#memberships" className="text-link">See memberships →</a></article>
            <article><span className="offer-num">03</span><h3>One-off Projects</h3><p>Commission a standalone artist website, archive migration, portfolio, exhibition page or digital relaunch without a subscription.</p><a href="#builder" className="text-link">Explore Builder →</a></article>
          </div>
        </div>
      </section>

      <section id="memberships" className="section shell memberships">
        <p className="kicker">Artist Memberships</p><h2>Your work deserves more than a profile page.</h2><p className="lede narrow">Membership gives artists a professional digital home and the tools to present, organise and sell work beautifully. Pricing remains prototype-only until commercial review.</p>
        <div className="pricing-grid">
          <article><p className="plan">Studio</p><h3>£29<span>/month</span></h3><p>For artists needing a professional digital home.</p><ul><li>Artist profile + site</li><li>Lavender North subdomain</li><li>30 artworks</li><li>Enquiries + commissions</li><li>QR labels + basic analytics</li></ul><a className="btn light" href="#">Apply</a></article>
          <article className="featured-plan"><p className="plan">Atelier</p><h3>£59<span>/month</span></h3><p>For artists actively exhibiting and selling.</p><ul><li>Own domain connection</li><li>150 artworks + collections</li><li>Viewing rooms + exhibitions</li><li>Collector CRM + newsletter</li><li>Online sales + certificates</li></ul><a className="btn dark" href="#">Apply</a></article>
          <article><p className="plan">Signature</p><h3>£99<span>/month</span></h3><p>For established artists needing an individual digital presence.</p><ul><li>Unlimited artwork</li><li>Bespoke homepage</li><li>Video integration</li><li>Advanced collector tools</li><li>Campaign + priority support</li></ul><a className="btn light" href="#">Apply</a></article>
        </div>
        <p className="prototype-note">Prototype pricing — subject to final commercial review.</p>
      </section>

      <section id="builder" className="builder shell">
        <div><p className="kicker">Lavender North Builder</p><h2>One platform. Your identity. Your own domain.</h2><p>Builder is the customer-facing website service replacing the web.orvia working name. Artists choose a visual direction and manage their site without code.</p><div className="template-row"><span>White Cube</span><span>Atelier</span><span>Editorial</span><span>Collector</span></div></div>
        <div className="browser-mock"><div className="browser-top"><i/><i/><i/></div><div className="mock-page"><p>LINDSAY McGOWAN</p><div className="mock-art"/><small>Represented digitally by Lavender North</small></div></div>
      </section>

      <section id="visit" className="visit-band"><div className="shell visit-grid"><div><p className="kicker">Lavender North — In Residence</p><h2>A gallery that can move before it settles.</h2></div><div><p>Lavender North can operate from selected exhibition and residency spaces while developing a permanent gallery programme. No permanent premises are claimed in this prototype.</p><a className="text-link" href="#">View programme →</a></div></div></section>

      <section id="about" className="final-statement"><div className="shell"><p>ART DOESN&apos;T BELONG IN A FEED.</p><h2>IT BELONGS IN YOUR LIFE.</h2><Mark /></div></section>

      <footer className="footer shell"><div><Mark/><p>A contemporary gallery, artist platform and future physical exhibition programme.</p></div><div><h4>ART</h4><a>Browse</a><a>Artists</a><a>Exhibitions</a><a>Curator&apos;s Edit</a></div><div><h4>COLLECT</h4><a>Collectors</a><a>Private Viewing</a><a>Commissions</a><a>Art for Spaces</a></div><div><h4>ARTISTS</h4><a>Membership</a><a>Builder</a><a>Applications</a><a>Artist Login</a></div><div><h4>LAVENDER NORTH</h4><a>About</a><a>Visit</a><a>Journal</a><a>Contact</a></div></footer>
      <div className="legal shell">Prototype website · Demo artists and demo artworks are clearly illustrative · © 2026 Lavender North</div>
    </main>
  );
}
