import { useState } from 'react'
import { messages as MESSAGES } from './messages'

export const usePage = () => {
  const fadeDurationMs = 500

  const [loading, setLoading] = useState(true)
  const [messageIndex, setMessageIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const message = MESSAGES[messageIndex]

  const handleTextClick = () => {
    setIsFading(true)
    setTimeout(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % MESSAGES.length)
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
