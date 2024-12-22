/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'
'use client'

import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { MeshStandardMaterial, Object3D } from 'three'
import { TeaLoadingIndicator } from './TeaLoadingIndicator'

const rotationSpeed = 0.01
const fadeDurationMs = 500

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
  const [messageIndex, setMessageIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const messages = ['hey cutie']

  const handleTextClick = () => {
    setIsFading(true)
    setTimeout(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
      setIsFading(false)
    }, fadeDurationMs) // Match the duration of the fade-out animation
  }

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
      {!loading && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h1
            className={`pointer-events-auto cursor-pointer text-center font-lavishly text-6xl font-bold text-black transition-opacity duration-${fadeDurationMs} ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={handleTextClick}
          >
            {messages[messageIndex]}
          </h1>
        </div>
      )}
    </div>
  )
}
