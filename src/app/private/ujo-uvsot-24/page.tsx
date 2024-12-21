'use client'

import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function Model() {
  const { scene } = useGLTF('/static/models/peony/model.glb')
  return <primitive object={scene} />
}

export default function HomePage() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        {/* Add lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        {/* Add the model */}
        <Model />
        {/* Add camera controls */}
        <OrbitControls />
      </Canvas>
    </div>
  )
}
