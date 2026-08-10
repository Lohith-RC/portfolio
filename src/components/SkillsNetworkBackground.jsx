import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// --- Data Layer: Tech Nodes & Domains ---
export const TECH_NODES = [
  // --- AI / ML / Agentic ---
  { name: 'LangGraph', domains: ['ai', 'agentic', 'python'] },
  { name: 'LangChain', domains: ['ai', 'agentic', 'python'] },
  { name: 'OpenAI API', domains: ['ai', 'api'] },
  { name: 'Groq API', domains: ['ai', 'api'] },
  { name: 'TensorFlow', domains: ['ai', 'ml', 'deep-learning', 'python'] },
  { name: 'scikit-learn', domains: ['ai', 'ml', 'python'] },
  { name: 'DBSCAN', domains: ['ai', 'ml', 'algo'] },
  { name: 'Random Forest', domains: ['ai', 'ml', 'algo'] },
  { name: 'SHAP', domains: ['ai', 'xai', 'python'] },
  { name: 'Grad-CAM', domains: ['ai', 'xai', 'deep-learning', 'python'] },
  { name: 'FAISS', domains: ['ai', 'vector-search', 'backend'] },

  // --- Backend / Frameworks ---
  { name: 'FastAPI', domains: ['backend', 'python', 'api'] },
  { name: 'Flask', domains: ['backend', 'python', 'api'] },
  { name: 'Python', domains: ['lang', 'backend', 'ai', 'ml'] },
  { name: 'Spring Boot', domains: ['backend', 'java'] },
  { name: 'Java', domains: ['lang', 'backend'] },
  { name: 'Node.js', domains: ['backend', 'js'] },
  { name: 'REST APIs', domains: ['backend', 'api'] },
  { name: 'JWT Authentication', domains: ['backend', 'security'] },

  // --- Databases / Storage ---
  { name: 'PostgreSQL', domains: ['db', 'sql', 'backend'] },
  { name: 'MongoDB', domains: ['db', 'nosql', 'backend'] },
  { name: 'SQLite', domains: ['db', 'sql', 'backend'] },

  // --- Frontend / UI ---
  { name: 'React.js', domains: ['frontend', 'js'] },
  { name: 'Redux / Redux Toolkit', domains: ['frontend', 'state', 'js'] },
  { name: 'Three.js / GSAP', domains: ['frontend', '3d', 'js'] },
  { name: 'Tailwind CSS', domains: ['frontend', 'css'] },
  { name: 'JavaScript (ES6+)', domains: ['lang', 'frontend', 'backend'] },

  // --- Tools & Security ---
  { name: 'Git & GitHub', domains: ['tool', 'devops'] },
  { name: 'Docker', domains: ['tool', 'devops'] },
  { name: 'Postman', domains: ['tool', 'api'] },
  { name: 'Cisco CyberOps', domains: ['security', 'network'] },
  { name: 'CCNA Series', domains: ['network'] },
];

const TECH_MAP = new Map(TECH_NODES.map(node => [node.name, node]));

const BASE_COLOR = new THREE.Color('#2DD4BF');       // Teal 400
const HIGHLIGHT_COLOR = new THREE.Color('#38BDF8');  // Sky 400 / Cyan glow
const PULSE_SPEED = 3.5;

// --- 1. Background Particle Field ---
function ParticleField() {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(150 * 3), { radius: 2.2 }), []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 30;
      ref.current.rotation.y += delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#94A3B8"
          size={0.018}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.35}
        />
      </Points>
    </group>
  );
}

