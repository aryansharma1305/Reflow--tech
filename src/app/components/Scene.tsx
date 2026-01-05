'use client';
import { Suspense, useEffect, useRef, useState, Component, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
class ModelErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('❌ Error loading GLTF model:', {
      message: error?.message || 'Unknown error',
      stack: error?.stack,
      name: error?.name,
      errorInfo,
    });
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
        </mesh>
      );
    }
    return this.props.children;
  }
}
interface SceneProps {
  modelUrl: string;
}
function AnimatedLights() {
  const light1Ref = useRef<THREE.DirectionalLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);
  useFrame((state) => {
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 5;
      light1Ref.current.intensity = 1.2 + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
    if (light2Ref.current) {
      light2Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 3 + 8;
      light2Ref.current.intensity = 0.8 + Math.cos(state.clock.elapsedTime * 0.6) * 0.2;
    }
  });
  return (
    <>
      <directionalLight 
        ref={light1Ref}
        position={[5, 5, 5]} 
        intensity={1.2} 
        castShadow 
        color="#ffffff"
      />
      <directionalLight 
        position={[-5, -5, -5]} 
        intensity={0.5} 
        color="#4a90e2"
      />
      <pointLight 
        ref={light2Ref}
        position={[0, 8, 0]} 
        intensity={0.8} 
        color="#60a5fa"
      />
      <spotLight
        position={[3, 10, 3]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        color="#ffffff"
      />
    </>
  );
}
function Model({ url }: { url: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  let gltf;
  try {
    gltf = useGLTF(url);
  } catch (error) {
    console.error('❌ Failed to load GLTF:', error);
    throw error;
  }
  useEffect(() => {
    if (gltf?.scene) {
      console.log('✅ Model loaded successfully!');
      console.log('Model children:', gltf.scene.children);
      try {
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        console.log('Model dimensions:', { size, maxDim, center });
        const targetSize = 3;
        const scale = maxDim > 0 ? targetSize / maxDim : 1;
        gltf.scene.scale.set(scale, scale, scale);
        gltf.scene.position.set(
          -center.x * scale,
          -center.y * scale,
          -center.z * scale
        );
        gltf.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((mat: THREE.Material) => {
                  if (mat instanceof THREE.MeshStandardMaterial) {
                    mat.metalness = 0.6;
                    mat.roughness = 0.4;
                    mat.needsUpdate = true;
                  }
                });
              } else if (child.material instanceof THREE.MeshStandardMaterial) {
                child.material.metalness = 0.6;
                child.material.roughness = 0.4;
                child.material.needsUpdate = true;
              }
            }
          }
        });
        setModelLoaded(true);
      } catch (err) {
        console.error('❌ Error processing model:', err);
      }
    }
  }, [gltf]);
  useFrame((state) => {
    if (groupRef.current && modelLoaded) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      const rotationSpeed = hovered ? 0.8 : 0.3;
      groupRef.current.rotation.y += rotationSpeed * 0.01;
      const targetScale = hovered ? 1.08 : 1;
      groupRef.current.scale.x += (targetScale - groupRef.current.scale.x) * 0.1;
      groupRef.current.scale.y += (targetScale - groupRef.current.scale.y) * 0.1;
      groupRef.current.scale.z += (targetScale - groupRef.current.scale.z) * 0.1;
    }
  });
  if (!gltf?.scene) {
    console.warn('⚠️ GLTF scene is null');
    return (
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </mesh>
    );
  }
  return (
    <group 
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <primitive object={gltf.scene} />
    </group>
  );
}
const Scene: React.FC<SceneProps> = ({ modelUrl }) => {
  const [autoRotate, setAutoRotate] = useState(true);
  useEffect(() => {
    console.log('🔄 Attempting to load model from:', modelUrl);
    try {
      useGLTF.preload(modelUrl);
      console.log('✅ Model preload initiated');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      console.error('❌ Could not preload model:', {
        message: errorMessage,
        url: modelUrl,
      });
    }
  }, [modelUrl]);
  return (
    <div 
      className="w-full h-full relative group" 
      style={{ minHeight: '400px', position: 'relative' }}
      onMouseEnter={() => setAutoRotate(false)}
      onMouseLeave={() => setAutoRotate(true)}
    >
      <Canvas
        shadows
        camera={{ position: [0, 1, 6], fov: 45, near: 0.1, far: 1000 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}
        dpr={[1, 2]}
        onCreated={(state) => {
          console.log('✅ Canvas created successfully');
          state.gl.setClearColor('#f0f9ff', 1);
        }}
      >
        <color attach="background" args={['#f0f9ff']} />
        <fog attach="fog" args={['#f0f9ff', 8, 20]} />
        <ambientLight intensity={0.5} color="#ffffff" />
        <AnimatedLights />
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.35}
          scale={8}
          blur={2.5}
          far={4}
        />
        <ModelErrorBoundary
          fallback={
            <mesh>
              <boxGeometry args={[1.5, 1.5, 1.5]} />
              <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
              <meshBasicMaterial color="#ffffff" wireframe />
            </mesh>
          }
        >
          <Suspense fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#3b82f6" wireframe />
            </mesh>
          }>
            <Model url={modelUrl} />
          </Suspense>
        </ModelErrorBoundary>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={12}
          autoRotate={autoRotate}
          autoRotateSpeed={1.5}
          enableDamping={true}
          dampingFactor={0.05}
          makeDefault
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3.5}
          target={[0, 0, 0]}
        />
        <Environment preset="sunset" />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 backdrop-blur-sm">
        Drag to rotate • Scroll to zoom • Hover for effect
      </div>
    </div>
  );
};
export default Scene;