import { useState } from 'react'
import { SAMPLE_JOBS, STATUSES } from '../data.js'

const EMPTY_FORM = { customer: '', task: '', crew: '', date: '2026-11-09' }

export default function Jobs() {
  const [jobs, setJobs] = useState(SAMPLE_JOBS)
  const [form, setForm] = useState(EMPTY_FORM)

  function nextStatus(id) {
    setJobs((list) =>
      list.map((job) => {
        if (job.id !== id) return job
        const index = STATUSES.indexOf(job.status)
        return { ...job, status: STATUSES[(index + 1) % STATUSES.length] }
      }),
    )
  }

  function addJob(event) {
    event.preventDefault()
    if (!form.customer.trim() || !form.task.trim()) return
    const id = Math.max(0, ...jobs.map((job) => job.id)) + 1
    setJobs((list) => [...list, { ...form, id, status: 'Planned' }])
    setForm(EMPTY_FORM)
  }

  return (
    <main className="page">
      <h1>Jobs</h1>
      <p className="muted">Add a job, then press its status to move it along.</p>
      <div className="notice">Not saved yet: upgrade to keep your changes</div>

      <form className="form card" onSubmit={addJob}>
        <input placeholder="Customer" value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value })} />
        <input placeholder="Task" value={form.task} onChange={(e) => setForm({ ...form, task: e.target.value })} />
        <input placeholder="Crew member" value={form.crew} onChange={(e) => setForm({ ...form, crew: e.target.value })} />
        <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <button type="submit">Add job</button>
      </form>

      {jobs.map((job) => (
        <div className="card job" key={job.id}>
          <div>
            <h3>{job.task}</h3>
            <p className="muted" style={{ margin: 0 }}>
              {job.customer} · Crew: {job.crew || 'Not set'} · {job.date}
            </p>
          </div>
          <button className="ghost" onClick={() => nextStatus(job.id)}>
            <span className={`pill ${job.status.replace(' ', '')}`}>{job.status}</span>
          </button>
        </div>
      ))}
    </main>
  )
}
