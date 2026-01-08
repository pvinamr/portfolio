import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { site } from "@/lib/site";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: site.name,
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <Nav />
          <main style={{ paddingBottom: 64 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
