import React, {useState, useRef,useEffect} from 'react';
// import './App.css';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';

function Box(props) {

  // const mesh = useRef()

  const [hovered, setHover] = useState(false)

  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 0, 0] }));

  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  return (<mesh
            position={[0, 0, 0]}
            ref={ref}
            onClick={() => {
              api.velocity.set(0, 5, 0);
            }}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
          >
          <boxGeometry attach="geometry" />
          <meshLambertMaterial attach="material" color={hovered ? 'hotpink' : 'grey'} />
        </mesh>
  )
}

export default Box