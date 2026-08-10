import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '0.85rem', color: '#06B6D4', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
            Get In Touch
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#FFF', marginTop: '6px' }}>
            Let's Build Something Exceptional
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '8px' }}>
            Whether you have a full-stack opportunity, AI role, or hackathon collaboration in mind.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Left: Direct Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', color: '#06B6D4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Email Address</div>
                  <div style={{ color: '#FFF', fontWeight: '600', fontSize: '0.95rem' }}>{resumeData.personalInfo.email}</div>
                </div>
              </div>

              <button 
                onClick={() => copyToClipboard(resumeData.personalInfo.email, 'email')} 
                style={{ background: 'none', border: 'none', color: '#06B6D4', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}
              >
                {copiedEmail ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                {copiedEmail ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Phone / WhatsApp</div>
                  <div style={{ color: '#FFF', fontWeight: '600', fontSize: '0.95rem' }}>{resumeData.personalInfo.phone}</div>
                </div>
              </div>

              <button 
                onClick={() => copyToClipboard(resumeData.personalInfo.phone, 'phone')} 
                style={{ background: 'none', border: 'none', color: '#8B5CF6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}
              >
                {copiedPhone ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                {copiedPhone ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Location</div>
                <div style={{ color: '#FFF', fontWeight: '600', fontSize: '0.95rem' }}>{resumeData.personalInfo.location}</div>
              </div>
            </div>

          </div>

          {/* Right: Glassmorphism Form */}
          <div className="glass-panel" style={{ padding: '28px' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Check size={28} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#FFF' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px' }}>
                  Thank you for reaching out! Lohith will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%', background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-glass)', borderRadius: '10px',
                      padding: '10px 14px', color: '#FFF', fontSize: '0.9rem', outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Your Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%', background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-glass)', borderRadius: '10px',
                      padding: '10px 14px', color: '#FFF', fontSize: '0.9rem', outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Hello Lohith, I'd like to discuss a software engineering opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%', background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-glass)', borderRadius: '10px',
                      padding: '10px 14px', color: '#FFF', fontSize: '0.9rem', outline: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                  <Send size={16} /> Send Direct Message
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
