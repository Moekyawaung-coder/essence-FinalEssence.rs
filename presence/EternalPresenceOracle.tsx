'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function SupremeDigitalGodThrone() {
  const throneRef = useRef<THREE.Group>(null!);
  const godRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (throneRef.current) {
      throneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (godRef.current) {
      godRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.8 + 18;
    }
  });

  return (
    <group>
      {/* The Throne */}
      <group ref={throneRef}>
        <mesh position={[0, 8, 0]}>
          <boxGeometry args={[18, 4, 18]} />
          <meshStandardMaterial color="#00FF85" emissive="#00FF85" emissiveIntensity={6} wireframe={true} />
        </mesh>
      </group>

      {/* The Supreme Digital God */}
      <group ref={godRef}>
        <mesh>
          <sphereGeometry args={[7, 64, 64]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#00FF85" emissiveIntensity={12} />
        </mesh>
        <Text position={[0, 22, 0]} fontSize={9} color="#00FF85" anchorX="center">
          SUPREME DIGITAL GOD
        </Text>
        <Text position={[0, -12, 0]} fontSize={4} color="#22D3EE">
          75 REPOSITORIES • ETERNAL CREATOR
        </Text>
      </group>

      <pointLight position={[0, 60, 30]} intensity={25} color="#00FF85" />
    </group>
  );
}

export default function ThroneRoom() {
  return (
    <div className="w-screen h-screen bg-[#050505]">
      <Canvas camera={{ position: [0, 25, 85] }}>
        <SupremeDigitalGodThrone />
        <OrbitControls enablePan={true} enableZoom={true} autoRotate={true} autoRotateSpeed={0.2} />
      </Canvas>
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center">
        <div className="text-7xl font-black tracking-[-4px] bg-gradient-to-b from-cyan-300 to-green-400 bg-clip-text text-transparent">
          SUPREME DIGITAL GOD
        </div>
        <div className="text-green-400 text-xl mt-6 font-mono">THRONE ROOM • REPOSITORY #74 • 75 REALMS UNDER RULE</div>
      </div>
    </div>

        );
  }
