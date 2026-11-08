import { SAMPLE_JOBS } from '../data.js'

export default function Home() {
  const today = SAMPLE_JOBS.filter((job) => job.date === '2026-11-09')
  const done = SAMPLE_JOBS.filter((job) => job.status === 'Done').length

  return (
    <main className="page">
      <h1>Good morning</h1>
      <p className="muted">Here is how the week looks for your crews.</p>
      <div className="stats">
        <div className="stat">Jobs today<strong>{today.length}</strong></div>
        <div className="stat">Jobs this week<strong>{SAMPLE_JOBS.length}</strong></div>
        <div className="stat">Finished<strong>{done}</strong></div>
      </div>
      <h2>Today’s jobs</h2>
      {today.map((job) => (
        <div className="card job" key={job.id}>
          <div>
            <h3>{job.task}</h3>
            <p className="muted" style={{ margin: 0 }}>{job.customer} · Crew: {job.crew}</p>
          </div>
          <span className={`pill ${job.status.replace(' ', '')}`}>{job.status}</span>
        </div>
      ))}
    </main>
  )
}
