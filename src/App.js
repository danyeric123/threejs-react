import React, {useState, useRef,useEffect} from 'react';
// import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei'
import { Physics, useBox } from '@react-three/cannon';
import Box from './components/Box';
import Plane from './components/Plane';
import useWindowSize from './hooks/useWindoxSize';
import Sphere from './components/Sphere';






function App() {

  const size = useWindowSize()

  return (
    <Canvas camera={{ fov: 20, position: [-5, 4, 20]}} style={{ width: size.width, height: size.height}}>
      <OrbitControls />
      <ambientLight intensity={0.05} />
      <pointLight position={[-10, 20, 10]} />
      <Physics>
        {/* <Box /> */}
        <Sphere />
        <Plane />
      </Physics>
    </Canvas>
  );
}

export default App;
