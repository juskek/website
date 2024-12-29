/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ModelWithTexture } from './ModelWithTexture'
import { TeaLoadingIndicator } from './TeaLoadingIndicator'
import { usePage } from './usePage.hook'

export default function Page() {
  const { loading, setLoading, isFading, handleTextClick, fadeDurationMs, message } = usePage()

  return (
    <div className="absolute inset-0">
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
            {message}
          </h1>
        </div>
      )}
    </div>
  )
}
