import React, {useState, useRef,useEffect} from 'react';
// import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import {OrbitControls, Plane} from '@react-three/drei'
import { Physics, useBox } from '@react-three/cannon';
import Box from './components/Box';
import useWindowSize from './hooks/useWindoxSize';






function App() {

  const size = useWindowSize()

  return (
    <Canvas style={{ width: size.width, height: size.height}}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[-1, 10, 10]} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}

export default App;
