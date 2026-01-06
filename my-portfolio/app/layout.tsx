import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Vinamr Pemmaraju",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <Nav />
          <main style={{ paddingBottom: 64 }}>{children}</main>
          <footer style={{ fontSize: 14, color: "#666", paddingBottom: 30 }}>
            © {new Date().getFullYear()} Vinamr Pemmaraju
          </footer>
        </div>
      </body>
    </html>
  );
}
