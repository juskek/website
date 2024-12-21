'use client'

import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { MeshStandardMaterial } from 'three'

function ModelWithTexture() {
  const { scene, materials } = useGLTF('/static/models/peony/model.glb')
  const texture = useTexture('/static/models/peony/texture.jpeg')

  // Ref to access the model's scene
  const modelRef = useRef()

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

  // Rotate the model on each frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01 // Adjust the speed of rotation here
    }
  })

  return <primitive object={scene} ref={modelRef} />
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
