import React, {useState, useRef,useEffect} from 'react';
// import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'

function Box(props) {

  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  return (<mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
          >
          <boxGeometry attach="geometry" />
          <meshLambertMaterial attach="material" color={hovered ? 'hotpink' : 'grey'} />
        </mesh>
  )
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


function App() {

  const size = useWindowSize()

  return (
    <Canvas style={{ width: size.width, height: size.height}}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 1, 10]} />
      <Box position={[0,0,0]} />
    </Canvas>
  );
}

export default App;
