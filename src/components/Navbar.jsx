import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Code2, Cpu, Database, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Navbar({ activeRole, setActiveRole }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Resume', href: '#resume' }
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(9, 13, 22, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        padding: scrolled ? '14px 24px' : '22px 24px'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)'
          }}>
            <Terminal size={20} />
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFF', letterSpacing: '-0.02em' }}>
              Lohith<span style={{ color: '#06B6D4' }}>.dev</span>
            </span>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              VTU '27 • CS Engineer
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#06B6D4'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Role Switcher Pill Bar & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* Role Switcher Dropdown / Tabs */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            border: '1px solid var(--border-glass)', 
            borderRadius: '12px', 
            padding: '4px',
            display: 'flex',
            gap: '4px'
          }}>
            {resumeData.roleModes.map((role) => {
              const active = activeRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  title={role.description}
                  style={{
                    border: 'none',
                    background: active ? 'linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)' : 'transparent',
                    color: active ? '#FFF' : 'var(--text-muted)',
                    fontWeight: active ? '600' : '500',
                    fontSize: '0.78rem',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: active ? '0 2px 10px rgba(6, 182, 212, 0.3)' : 'none'
                  }}
                >
                  {role.id === 'fullstack' && '⚡ Full-Stack'}
                  {role.id === 'aiml' && '🧠 AI / ML'}
                  {role.id === 'backend' && '⚙️ Backend'}
                </button>
              );
            })}
          </div>

          <a href="#contact" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            <Mail size={16} /> Hire Me
          </a>
        </div>

      </div>
    </header>
  );
}
