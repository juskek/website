'use client'

import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { MeshStandardMaterial, Object3D } from 'three'
import { TeaLoadingIndicator } from './TeaLoadingIndicator'

const rotationSpeed = 0.01

function ModelWithTexture({ setLoading }) {
  const { scene, materials } = useGLTF('/static/models/peony/model.glb', true) // Enable loading state
  const texture = useTexture('/static/models/peony/texture.jpeg')
  const modelRef = useRef<Object3D>(null)

  useEffect(() => {
    if (materials && texture) {
      const material = materials['']
      if (material && material instanceof MeshStandardMaterial) {
        material.map = texture
        material.needsUpdate = true
      }
    }

    if (scene) {
      setLoading(false) // Model has finished loading
    }
  }, [materials, texture, scene, setLoading])

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed
    }
  })

  return <primitive object={scene} ref={modelRef} />
}

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="h-screen w-screen">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <TeaLoadingIndicator />
        </div>
      )}
      <Canvas
        camera={{
          position: [0, 2, 5],
          fov: 45,
        }}
      >
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} />
        <ModelWithTexture setLoading={setLoading} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
