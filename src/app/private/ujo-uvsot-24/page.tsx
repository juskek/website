'use client'

import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { MeshStandardMaterial, Object3D } from 'three'

const rotationSpeed = 0.01

function ModelWithTexture() {
  const { scene, materials } = useGLTF('/static/models/peony/model.glb')
  const texture = useTexture('/static/models/peony/texture.jpeg')

  const modelRef = useRef<Object3D>(null)

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

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed
    }
  })

  return <primitive object={scene} ref={modelRef} />
}

export default function HomePage() {
  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          position: [0, 2, 5],
          fov: 45,
        }}
      >
        <ambientLight intensity={4} />
        <directionalLight position={[5, 5, 5]} />
        <ModelWithTexture />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
