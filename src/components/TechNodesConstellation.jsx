import React, { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, Line, Points, PointMaterial } from '@react-three/drei';
import { 
  Zap, Brain, Database, Shield, GitBranch, Code, Globe, 
  Terminal, Server, Cpu, Layers, Sparkles, Box 
} from 'lucide-react';
import * as random from 'maath/random/dist/maath-random.esm';

// --- Data Configuration matching Image Composition ---
const NODE_DATA = [
  { id: 'react', name: 'React.js', icon: Globe, category: 'Frontend', pos: [-3.2, 0.2, 0], color: '#38BDF8' },
  { id: 'languages', name: 'Languages', icon: Code, category: 'Core', pos: [-1.8, 1.6, -0.4], color: '#94A3B8' },
  { id: 'frontend', name: 'Frontend & UI Design', icon: Layers, category: 'Frontend', pos: [-1.2, 0.8, 0.2], color: '#38BDF8' },
  { id: 'fastapi', name: 'FastAPI', icon: Zap, category: 'Backend', pos: [-1.5, -0.6, 0.4], color: '#06B6D4' },
  { id: 'aiml', name: 'AI, ML & Agentic Systems', icon: Brain, category: 'AI', pos: [-2.2, -1.5, -0.2], color: '#A855F7' },
  { id: 'python', name: 'Python', icon: Terminal, category: 'Backend', pos: [0.2, 0.3, 0.5], color: '#F59E0B' },
  { id: 'databases', name: 'Databases & Storage', icon: Database, category: 'Data', pos: [0.5, -1.4, 0.1], color: '#3B82F6' },
  { id: 'langgraph', name: 'LangGraph', icon: Cpu, category: 'AI', pos: [1.6, -0.3, 0.6], color: '#10B981' },
  { id: 'faiss', name: 'FAISS', icon: Server, category: 'AI', pos: [2.8, 1.2, 0.2], color: '#06B6D4' },
  { id: 'github', name: 'GitHub', icon: GitBranch, category: 'Tools', pos: [3.4, 0.1, -0.5], color: '#E2E8F0' },
  { id: 'tools', name: 'Tools, Security & Practices', icon: Shield, category: 'Tools', pos: [2.6, -1.3, 0], color: '#06B6D4' },
];

// Connection Network Graphs
const CONNECTIONS = [
  ['react', 'languages'],
  ['react', 'frontend'],
  ['react', 'fastapi'],
  ['react', 'aiml'],
  ['languages', 'frontend'],
  ['languages', 'python'],
  ['frontend', 'fastapi'],
  ['fastapi', 'aiml'],
  ['fastapi', 'databases'],
  ['fastapi', 'python'],
  ['python', 'langgraph'],
  ['python', 'faiss'],
  ['python', 'databases'],
  ['langgraph', 'faiss'],
  ['langgraph', 'tools'],
  ['langgraph', 'databases'],
  ['faiss', 'github'],
  ['faiss', 'tools'],
  ['databases', 'tools'],
];

const NODE_MAP = new Map(NODE_DATA.map(n => [n.id, n]));

