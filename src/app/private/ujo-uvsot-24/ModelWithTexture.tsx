'use client'

import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { MeshStandardMaterial, Object3D } from 'three'

export function ModelWithTexture({ setLoading }) {
  const rotationSpeed = 0.001

  const { scene, materials } = useGLTF('/static/models/peony/model.glb', true)
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
      setLoading(false)
    }
  }, [materials, texture, scene, setLoading])

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed
    }
  })

  return <primitive object={scene} ref={modelRef} />
}
