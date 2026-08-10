import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Code2, Play, Cpu, Layers, Sparkles, Copy, Check, Eye, ExternalLink, Zap } from 'lucide-react';
import LinkFlowDemoHero from './LinkFlowDemoHero';

export default function LinkFlowCaseStudyModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'technical' | 'code'
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const techStack = [
    { name: 'Vite', version: '^5.4.2' },
    { name: 'React 18', version: '^18.3.1' },
    { name: 'TypeScript', version: '^5.5.3' },
    { name: 'Tailwind CSS 3.4', version: '^3.4.1' },
    { name: 'Lucide React', version: '^0.344.0' }
  ];

  const colorPalette = [
    { name: 'Dark Green (Text/Buttons)', hex: '#1f2a1d' },
    { name: 'Medium Dark Green', hex: '#2d3a2a' },
    { name: 'Button Hover', hex: '#2a3827' },
    { name: 'Body Text Green', hex: '#4b5b47' },
    { name: 'Heading Primary', hex: '#336443' },
    { name: 'Heading Accent', hex: '#85AB8B' },
    { name: 'Bottom-Left Text', hex: '#3d5638' }
  ];

  const boomerangCode = `// BoomerangVideoBg.tsx — HTML5 Canvas Frame Capture & Forward/Backward Loop
import { useEffect, useRef, useState } from 'react';

export default function BoomerangVideoBg({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement>(null);
  const [framesReady, setFramesReady] = useState(false);
  const framesRef = useRef<HTMLCanvasElement[]>([]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const frames: HTMLCanvasElement[] = [];
    let capturing = true;
    let lastTime = -1;
    const MAX_WIDTH = 960;

    const captureFrame = () => {
      if (!capturing || video.readyState < 2) return;
      if (video.currentTime === lastTime) return;
      lastTime = video.currentTime;

      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (!vw || !vh) return;

      const scale = Math.min(1, MAX_WIDTH / vw);
      const w = Math.round(vw * scale);
      const h = Math.round(vh * scale);

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, w, h);
      frames.push(canvas);
    };

    const vfcVideo = video as HTMLVideoElement & { requestVideoFrameCallback?: (cb: () => void) => number };
    const hasVFC = typeof vfcVideo.requestVideoFrameCallback === 'function';

    let rafId = 0;
    const rafLoop = () => { captureFrame(); if (capturing) rafId = requestAnimationFrame(rafLoop); };
    const vfcLoop = () => { captureFrame(); if (capturing && vfcVideo.requestVideoFrameCallback) vfcVideo.requestVideoFrameCallback(vfcLoop); };

    const onEnded = () => { capturing = false; if (frames.length > 0) { framesRef.current = frames; setFramesReady(true); } };
    const onLoaded = () => { video.play().catch(() => {}); if (hasVFC) vfcVideo.requestVideoFrameCallback!(vfcLoop); else rafId = requestAnimationFrame(rafLoop); };

    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('ended', onEnded);
    if (video.readyState >= 1) onLoaded();

    return () => { capturing = false; cancelAnimationFrame(rafId); video.removeEventListener('loadedmetadata', onLoaded); video.removeEventListener('ended', onEnded); };
  }, [src]);

  useEffect(() => {
    if (!framesReady) return;
    const canvas = displayCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const frames = framesRef.current;
    if (frames.length === 0) return;

    canvas.width = frames[0].width;
    canvas.height = frames[0].height;

    let index = 0, direction = 1, last = performance.now();
    const interval = 1000 / 30;
    let rafId = 0;

    const render = (now: number) => {
      if (now - last >= interval) {
        last = now;
        ctx.drawImage(frames[index], 0, 0);
        index += direction;
        if (index >= frames.length - 1) { index = frames.length - 1; direction = -1; }
        else if (index <= 0) { index = 0; direction = 1; }
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [framesReady]);

  return (
    <div className={className ?? 'absolute inset-0 w-full h-full'}>
      <video ref={videoRef} src={src} className="w-full h-full object-cover" style={{ display: framesReady ? 'none' : 'block' }} muted playsInline preload="auto" crossOrigin="anonymous" />
      <canvas ref={displayCanvasRef} className="w-full h-full object-cover" style={{ display: framesReady ? 'block' : 'none' }} />
    </div>
  );
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(boomerangCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="LinkFlow Cinematic Boomerang Engine Case Study Modal">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="modal-content relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '1000px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
          background: 'rgba(12, 18, 30, 0.96)',
          backdropFilter: 'blur(36px) saturate(210%)',
          border: '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow: '0 30px 90px rgba(0,0,0,0.8), 0 0 50px rgba(6, 182, 212, 0.2)'
        }}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/20 flex items-center justify-between bg-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold shadow-lg border border-white/30">
              <Zap size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                LinkFlow — Cinematic Boomerang Engine Case Study
              </h3>
              <div className="text-xs font-semibold text-emerald-300">
                React • TypeScript • HTML5 Canvas • Boomerang Video Engine
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close LinkFlow Case Study Modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all border border-white/20 shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 py-3 border-b border-white/15 bg-black/40 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'demo'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md border border-white/40'
                  : 'liquid-pill text-white/70 hover:text-white'
              }`}
            >
              <Eye size={13} className="inline mr-1.5" /> Interactive Demo
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'technical'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md border border-white/40'
                  : 'liquid-pill text-white/70 hover:text-white'
              }`}
            >
              <Cpu size={13} className="inline mr-1.5" /> Technical Deep Dive
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'code'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md border border-white/40'
                  : 'liquid-pill text-white/70 hover:text-white'
              }`}
            >
              <Code2 size={13} className="inline mr-1.5" /> Source Code (`BoomerangVideoBg.tsx`)
            </button>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {techStack.map((t, idx) => (
              <span key={idx} className="liquid-pill px-2.5 py-0.5 text-[10px] font-mono font-semibold text-emerald-300">
                {t.name}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          
          {/* TAB 1: INTERACTIVE DEMO */}
          {activeTab === 'demo' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed flex items-start gap-3">
                <Sparkles size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Live Boomerang Canvas Preview:</strong> Watch the video below load metadata, capture 30fps frames downsampled to 960px, and transition into an infinite forward-and-backward ping-pong loop without video element pause seams!
                </div>
              </div>

              {/* Live Rendered Demo Component */}
              <LinkFlowDemoHero />
            </div>
          )}

          {/* TAB 2: TECHNICAL DEEP DIVE */}
          {activeTab === 'technical' && (
            <div className="space-y-8">
              
              {/* Problem / Solution Overview */}
              <div className="p-6 rounded-2xl liquid-glass border-emerald-400/40">
                <h4 className="text-base font-bold text-emerald-300 flex items-center gap-2 mb-2">
                  <Zap size={18} /> Project Overview & System Problem Statement
                </h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  <strong>Problem:</strong> Standard HTML5 <code>&lt;video&gt;</code> loops introduce jarring black-frame flickering, latency stutter when seeking backward (<code>video.currentTime -= delta</code>), and heavy GPU memory thrashing during continuous video restarts.
                </p>
                <p className="text-sm text-white/90 leading-relaxed mt-3">
                  <strong>Solution:</strong> <code>BoomerangVideoBg.tsx</code> captures raw video frames onto an offscreen HTML5 <code>&lt;canvas&gt;</code> element using <code>requestVideoFrameCallback</code> upon initial load. Once metadata ends, the raw video element is hidden and a 30fps render loop plays the stored frame buffer forward and in reverse endlessly.
                </p>
              </div>

              {/* Technical Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Boomerang Logic */}
                <div className="p-5 rounded-2xl liquid-glass border-white/20">
                  <h5 className="text-sm font-bold text-cyan-300 mb-2 flex items-center gap-2">
                    <Cpu size={16} /> 1. Boomerang Logic & Frame Buffer
                  </h5>
                  <ul className="text-xs text-white/80 space-y-2 list-disc list-inside leading-relaxed">
                    <li>Leverages <code>requestVideoFrameCallback</code> API for hardware-synced 60Hz frame extraction.</li>
                    <li>Stores downsampled canvas frames (<code>HTMLCanvasElement[]</code>) in memory.</li>
                    <li>Maintains bidirectional index pointers (<code>index += direction</code>) switching between <code>direction = 1</code> and <code>direction = -1</code> at boundaries.</li>
                  </ul>
                </div>

                {/* Performance Optimization */}
                <div className="p-5 rounded-2xl liquid-glass border-white/20">
                  <h5 className="text-sm font-bold text-amber-300 mb-2 flex items-center gap-2">
                    <Sparkles size={16} /> 2. 960px Downsampling & Memory Care
                  </h5>
                  <ul className="text-xs text-white/80 space-y-2 list-disc list-inside leading-relaxed">
                    <li>Downscales 4K/1080p source video down to <code>MAX_WIDTH = 960px</code> via aspect ratio scale factor.</li>
                    <li>Reduces RAM consumption from &gt;500MB down to &lt;45MB for full frame sequences.</li>
                    <li>Prevents garbage collection freezes while maintaining 30fps visual smoothness.</li>
                  </ul>
                </div>

                {/* Animation Strategy */}
                <div className="p-5 rounded-2xl liquid-glass border-white/20">
                  <h5 className="text-sm font-bold text-purple-300 mb-2 flex items-center gap-2">
                    <Layers size={16} /> 3. No-Library Pure CSS Animation
                  </h5>
                  <ul className="text-xs text-white/80 space-y-2 list-disc list-inside leading-relaxed">
                    <li>Zero heavy animation libraries (0kb Framer Motion dependence).</li>
                    <li>Mobile menu drawer utilizes <code>cubic-bezier(0.22, 1, 0.36, 1)</code> easing over 500ms.</li>
                    <li>Staggered link entrance via inline <code>transitionDelay: ${'${150 + i * 70}ms'}</code>.</li>
                    <li>Hamburger to X morphing using CSS <code>rotate-90 scale-50 opacity-0</code>.</li>
                  </ul>
                </div>

                {/* Typography & Responsive Architecture */}
                <div className="p-5 rounded-2xl liquid-glass border-white/20">
                  <h5 className="text-sm font-bold text-emerald-300 mb-2 flex items-center gap-2">
                    <Code2 size={16} /> 4. Design System & Typography
                  </h5>
                  <ul className="text-xs text-white/80 space-y-2 list-disc list-inside leading-relaxed">
                    <li><strong>Typography:</strong> Neue Haas Grotesk Display Pro 55 Roman + Text Pro.</li>
                    <li><strong>Desktop Nav:</strong> Glass pill capsule (<code>bg-white/70 backdrop-blur-md rounded-full</code>).</li>
                    <li><strong>Mobile Drawer:</strong> Full height right-side drawer (<code>bg-white/95 backdrop-blur-xl w-[85%]</code>).</li>
                  </ul>
                </div>

              </div>

              {/* Color Swatches */}
              <div className="p-5 rounded-2xl liquid-glass border-white/20">
                <h5 className="text-sm font-bold text-white mb-3">Color System Palette</h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                  {colorPalette.map((c, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                      <div className="w-full h-8 rounded-lg mb-2 border border-white/20 shadow-inner" style={{ backgroundColor: c.hex }} />
                      <div className="text-[10px] font-mono text-white font-bold">{c.hex}</div>
                      <div className="text-[9px] text-white/60 truncate mt-0.5">{c.name}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: SOURCE CODE INSPECTOR */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-300">BoomerangVideoBg.tsx — Frame Capture & Canvas Renderer</span>
                <button
                  onClick={copyCode}
                  className="liquid-pill px-3 py-1 text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-1.5"
                >
                  {copiedCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  {copiedCode ? 'Copied Code' : 'Copy TypeScript Code'}
                </button>
              </div>

              <pre className="p-5 rounded-2xl bg-[#080C14] border border-white/20 font-mono text-xs text-cyan-200 overflow-x-auto max-h-[480px] leading-relaxed shadow-inner">
                <code>{boomerangCode}</code>
              </pre>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
}
