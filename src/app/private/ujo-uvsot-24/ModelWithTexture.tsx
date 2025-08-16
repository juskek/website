'use client'

import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { MeshStandardMaterial, Object3D } from 'three'
import { GLTFLoader } from 'three-stdlib'

type Props = {
  setLoading: (v: boolean) => void
}

export function ModelWithTexture({ setLoading }: Props) {
  const texture = useTexture('/static/models/peony/texture.jpeg')
  const modelRef = useRef<Object3D>(null)

  // Custom GLTF loader with URL modifier to suppress bad texture fetches
  const gltf = useLoader(GLTFLoader, '/static/models/peony/model.glb', (loader) => {
    loader.manager.setURLModifier((url) => {
      if (url.startsWith('blob:')) {
        return '' // block invalid blob texture fetches
      }
      return url
    })
  })

  useEffect(() => {
    gltf.scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material instanceof MeshStandardMaterial) {
        obj.material.map = texture
        obj.material.needsUpdate = true
      }
    })
    setLoading(false)
  }, [gltf.scene, texture, setLoading])

  // ✅ Rotation preserved
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001
    }
  })

  return <primitive object={gltf.scene} ref={modelRef} />
}
