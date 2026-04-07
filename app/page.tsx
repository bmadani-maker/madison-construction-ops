'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface DashboardData {
  kpis: { activeProjects: number; atRisk: number; delayedProcurement: number; waitingOnBarry: number; openIssues: number };
  projects: { id: string; name: string; status: string; priority: string; summary: string }[];
  barryIssues: { id: string; title: string; severity: string; status: string; project_name: string }[];
  riskProcurement: { id: string; item_name: string; vendor: string; procurement_status: string; project_name: string }[];
}

export default function HomePage() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch('/api/dashboard').then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <main><p>Loading...</p></main>;

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
                  <td><Link href={`/projects/${p.id}`}>{p.name}</Link></td>
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
            {data.barryIssues.length === 0 ? <p className="muted">Nothing right now.</p> : data.barryIssues.map((issue) => (
              <div key={issue.id} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 700 }}>{issue.title}</div>
                <div className="muted">{issue.project_name} · {issue.severity}</div>
              </div>
            ))}
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Procurement Risks</h2>
            {data.riskProcurement.length === 0 ? <p className="muted">No flagged items.</p> : data.riskProcurement.map((item) => (
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
