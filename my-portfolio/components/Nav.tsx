import Link from 'next/link';

export default function Nav() {
  return (
    <header style={{ padding: "32px 0" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
        <Link href="/" style={{ textDecoration: "none", fontWeight: 600 }}>
          Vinamr Pemmaraju
        </Link>

        <div style={{ display: "flex", gap: 14, fontSize: 14 }}>
          <Link href="/projects" style={{ textDecoration: "none" }}>Projects</Link>
          <Link href="/resume" style={{ textDecoration: "none" }}>Resume</Link>
          <a href="https://github.com/pvinamr" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vinamr-pemmaraju-056001225/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}