/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ModelWithTexture } from './ModelWithTexture'

export const ModelCanvas = ({ setLoading }) => {
  return (
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
  )
}