// --- 2. Tech Node Hubs (Glowing Points at Node Coordinates) ---
function TechConstellationNodes({ nodePositions, hoveredSkill }) {
  const pointsRef = useRef();

  const flatPositions = useMemo(() => {
    const arr = new Float32Array(nodePositions.length * 3);
    nodePositions.forEach((pos, i) => {
      arr[i * 3] = pos[0];
      arr[i * 3 + 1] = pos[1];
      arr[i * 3 + 2] = pos[2];
    });
    return arr;
  }, [nodePositions]);

  return (
    <Points ref={pointsRef} positions={flatPositions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={hoveredSkill ? '#38BDF8' : '#2DD4BF'}
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// --- 3. Constellation Lines with Vertex Attributes & GLSL Shader ---
function TechConstellationLines({ nodePositions, hoveredSkill }) {
  const geometryRef = useRef();

  // Compute connections graph where nodes share at least 1 domain
  const connections = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < TECH_NODES.length; i++) {
      for (let j = i + 1; j < TECH_NODES.length; j++) {
        const nodeA = TECH_NODES[i];
        const nodeB = TECH_NODES[j];
        const shared = nodeA.domains.filter(d => nodeB.domains.includes(d));
        if (shared.length > 0) {
          pairs.push({ i, j, sharedDomains: shared });
        }
      }
    }
    return pairs;
  }, []);

  // Compute vertex positions & per-vertex line distance attributes
  const { linePositions, lineDistances } = useMemo(() => {
    const posArr = new Float32Array(connections.length * 6);
    const distArr = new Float32Array(connections.length * 2);

    connections.forEach((conn, index) => {
      const posA = nodePositions[conn.i];
      const posB = nodePositions[conn.j];

      posArr.set(posA, index * 6);
      posArr.set(posB, index * 6 + 3);

      const dx = posB[0] - posA[0];
      const dy = posB[1] - posA[1];
      const dz = posB[2] - posA[2];
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

      distArr[index * 2] = 0.0;
      distArr[index * 2 + 1] = distance;
    });

    return { linePositions: posArr, lineDistances: distArr };
  }, [connections, nodePositions]);

  // Dynamic BufferAttribute for Per-Line Domain Match (a_isDomainMatch)
  const isDomainMatchArray = useMemo(() => {
    return new Float32Array(connections.length * 2);
  }, [connections]);

  // Update a_isDomainMatch attribute when hoveredSkill changes
  useEffect(() => {
    const activeDomains = hoveredSkill && TECH_MAP.has(hoveredSkill) 
      ? TECH_MAP.get(hoveredSkill).domains 
      : [];

    connections.forEach((conn, index) => {
      const isMatch = activeDomains.length > 0 && conn.sharedDomains.some(d => activeDomains.includes(d));
      const val = isMatch ? 1.0 : 0.0;
      isDomainMatchArray[index * 2] = val;
      isDomainMatchArray[index * 2 + 1] = val;
    });

    if (geometryRef.current && geometryRef.current.attributes.a_isDomainMatch) {
      geometryRef.current.attributes.a_isDomainMatch.needsUpdate = true;
    }
  }, [hoveredSkill, connections, isDomainMatchArray]);

  // Custom Shader Material with Per-Line Pulse & Depth Attenuation
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_baseColor: { value: BASE_COLOR },
        u_highlightColor: { value: HIGHLIGHT_COLOR },
        u_pulseSpeed: { value: PULSE_SPEED }
      },
      vertexShader: `
        attribute float a_lineDistance;
        attribute float a_isDomainMatch;

        varying float vLineDistance;
        varying float vIsDomainMatch;
        varying vec3 vWorldPosition;

        void main() {
          vLineDistance = a_lineDistance;
          vIsDomainMatch = a_isDomainMatch;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec3 u_baseColor;
        uniform vec3 u_highlightColor;
        uniform float u_pulseSpeed;

        varying float vLineDistance;
        varying float vIsDomainMatch;
        varying vec3 vWorldPosition;

        void main() {
          vec3 finalColor = u_baseColor;
          float alpha = 0.25;

          if (vIsDomainMatch > 0.5) {
            // Radial expanding Gaussian pulse wave along the line distance
            float wavePhase = mod(u_time * u_pulseSpeed, 4.0);
            float distDiff = abs(vLineDistance - wavePhase);
            float pulseWave = exp(-distDiff * distDiff * 3.5);

            finalColor = mix(u_baseColor, u_highlightColor, pulseWave);
            alpha = mix(0.35, 0.95, pulseWave);
          }

          // Depth-based fade out
          float depthFade = smoothstep(-2.5, 2.5, vWorldPosition.z);
          alpha *= depthFade;

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame((state) => {
    if (shaderMaterial) {
      shaderMaterial.uniforms.u_time.value = state.clock.elapsedTime;
    }
  });

  return (
    <lineSegments>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          args={[linePositions, 3]}
        />
        <bufferAttribute
          attach="attributes-a_lineDistance"
          args={[lineDistances, 1]}
        />
        <bufferAttribute
          attach="attributes-a_isDomainMatch"
          args={[isDomainMatchArray, 1]}
        />
      </bufferGeometry>
      <primitive object={shaderMaterial} attach="material" />
    </lineSegments>
  );
}

// --- 4. Main Exported Canvas Container ---
export default function SkillsNetworkBackground({ hoveredSkill }) {
  // Map tech nodes to fixed 3D space once
  const nodePositions = useMemo(() => {
    return TECH_NODES.map((_, i) => {
      // Semi-random deterministic distribution in sphere
      const phi = Math.acos(-1 + (2 * i) / TECH_NODES.length);
      const theta = Math.sqrt(TECH_NODES.length * Math.PI) * phi;
      const radius = 1.8;
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        (radius * Math.cos(phi)) * 0.7 // slightly flattened Z depth
      ];
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.3} />
        
        {/* Background Particle Cloud */}
        <ParticleField />
        
        {/* Constellation Nodes */}
        <TechConstellationNodes nodePositions={nodePositions} hoveredSkill={hoveredSkill} />
        
        {/* Constellation Lines & Shader Pulse */}
        <TechConstellationLines nodePositions={nodePositions} hoveredSkill={hoveredSkill} />
      </Canvas>
    </div>
  );
}
