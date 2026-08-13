import { strengths } from '../data/strengthsData'

export default function StrengthsSection() {
  return (
    <section className="section section-surface">
      <div className="section-head">
        <span className="method-badge">GET</span>
        <span className="endpoint-path">/strengths</span>
      </div>
      <h2 className="section-title">Core strengths</h2>
      <div className="chips-panel">
        {strengths.map((s) => (
          <span className="chip" key={s}>{s}</span>
        ))}
      </div>
    </section>
  )
}
