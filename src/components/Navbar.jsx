import React, { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on Escape
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="topbar" id="top">
      <nav className="navwrap" aria-label="Primary">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <img className="brand-logo" src="/logo.webp" alt="Nivedita Ganesh Logo" />
          <span className="brand-name">Nivedita Ganesh</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="hamburger" aria-hidden="true" />
        </button>

        {/* Desktop links */}
        <ul className="navlinks" role="list">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a className="navlink" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile drawer */}
      <div className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="drawer-panel" role="dialog" aria-label="Menu">
          <div className="drawer-head">
            <span className="drawer-title">Menu</span>
            <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>

          <ul className="drawer-links" role="list">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  className="drawer-link"
                  href={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Click outside to close */}
        <button
          className="drawer-backdrop"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      </div>
    </header>
  );
}
