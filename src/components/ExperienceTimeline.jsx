import React from 'react';
import { Briefcase, Trophy, GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" style={{ padding: '80px 24px', background: 'rgba(9, 13, 22, 0.4)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '0.85rem', color: '#8B5CF6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
            Track Record & Career Journey
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#FFF', marginTop: '6px' }}>
            Work Experience, Hackathons & Education
          </h2>
        </div>

        {/* Grid Layout: Internship & Hackathons on left, Education on right */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Left Column: Work & Hackathons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#06B6D4', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Briefcase size={20} color="#06B6D4" /> Work Experience & Internships
            </h3>

            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid #06B6D4' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFF' }}>{exp.role}</h4>
                    <div style={{ fontSize: '0.9rem', color: '#38BDF8', fontWeight: '600' }}>{exp.company} • <span style={{ color: 'var(--text-muted)' }}>{exp.location}</span></div>
                  </div>
                  <span style={{ fontSize: '0.78rem', background: 'rgba(6, 182, 212, 0.15)', color: '#38BDF8', padding: '4px 10px', borderRadius: '8px', fontFamily: 'var(--font-mono)' }}>
                    {exp.period}
                  </span>
                </div>

                <ul style={{ marginTop: '14px', paddingLeft: '18px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#F59E0B', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Trophy size={20} color="#F59E0B" /> Hackathon Track Record
            </h3>

            {resumeData.hackathons.map((h, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #F59E0B' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFF' }}>{h.title}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#F59E0B', fontWeight: '600', background: 'rgba(245, 158, 11, 0.15)', padding: '2px 8px', borderRadius: '6px' }}>
                    {h.award}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#38BDF8', marginTop: '2px' }}>Role: {h.role} ({h.location})</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.5' }}>
                  {h.desc}
                </p>
              </div>
            ))}

          </div>

          {/* Right Column: Education & Coursework */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#8B5CF6', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <GraduationCap size={20} color="#8B5CF6" /> Academic Credentials
            </h3>

            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid #8B5CF6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFF' }}>{edu.degree}</h4>
                    <div style={{ fontSize: '0.875rem', color: '#C084FC' }}>{edu.institution}</div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#10B981', background: 'rgba(16, 185, 129, 0.15)', padding: '4px 10px', borderRadius: '8px' }}>
                    {edu.grade}
                  </span>
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>
                  Duration: {edu.period}
                </div>

                {edu.coursework && (
                  <div style={{ marginTop: '14px', borderTop: '1px solid var(--border-glass)', paddingTop: '12px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '8px' }}>
                      Relevant CS Coursework:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {edu.coursework.map((course, cIdx) => (
                        <span key={cIdx} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', padding: '2px 8px', borderRadius: '4px' }}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
