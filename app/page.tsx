import Link from 'next/link';

const data = {
  kpis: {
    activeProjects: 3,
    atRisk: 2,
    delayedProcurement: 2,
    waitingOnBarry: 2,
  },
  projects: [
    { id: 'p2', name: '2800 Jasper Rd SE', status: 'active', priority: 'medium', summary: 'Active renovation — framing complete, MEP rough-in underway.' },
    { id: 'p1', name: '351 53rd St SE', status: 'active', priority: 'high', summary: 'NOI abatement and compliance follow-up active. Multiple open DOB items.' },
    { id: 'p3', name: '5216 D St SE', status: 'active', priority: 'high', summary: 'Multiple open violation reminders require grouped resolution strategy.' },
  ],
  barryIssues: [
    { id: 'i1', title: 'Abatement clearance certificate pending', severity: 'high', project_name: '351 53rd St SE' },
    { id: 'i2', title: 'Four open violation reminders need consolidated action plan', severity: 'high', project_name: '5216 D St SE' },
  ],
  riskProcurement: [
    { id: 'pr1', item_name: 'HVAC ductwork + air handler', vendor: 'Metro HVAC Distributors', procurement_status: 'delayed', project_name: '2800 Jasper Rd SE' },
    { id: 'pr2', item_name: 'Window replacement package (8 units)', vendor: 'Capital Windows DC', procurement_status: 'delayed', project_name: '5216 D St SE' },
  ],
};

export default function HomePage() {
  const cards = [
    { title: 'Active Projects', value: data.kpis.activeProjects },
    { title: 'Projects At Risk', value: data.kpis.atRisk },
    { title: 'Delayed Procurement', value: data.kpis.delayedProcurement },
    { title: 'Waiting On Barry', value: data.kpis.waitingOnBarry },
  ];

  return (
    <main>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Executive Dashboard</h1>
        <p className="muted" style={{ marginTop: 8 }}>One operator view for Madison construction projects.</p>
      </div>

      <section className="kpi-grid" style={{ marginBottom: 24 }}>
        {cards.map((card) => (
          <div key={card.title} className="card">
            <div className="muted" style={{ fontSize: 14 }}>{card.title}</div>
            <div style={{ fontSize: 34, fontWeight: 700, marginTop: 10 }}>{card.value}</div>
          </div>
        ))}
      </section>

      <section className="section-grid">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ marginTop: 0 }}>Projects Needing Attention</h2>
            <Link href="/projects" className="muted">View all</Link>
          </div>
          <table className="table">
            <thead>
              <tr><th>Project</th><th>Status</th><th>Priority</th><th>Next Focus</th></tr>
            </thead>
            <tbody>
              {data.projects.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td><span className="badge active">{p.status}</span></td>
                  <td><span className={`badge ${p.priority}`}>{p.priority}</span></td>
                  <td>{p.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'grid', gap: 20 }}>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Waiting on Barry</h2>
            {data.barryIssues.map((issue) => (
              <div key={issue.id} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 700 }}>{issue.title}</div>
                <div className="muted">{issue.project_name} · {issue.severity}</div>
              </div>
            ))}
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Procurement Risks</h2>
            {data.riskProcurement.map((item) => (
              <div key={item.id} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 700 }}>{item.item_name}</div>
                <div className="muted">{item.project_name} · {item.vendor} · {item.procurement_status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
