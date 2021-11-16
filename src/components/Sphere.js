import { useSphere } from '@react-three/cannon';
import React, {useState} from 'react'

const Sphere = () => {

  const [hovered, setHover] = useState(false)

  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 0, 0] }));

  return (
    <mesh
      position={[0, 0, 0]}
      ref={ref}
      onClick={() => {
        api.velocity.set(0, 5, 0);
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry attach="geometry" />
      <meshLambertMaterial color={hovered ? 'hotpink':'white'} />
    </mesh>
  )
}

export default Sphere
