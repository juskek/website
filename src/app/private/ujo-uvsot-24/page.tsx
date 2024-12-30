/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'

import { MessageDisplay } from './MessageDisplay'
import { ModelCanvas } from './ModelCanvas'
import { TeaLoadingIndicator } from './TeaLoadingIndicator'
import { usePage } from './usePage.hook'

export default function Page() {
  const { loading, setLoading, isFading, handleTextClick, fadeDurationMs, message } = usePage()

  return (
    <div className="relative h-[70vh] w-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <TeaLoadingIndicator />
        </div>
      )}
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
    </div>
  )
}
