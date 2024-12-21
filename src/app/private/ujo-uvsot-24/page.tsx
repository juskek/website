'use client'

import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import { MeshStandardMaterial } from 'three'

function ModelWithTexture() {
  const { scene, materials } = useGLTF('/static/models/peony/model.glb')
  const texture = useTexture('/static/models/peony/texture.jpeg')

  useEffect(() => {
    if (materials && texture) {
      console.log({ materials })
      const material = materials['']
      if (material && material instanceof MeshStandardMaterial) {
        material.map = texture
        material.needsUpdate = true
      }
    }
  }, [materials, texture])

  return <primitive object={scene} />
}

export default function HomePage() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ModelWithTexture />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
