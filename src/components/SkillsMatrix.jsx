import React, { useState } from 'react';
import { Code, Cpu, Database, Wrench, Search, CheckCircle, Star } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function SkillsMatrix({ activeRole }) {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...resumeData.skillsCategory.map(c => c.category)];

  const filteredCategories = resumeData.skillsCategory.map(catGroup => {
    if (activeTab !== 'All' && catGroup.category !== activeTab) return null;

    const matchedSkills = catGroup.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.note.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchedSkills.length === 0) return null;

    return {
      category: catGroup.category,
      skills: matchedSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '0.85rem', color: '#06B6D4', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
            Technical Proficiency Matrix
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#FFF', marginTop: '6px' }}>
            Skills & Software Mastery
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '10px' }}>
            Extracted from verified project implementations, open-source repositories, and coursework.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  background: activeTab === cat ? 'linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)' : 'rgba(255, 255, 255, 0.05)',
                  border: activeTab === cat ? '1px solid #38BDF8' : '1px solid var(--border-glass)',
                  color: activeTab === cat ? '#FFF' : 'var(--text-muted)',
                  borderRadius: '10px',
                  padding: '8px 16px',
                  fontSize: '0.85rem',
                  fontWeight: activeTab === cat ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', minWidth: '240px' }}>
            <Search size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text"
              placeholder="Search skill (e.g. Java, FastAPI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                borderRadius: '10px',
                padding: '8px 12px 8px 36px',
                color: '#FFF',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {filteredCategories.map((group, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px' }}>
              
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#06B6D4', marginBottom: '16px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={18} color="#8B5CF6" /> {group.category}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {group.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    style={{
                      background: skill.highlight ? 'rgba(6, 182, 212, 0.06)' : 'rgba(255, 255, 255, 0.02)',
                      border: skill.highlight ? '1px solid rgba(6, 182, 212, 0.25)' : '1px solid var(--border-glass)',
                      borderRadius: '12px',
                      padding: '12px 14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: '600', color: '#FFF', fontSize: '0.95rem' }}>
                        {skill.name}
                      </span>

                      <span style={{
                        fontSize: '0.725rem',
                        fontWeight: '600',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: skill.level === 'Primary' ? 'rgba(245, 158, 11, 0.2)' : skill.level === 'Advanced' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                        color: skill.level === 'Primary' ? '#F59E0B' : skill.level === 'Advanced' ? '#10B981' : 'var(--text-muted)'
                      }}>
                        {skill.level}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {skill.note}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
