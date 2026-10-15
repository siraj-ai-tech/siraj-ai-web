export function Orbital() {
  return <div className="orbital" aria-hidden="true">
    <div className="orbital-glow" />
    <svg className="orbit-art" viewBox="0 0 640 580" fill="none">
      <defs>
        <linearGradient id="orbit" x1="80" y1="400" x2="540" y2="160" gradientUnits="userSpaceOnUse"><stop stopColor="#153c66" stopOpacity=".15"/><stop offset=".5" stopColor="#358fff"/><stop offset="1" stopColor="#789dcc" stopOpacity=".12"/></linearGradient>
        <linearGradient id="ribbon" x1="250" y1="190" x2="400" y2="430" gradientUnits="userSpaceOnUse"><stop stopColor="#74d4ff"/><stop offset=".35" stopColor="#1273e8"/><stop offset=".75" stopColor="#083d93"/><stop offset="1" stopColor="#1c8ef7"/></linearGradient>
        <linearGradient id="light" x1="310" y1="210" x2="400" y2="330"><stop stopColor="#fff5b1"/><stop offset="1" stopColor="#f9a825"/></linearGradient>
        <radialGradient id="sphere"><stop stopColor="#ffffff"/><stop offset=".6" stopColor="#eef5ff"/><stop offset="1" stopColor="#e0edff"/></radialGradient>
        <filter id="starGlow"><feGaussianBlur stdDeviation="9"/></filter>
      </defs>
      <circle cx="327" cy="294" r="170" stroke="#223957" strokeOpacity=".3"/>
      <circle cx="327" cy="294" r="217" stroke="#223957" strokeOpacity=".18" strokeDasharray="2 8"/>
      <ellipse cx="327" cy="294" rx="282" ry="105" transform="rotate(-32 327 294)" stroke="url(#orbit)"/>
      <ellipse cx="327" cy="294" rx="255" ry="136" transform="rotate(38 327 294)" stroke="url(#orbit)" strokeOpacity=".6"/>
      <circle cx="327" cy="294" r="130" fill="url(#sphere)" stroke="#284767" strokeOpacity=".5"/>
      <path d="M382 194h-80c-55 0-86 26-86 66 0 48 59 55 101 70 33 12 45 22 34 38-15 21-63 15-92-5l-35 41c53 37 134 32 167-10 38-48 4-81-46-98l-64-23c-32-12-24-28 4-40z" fill="url(#ribbon)"/>
      <path d="m381 218-77 37c-36 18-32 26 9 40l50 18-31-25c-17-14-10-28 49-70Z" fill="url(#light)"/>
      <path d="M410 165c5 33 12 40 43 45-31 5-38 13-43 44-5-31-13-39-44-44 31-5 39-12 44-45Z" fill="#ffb833" opacity=".65" filter="url(#starGlow)"/>
      <path d="M410 165c5 33 12 40 43 45-31 5-38 13-43 44-5-31-13-39-44-44 31-5 39-12 44-45Z" fill="url(#light)"/>
      <circle cx="91" cy="390" r="5" fill="#40b8ff"/><circle cx="520" cy="167" r="4" fill="#ffbc4d"/><circle cx="480" cy="443" r="3" fill="#559be5"/>
      <path d="M103 149h8m-4-4v8M508 354h8m-4-4v8M225 83h6m-3-3v6" stroke="#5489b8"/>
    </svg>
    <div className="orbit-label label-ai"><span className="label-icon">✧</span> Intelligence artificielle <span className="status-dot" /></div>
    <div className="orbit-label label-code"><span className="code-icon">&lt;/&gt;</span> Technologie sur mesure</div>
    <div className="orbit-caption"><span /> CONNECTER LES IDÉES. CRÉER L’IMPACT.</div>
  </div>;
}
