export default function FlyingBear() {
  return (
    <main className="page">
      <h1>Flying bear</h1>
      <p className="muted">A brown bear with wings, flapping and bobbing in the sky.</p>
      <div className="bear-stage">
        <svg viewBox="0 0 240 200" className="bear" role="img" aria-label="A brown bear flying with wings">
          <path className="bear-wing bear-wing-back" d="M110 95 C80 40 40 30 15 45 C45 65 70 95 118 115 Z" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="2" />
          <ellipse cx="112" cy="118" rx="52" ry="44" fill="#8b5a2b" />
          <ellipse cx="112" cy="122" rx="28" ry="26" fill="#d6a86b" />
          <ellipse cx="100" cy="152" rx="10" ry="7" fill="#6b4423" />
          <ellipse cx="128" cy="154" rx="10" ry="7" fill="#6b4423" />
          <path className="bear-wing bear-wing-front" d="M125 100 C155 60 185 60 210 75 C180 90 165 110 130 125 Z" fill="#fafaf9" stroke="#d6d3d1" strokeWidth="2" />
          <circle cx="165" cy="70" r="30" fill="#8b5a2b" />
          <circle cx="145" cy="45" r="11" fill="#8b5a2b" />
          <circle cx="145" cy="45" r="5" fill="#5c3a1e" />
          <circle cx="185" cy="45" r="11" fill="#8b5a2b" />
          <circle cx="185" cy="45" r="5" fill="#5c3a1e" />
          <ellipse cx="176" cy="82" rx="13" ry="10" fill="#d6a86b" />
          <ellipse cx="184" cy="77" rx="4" ry="3" fill="#2b1d12" />
          <circle cx="157" cy="63" r="3.5" fill="#2b1d12" />
          <circle cx="175" cy="63" r="3.5" fill="#2b1d12" />
          <path d="M170 89 Q176 94 182 89" fill="none" stroke="#2b1d12" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </main>
  )
}
