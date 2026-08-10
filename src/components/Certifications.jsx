import React from 'react';
import { ShieldCheck, Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
            Verified Industry Credentials
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#FFF', marginTop: '6px' }}>
            Certifications & Networking Mastery
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '8px' }}>
            Issued by Cisco Networking Academy and OpenEDG Python Institute.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {resumeData.certifications.map((cert, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '22px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', flexShrink: 0
              }}>
                <ShieldCheck size={22} />
              </div>

              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFF' }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: '600', marginTop: '2px' }}>
                  {cert.issuer}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.5' }}>
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
