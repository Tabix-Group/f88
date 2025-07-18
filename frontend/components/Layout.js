"use client";
import Head from 'next/head';
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaHome, FaGraduationCap, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

export default function Layout(props) {
  const { children, title } = props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cursos', href: '/curso' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Recursos', href: '/dashboard' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      <Head>
        <title>{title || 'F88 | Academia FORTITUDE'}</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div>
        <nav style={{
          width: '100%',
          background: '#18181b',
          color: '#fff',
          padding: '0.5rem 0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}>
          <div style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
          }}>
            {/* Logo */}
            <Link href="/" style={{display:'flex',alignItems:'center',gap:'0.7rem',textDecoration:'none'}}>
              <div style={{width:44,height:44,borderRadius:'50%',background:'linear-gradient(135deg,#06B6D4 60%,#18181b 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="14" fill="#18181b" />
                  <path d="M14 4L24 24H4L14 4Z" fill="#06B6D4" />
                </svg>
              </div>
              <span style={{fontWeight:700,fontSize:'1.45rem',color:'#fff',letterSpacing:'-0.02em'}}>F88</span>
            </Link>
            {/* Links */}
            <div className="desktop-nav" style={{display:'flex',gap:'2.2rem',alignItems:'center'}}>
              {navLinks.map((link, idx) => (
                <Link key={link.name} href={link.href} legacyBehavior>
                  <a
                    style={{
                      color:'#fff',
                      fontWeight:600,
                      fontSize:'1.08rem',
                      textDecoration:'none',
                      padding:'0.5rem 0',
                      position:'relative',
                      transition:'color 0.2s, transform 0.18s',
                      display:'inline-block',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#38bdf8';
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        {children}
      </div>
    </>
  );
}
