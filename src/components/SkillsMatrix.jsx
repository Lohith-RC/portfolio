import React, { useState } from 'react';
import { Cpu, Search, Sparkles, Box, LayoutGrid } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import SkillsNetworkBackground from './SkillsNetworkBackground';
import TechNodesConstellation from './TechNodesConstellation';

export default function SkillsMatrix({ activeRole }) {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [graphMode, setGraphMode] = useState('3d-nodes'); // '3d-nodes' | 'matrix'

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
    <section id="skills" className="relative px-5 py-20 sm:px-8 lg:px-12 border-t border-white/20 bg-black/70 backdrop-blur-xl overflow-hidden">
      
      {/* 3D R3F Background */}
      <SkillsNetworkBackground hoveredSkill={hoveredSkill} />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-widest mb-2 drop-shadow flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-cyan-400" /> Interactive 3D Neural Constellation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-md">
            Software & Systems Mastery
          </h2>
          <p className="text-white/80 text-sm sm:text-base mt-3">
            Extracted from verified project implementations, open-source repositories, and coursework.
          </p>

          {/* Mode Selector Pill */}
          <div className="inline-flex items-center gap-1 liquid-pill p-1 border border-white/30 mt-6">
            <button
              onClick={() => setGraphMode('3d-nodes')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                graphMode === '3d-nodes'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Box size={14} /> 3D Spatial Neural Graph
            </button>
            <button
              onClick={() => setGraphMode('matrix')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                graphMode === 'matrix'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <LayoutGrid size={14} /> Proficiency Matrix Cards
            </button>
          </div>
        </div>

        {/* 3D GRAPH MODE (Matching Provided Screenshot) */}
        {graphMode === '3d-nodes' ? (
          <div className="my-6">
            <TechNodesConstellation />
          </div>
        ) : (
          /* PROFICIENCY MATRIX CARDS MODE */
          <div>
            {/* Filter Controls & Search */}
            <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
              
              {/* Category Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-1 max-w-full">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all whitespace-nowrap ${
                      activeTab === cat
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md border border-cyan-400'
                        : 'liquid-pill text-white/70 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative min-w-[240px]">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                <input 
                  type="text"
                  placeholder="Search skill (e.g. Java, Python, React)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/25 pl-9 pr-4 py-2 text-xs text-white placeholder-white/50 outline-none focus:border-cyan-400"
                />
              </div>

            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((group, idx) => (
                <div key={idx} className="liquid-glass p-6 border-white/25 hover:border-cyan-400/50 transition-all">
                  
                  <h3 className="text-lg font-bold text-cyan-300 mb-4 pb-2 border-b border-white/20 flex items-center gap-2">
                    <Cpu size={18} className="text-purple-300" /> {group.category}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {group.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer ${
                          hoveredSkill === skill.name
                            ? 'bg-cyan-500/30 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-[1.02]'
                            : skill.highlight 
                            ? 'bg-cyan-500/15 border-cyan-400/30' 
                            : 'bg-white/10 border-white/15 hover:bg-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white">{skill.name}</span>

                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                            skill.level === 'Primary' 
                              ? 'bg-amber-500/30 text-amber-200 border border-amber-400/50' 
                              : skill.level === 'Advanced' 
                              ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/50' 
                              : 'liquid-pill text-white/80'
                          }`}>
                            {skill.level}
                          </span>
                        </div>

                        <div className="text-xs text-white/75 mt-1 font-medium">
                          {skill.note}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
