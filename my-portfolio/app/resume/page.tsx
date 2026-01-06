export default function ResumePage() {
  return (
    <section style={{ display: "grid", gap: 14 }}>
      <h1 style={{ margin: 0, fontSize: 22 }}>Vinamr's Resume</h1>

      <p style={{ margin: 0 }}>
        <a href="/resume.pdf">click on me to download my resume</a>
      </p>

      <div style={{ border: "1px solid #eee", borderRadius: 10, overflow: "hidden" }}>
        <iframe
          src="/resume.pdf"
          title="Resume"
          style={{ width: "100%", height: "75vh", border: 0 }}
        />
      </div>
    </section>
  );
}
