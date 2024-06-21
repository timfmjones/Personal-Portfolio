import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF(process.env.PUBLIC_URL + '/poly-3.glb');
  scene.position.y = -8; // Lower the model by adjusting its y position
  scene.rotation.x = 5;

  scene.scale.set(2, 2, 2); // Sets size of the model

  // Optional: add rotation
  useFrame(() => {
    console.log(modelRef.current.rotation.x)
    modelRef.current.rotation.y += 0.01;
  });

  return <primitive ref={modelRef} object={scene} dispose={null} />;
};


export default Model;