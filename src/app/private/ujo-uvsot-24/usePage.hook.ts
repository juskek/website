import { useState } from 'react'

export const usePage = () => {
  const fadeDurationMs = 500

  const [loading, setLoading] = useState(true)
  const [messageIndex, setMessageIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const messages = ['hey cutie']
  const message = messages[messageIndex]

  const handleTextClick = () => {
    setIsFading(true)
    setTimeout(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
      setIsFading(false)
    }, fadeDurationMs)
  }
  return {
    loading,
    setLoading,
    isFading,
    handleTextClick,
    fadeDurationMs,
    message,
  }
}
