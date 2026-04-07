import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Madison Construction Ops',
  description: 'Internal Madison construction operations platform',
};

const navItems = [
  { href: '/', label: 'Dashboard' },
  { href: '/projects', label: 'Projects' },
  { href: '/issues', label: 'Issues' },
  { href: '/procurement', label: 'Procurement' },
  { href: '/reports', label: 'Reports' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <aside className="sidebar">
            <h1>Madison Construction Ops</h1>
            <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 20 }}>Internal Madison system</div>
            <nav>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </nav>
          </aside>
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
