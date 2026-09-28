import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink, Network, Play, Zap, Layers } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function Carousel3D({ 
  projects, 
  activeRole, 
  onOpenArchitecture, 
  onOpenSimulator, 
  onOpenCaseStudy 
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);

  const total = projects.length;
  if (total === 0) return null;

  const angleStep = 360 / total;
  const cardWidth = 340; // px
  const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / total)) + 60; // Cylindrical radius

  const rotateToIndex = (index) => {
    const targetAngle = -index * angleStep;
    setActiveIndex((index + total) % total);
    setRotation(targetAngle);
  };

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = rotation;
    if (e.target.setPointerCapture) {
      try {
        e.target.setPointerCapture(e.pointerId);
      } catch (err) {}
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    const newRotation = startRotation.current + (deltaX * 0.25);
    setRotation(newRotation);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const snappedIndex = Math.round(-rotation / angleStep);
    rotateToIndex(snappedIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') rotateToIndex(activeIndex - 1);
      if (e.key === 'ArrowRight') rotateToIndex(activeIndex + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, total]);

  return (
    <div className="relative w-full py-10 overflow-hidden select-none">
      
      {/* 3D Perspective Container */}
      <div 
        className="relative w-full h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '1200px' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* 3D Rotating Ring */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`
          }}
        >
          {projects.map((project, i) => {
            const cardAngle = i * angleStep;
            const isActive = i === activeIndex;
            const isMatchRole = project.roles.includes(activeRole);

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (!isActive) {
                    rotateToIndex(i);
                  }
                }}
                className={`absolute w-[330px] sm:w-[350px] h-[480px] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/15 border-2 border-cyan-400 shadow-[0_20px_50px_rgba(6,182,212,0.35)] backdrop-blur-2xl ring-1 ring-cyan-400/40 z-20' 
                    : 'bg-white/5 border border-white/20 opacity-60 backdrop-blur-md hover:opacity-90'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden'
                }}
              >
                <div>
                  {/* Header Row: Step counter + Role highlight */}
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-300 mb-2">
                    <span>0{i + 1} / 0{total}</span>
                    {isMatchRole && (
                      <span className="flex items-center gap-1 bg-cyan-500/20 text-cyan-300 px-2.5 py-0.5 rounded-full border border-cyan-400/40 text-[10px]">
                        <Sparkles size={10} className="text-cyan-400 animate-pulse" /> Active Role
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Layers size={11} className="text-cyan-400" /> {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-white mt-1 leading-tight">{project.title}</h3>
                  <div className="text-xs font-semibold text-cyan-300 mt-0.5">{project.subtitle}</div>

                  <p className="text-xs text-white/85 mt-3 leading-relaxed line-clamp-3">{project.description}</p>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-1.5 mt-4 p-2.5 rounded-xl bg-black/40 border border-white/15 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-mono text-xs font-bold text-white">{m.val}</div>
                        <div className="text-[9px] text-white/60 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="liquid-pill px-2 py-0.5 rounded-full text-[10px] text-white/90 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-4 pt-3 border-t border-white/20 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.isCaseStudy ? (
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenCaseStudy?.(project); }}
                        className="btn-secondary text-[11px] font-bold py-1.5 px-3 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border-emerald-400/50 text-emerald-200"
                      >
                        <Zap size={12} className="text-emerald-400" /> Case Study
                      </button>
                    ) : (
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenArchitecture?.(project); }}
                        className="btn-secondary text-[11px] font-bold py-1.5 px-3"
                      >
                        <Network size={12} className="text-cyan-300" /> Arch
                      </button>
                    )}

                    {project.simulatorType !== 'generic' && (
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenSimulator?.(project); }}
                        className="btn-secondary text-[11px] font-bold py-1.5 px-3 bg-purple-500/20 border-purple-400/40 text-purple-200"
                      >
                        <Play size={12} className="text-purple-300" /> Demo
                      </button>
                    )}

                    {project.demoUrl && project.demoUrl !== '#' && !project.demoUrl.includes('github.com') && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-secondary text-[11px] font-bold py-1.5 px-2.5 bg-emerald-500/20 border-emerald-400/40 text-emerald-200 inline-flex items-center gap-1"
                      >
                        <ExternalLink size={11} className="text-emerald-300" /> Live
                      </a>
                    )}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/70 hover:text-white transition-colors p-1"
                  >
                    <GithubIcon size={14} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-center gap-5 mt-4">
        <button
          onClick={() => rotateToIndex(activeIndex - 1)}
          className="w-10 h-10 rounded-full liquid-pill hover:bg-white/30 border border-white/30 flex items-center justify-center text-white transition-all shadow-lg"
          aria-label="Previous project"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => rotateToIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === activeIndex ? 'w-8 bg-cyan-400 shadow-[0_0_10px_#06B6D4]' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => rotateToIndex(activeIndex + 1)}
          className="w-10 h-10 rounded-full liquid-pill hover:bg-white/30 border border-white/30 flex items-center justify-center text-white transition-all shadow-lg"
          aria-label="Next project"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
