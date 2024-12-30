'use client'

import { MessageDisplay } from './MessageDisplay'
import { ModelCanvas } from './ModelCanvas'
import { TeaLoadingIndicator } from './TeaLoadingIndicator'
import { usePage } from './usePage.hook'

export default function Page() {
  const { loading, setLoading, isFading, handleTextClick, fadeDurationMs, message } = usePage()

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

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <TeaLoadingIndicator />
        </div>
      )}
    </div>
  )
}
