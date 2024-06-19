
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

const HologramEffect = () => (
  <Canvas style={{ height: '200px', width: '100%' }} camera={{ position: [0, 5, 1], fov: 20 }}>
    <Suspense fallback={null}>
      <ambientLight intensity={1} />
      {/* <directionalLight position={[0, 10, 5]} intensity={1.5} /> */}
      <Model />
      {/* <OrbitControls enableZoom={false} /> */}
    </Suspense>
  </Canvas>
);

export default HologramEffect;

