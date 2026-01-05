'use client';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import * as THREE from 'three';
function FloatingParticle({ position, index }: { position: [number, number, number]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + index) * 0.001;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial
        color="#0083e6"
        emissive="#0083e6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}
function FloatingParticles({ count = 50 }: { count?: number }) {
  const particles = Array.from({ length: count });
  return (
    <>
      {particles.map((_, i) => (
        <FloatingParticle
          key={i}
          index={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
          ]}
        />
      ))}
    </>
  );
}
function RotatingEVIcon() {
  const ringRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const centerRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.01;
    }
    if (innerRef.current) {
      innerRef.current.rotation.z -= 0.015;
    }
    if (centerRef.current) {
      centerRef.current.rotation.y += 0.02;
      centerRef.current.rotation.x += 0.01;
    }
  });
  return (
    <group>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#0083e6"
          emissive="#0083e6"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh ref={innerRef} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.5, 3, 0.2]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#60a5fa"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh ref={centerRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#0083e6"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}
function AnimatedEVIcon() {
  return (
    <group>
      <RotatingEVIcon />
    </group>
  );
}
function EVScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0083e6" />
      <directionalLight position={[0, 5, 5]} intensity={0.8} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      <FloatingParticles count={100} />
      <Suspense fallback={null}>
        <AnimatedEVIcon />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.5}
      />
    </>
  );
}
export default function EVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 w-full h-full z-0">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 75 }}
            style={{ background: 'transparent' }}
          >
            <EVScene />
          </Canvas>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: '#0083e6' }}
          >
            Coming Soon
          </motion.h1>
        </div>
      </section>
      <Footer />
    </div>
  );
}
