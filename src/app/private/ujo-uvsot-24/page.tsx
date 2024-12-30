'use client'

import { useEffect, useState } from 'react'
import { MessageDisplay } from './MessageDisplay'
import { ModelCanvas } from './ModelCanvas'
import { TeaLoadingIndicator } from './TeaLoadingIndicator'
import { usePage } from './usePage.hook'

export default function Page() {
  const { loading, setLoading, isFading, handleTextClick, fadeDurationMs, message } = usePage()
  const [fadeOutDuration, setFadeOutDuration] = useState(500) // Default fade-out duration in ms
  const [showWhiteBg, setShowWhiteBg] = useState(true)

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => setShowWhiteBg(false), fadeOutDuration)
      return () => clearTimeout(timeout)
    }
  }, [loading, fadeOutDuration])

  return (
    <div className="relative h-[70vh] w-full">
      <div className="absolute inset-0">
        <ModelCanvas setLoading={setLoading}></ModelCanvas>
      </div>
      {!loading && (
        <MessageDisplay
          isFading={isFading}
          handleTextClick={handleTextClick}
          fadeDurationMs={fadeDurationMs}
          message={message}
        />
      )}

      {showWhiteBg && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-${fadeOutDuration}`}
          style={{ opacity: loading ? 1 : 0 }}
        >
          <TeaLoadingIndicator />
        </div>
      )}
    </div>
  )
}
