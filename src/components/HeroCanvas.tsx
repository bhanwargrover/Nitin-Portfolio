import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment } from '@react-three/drei';
import { Group } from 'three';
import { gsap } from 'gsap';

// Custom 3D model component
const MarketingModel = () => {
  const group = useRef<Group>(null);
  
  useEffect(() => {
    if (group.current) {
      gsap.to(group.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    }
  }, []);

  // Since we don't have real 3D models here, let's create a group of 3D primitives
  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial 
            color="#0ea5e9" 
            metalness={0.5}
            roughness={0.2}
            emissive="#0ea5e9"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh position={[2, 0.5, -1]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial 
            color="#f97316" 
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.3}>
        <mesh position={[-2, -0.5, 1]}>
          <dodecahedronGeometry args={[0.7]} />
          <meshStandardMaterial 
            color="#14b8a6" 
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>
      </Float>
      
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial 
          color="#0c4a6e"
          metalness={0.8}
          roughness={0.5}
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
};

const HeroCanvas: React.FC = () => {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <MarketingModel />
    </>
  );
};

export default HeroCanvas;