// --- 1. Background Digital Rain Matrix Particles ---
function DigitalMatrixRain() {
  const ref = useRef();
  const count = 180;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= delta * 0.6; // fall downwards
      if (pos[i * 3 + 1] < -3.5) {
        pos[i * 3 + 1] = 3.5;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06B6D4"
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

// --- 2. 3D Glass Node Sphere Component ---
function NodeSphere({ node, isHovered, isConnected, onHover }) {
  const meshRef = useRef();
  const IconComponent = node.icon;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const isActive = isHovered || isConnected;

  return (
    <group position={node.pos}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        
        {/* Outer Glass Sphere */}
        <mesh
          ref={meshRef}
          onPointerOver={(e) => { e.stopPropagation(); onHover(node.id); }}
          onPointerOut={(e) => { e.stopPropagation(); onHover(null); }}
        >
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshPhysicalMaterial
            roughness={0.15}
            metalness={0.1}
            transmission={0.85}
            ior={1.4}
            thickness={0.5}
            transparent={true}
            opacity={0.88}
            color={isActive ? node.color : '#0F172A'}
            emissive={isActive ? node.color : '#0284C7'}
            emissiveIntensity={isActive ? 0.8 : 0.15}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Inner Glowing Core */}
        <mesh scale={0.28}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color={isActive ? node.color : '#38BDF8'}
            transparent
            opacity={isActive ? 0.9 : 0.4}
          />
        </mesh>

        {/* Center Icon & Label Overlay */}
        <Html center distanceFactor={8} zIndexRange={[10, 0]}>
          <div 
            className={`flex flex-col items-center select-none pointer-events-none transition-all duration-300 ${
              isActive ? 'scale-110' : 'scale-100 opacity-85'
            }`}
          >
            {/* Glass Icon Capsule */}
            <div 
              className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg border transition-all ${
                isActive 
                  ? 'bg-cyan-500/40 border-cyan-300 shadow-[0_0_20px_#06B6D4] text-white' 
                  : 'bg-slate-900/60 border-white/20 text-cyan-300'
              }`}
            >
              <IconComponent size={20} />
            </div>

            {/* Label Below Node */}
            <div className={`mt-2 text-[11px] font-bold font-sans whitespace-nowrap px-2 py-0.5 rounded-full transition-all ${
              isActive 
                ? 'text-white bg-slate-900/80 border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.4)]' 
                : 'text-slate-300 bg-slate-950/60 border border-white/10'
            }`}>
              {node.name}
            </div>
          </div>
        </Html>

      </Float>
    </group>
  );
}

// --- 3. Dynamic Energy Arc & Lightning Beam Lines ---
function EnergyBeamConnection({ nodeA, nodeB, isHoveredPath }) {
  const lineRef = useRef();

  useFrame((state) => {
    if (lineRef.current && isHoveredPath) {
      lineRef.current.material.dashOffset -= 0.02;
    }
  });

  return (
    <Line
      ref={lineRef}
      points={[nodeA.pos, nodeB.pos]}
      color={isHoveredPath ? '#38BDF8' : '#0284C7'}
      lineWidth={isHoveredPath ? 3.5 : 1.2}
      dashed={isHoveredPath}
      dashScale={8}
      dashSize={0.5}
      dashGap={0.2}
      transparent
      opacity={isHoveredPath ? 0.95 : 0.3}
    />
  );
}

// --- 4. Main 3D Constellation Component ---
export default function TechNodesConstellation() {
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  // Compute connected node IDs for hovered node
  const activeConnections = useMemo(() => {
    if (!hoveredNodeId) return new Set();
    const set = new Set([hoveredNodeId]);
    CONNECTIONS.forEach(([a, b]) => {
      if (a === hoveredNodeId) set.add(b);
      if (b === hoveredNodeId) set.add(a);
    });
    return set;
  }, [hoveredNodeId]);

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden bg-slate-950/90 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
      
      {/* Top Cybernetic Glass HUD Banner */}
      <div className="absolute top-0 left-0 right-0 z-10 px-6 py-4 flex items-center justify-between border-b border-white/10 bg-slate-900/40 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Box size={16} className="text-cyan-400" />
          <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">
            3D Spatial Neural Graph Engine
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-white/60">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Live WebGL Shading • Hover Nodes to Pulse
        </div>
      </div>

      {/* R3F Canvas Viewport */}
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#38BDF8" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#A855F7" />

        {/* Digital Matrix Rain Particles */}
        <DigitalMatrixRain />

        {/* Energy Beam Line Connections */}
        {CONNECTIONS.map(([idA, idB], idx) => {
          const nodeA = NODE_MAP.get(idA);
          const nodeB = NODE_MAP.get(idB);
          if (!nodeA || !nodeB) return null;

          const isHoveredPath = hoveredNodeId === idA || hoveredNodeId === idB;

          return (
            <EnergyBeamConnection
              key={idx}
              nodeA={nodeA}
              nodeB={nodeB}
              isHoveredPath={isHoveredPath}
            />
          );
        })}

        {/* 3D Glass Nodes */}
        {NODE_DATA.map((node) => (
          <NodeSphere
            key={node.id}
            node={node}
            isHovered={hoveredNodeId === node.id}
            isConnected={activeConnections.has(node.id)}
            onHover={setHoveredNodeId}
          />
        ))}
      </Canvas>

      {/* Cybernetic Bottom Frame Details */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between pointer-events-none text-[10px] font-mono text-cyan-400/60">
        <span>┌── SYSTEM_NODES: 11 ACTIVE ──┐</span>
        <span>└── CONSTELLATION_EDGES: 19 ──┘</span>
      </div>
    </div>
  );
}
