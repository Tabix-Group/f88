"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { FaHome, FaGraduationCap, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa"
import { FaHandsHelping } from "react-icons/fa"

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login"
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)",
        position: "relative",
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          width: "100%",
          background: isScrolled ? "rgba(15, 23, 42, 0.95)" : "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.2)" : "0 4px 16px rgba(0, 0, 0, 0.1)",
          padding: "1rem 0",
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
              <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginLeft: '2rem', gap: 8 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                transition: "transform 0.2s",
              }}
            >
                  {/* Icono cálido ya está al lado de f88 */}
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "1.75rem",
                  background: "linear-gradient(135deg, #F8FAFC 0%, #06B6D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.5px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                f88
              </span>
                  <FaHandsHelping size={24} color="#f7c873" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
          >
            <Link
              href="/dashboard"
              style={{
                color: "#F8FAFC",
                fontWeight: 500,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                transition: "all 0.2s",
                fontSize: "0.95rem",
              }}
            >
              <FaHome size={16} />
              Inicio
            </Link>

            <Link
              href="/curso"
              style={{
                color: "#F8FAFC",
                fontWeight: 500,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                transition: "all 0.2s",
                fontSize: "0.95rem",
              }}
            >
              <FaGraduationCap size={16} />
              Curso
            </Link>

            <button
              onClick={handleLogout}
              style={{
                background: "rgba(239, 68, 68, 0.1)",
                color: "#EF4444",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                fontWeight: 600,
                padding: "0.625rem 1.25rem",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.9rem",
              }}
            >
              <FaSignOutAlt size={14} />
              Salir
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            style={{
              display: "none",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              padding: "0.75rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <FaTimes size={18} color="#F8FAFC" /> : <FaBars size={18} color="#F8FAFC" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(15, 23, 42, 0.98)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderTop: "none",
              padding: "1.5rem 2rem",
              animation: "slideDown 0.3s ease-out",
            }}
            className="mobile-nav"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Link
                href="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: "#F8FAFC",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  transition: "all 0.2s",
                  background: "rgba(255, 255, 255, 0.05)",
                }}
              >
                <FaHome size={16} />
                Inicio
              </Link>

              <Link
                href="/curso"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: "#F8FAFC",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  transition: "all 0.2s",
                  background: "rgba(255, 255, 255, 0.05)",
                }}
              >
                <FaGraduationCap size={16} />
                Curso
              </Link>

              <button
                onClick={handleLogout}
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  color: "#EF4444",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  fontWeight: 600,
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  justifyContent: "center",
                  marginTop: "0.5rem",
                }}
              >
                <FaSignOutAlt size={16} />
                Salir
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </main>

      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .desktop-nav a:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #06B6D4 !important;
          transform: translateY(-1px);
        }

        .desktop-nav button:hover {
          background: rgba(239, 68, 68, 0.2) !important;
          border-color: rgba(239, 68, 68, 0.4) !important;
          transform: translateY(-1px);
        }

        .mobile-nav a:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #06B6D4 !important;
        }

        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: flex !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
