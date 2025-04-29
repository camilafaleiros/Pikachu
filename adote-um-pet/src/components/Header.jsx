import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Adote um Pet 🐾</h1>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
