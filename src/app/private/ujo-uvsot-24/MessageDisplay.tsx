/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'
export const MessageDisplay = ({ isFading, fadeDurationMs, handleTextClick, message }) => {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <h1
        className={`pointer-events-auto cursor-pointer text-center font-lavishly text-6xl font-bold text-black transition-opacity duration-${fadeDurationMs} ${isFading ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleTextClick}
      >
        {message}
      </h1>
    </div>
  )
}
