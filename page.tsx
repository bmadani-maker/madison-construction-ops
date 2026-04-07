export default function ReportsPage() {
  const reports = [
    'Weekly executive summary',
    'Budget variance report',
    'Procurement risk report',
    'Open issues report',
    'Upcoming milestone report',
  ];

  return (
    <main>
      <h1 style={{ marginTop: 0 }}>Reports</h1>
      <p className="muted">Planned Madison reporting outputs.</p>

      <div className="card" style={{ marginTop: 20 }}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {reports.map((report) => (
            <li key={report} style={{ marginBottom: 10 }}>{report}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
