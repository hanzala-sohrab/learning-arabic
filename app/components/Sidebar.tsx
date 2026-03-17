"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/alphabet", label: "Alphabet", icon: "أ" },
  { href: "/vocabulary", label: "Vocabulary", icon: "📖" },
  { href: "/practice", label: "Practice", icon: "🎯" },
  { href: "/lessons", label: "Lessons", icon: "📚" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        id="sidebar-toggle"
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          zIndex: 1001,
          display: "none",
          width: "44px",
          height: "44px",
          background: "var(--bg-card)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-md)",
          color: "var(--text-primary)",
          fontSize: "1.25rem",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 999,
            display: "none",
          }}
          className="mobile-overlay"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar ${mobileOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "var(--sidebar-width)",
          height: "100vh",
          background: "var(--bg-secondary)",
          borderRight: "1px solid var(--border-subtle)",
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem 0",
          zIndex: 1000,
          transition: "transform 0.3s ease",
          overflowY: "auto",
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: "0 1.5rem",
            marginBottom: "2rem",
          }}
        >
          <Link
            href="/"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => setMobileOpen(false)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span
                style={{
                  fontSize: "1.75rem",
                  background: "var(--gradient-gold)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "var(--font-arabic)",
                }}
              >
                العربية
              </span>
              <div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  Arabic
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                  }}
                >
                  Learning App
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0 0.75rem" }}>
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                id={`nav-${item.label.toLowerCase()}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  marginBottom: "0.25rem",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "var(--accent-gold-light)" : "var(--text-secondary)",
                  background: isActive ? "rgba(245, 166, 35, 0.1)" : "transparent",
                  borderLeft: isActive ? "3px solid var(--accent-gold)" : "3px solid transparent",
                  transition: "all 0.2s ease",
                }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: item.icon === "أ" ? "1.25rem" : "1rem",
                    fontFamily: item.icon === "أ" ? "var(--font-arabic)" : "inherit",
                  }}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div
          style={{
            padding: "1rem 1.5rem",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textAlign: "center",
          }}
        >
          Start your Arabic journey ✨
        </div>
      </aside>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex !important;
          }
          .mobile-overlay {
            display: block !important;
          }
          .sidebar {
            transform: translateX(-100%);
          }
          .sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
