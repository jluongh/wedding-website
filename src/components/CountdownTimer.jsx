import { useEffect, useState } from 'react'

const weddingDate = new Date('2026-12-19T00:00:00-08:00')

function getTimeRemaining() {
  const difference = weddingDate.getTime() - Date.now()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    }
  }

  const totalSeconds = Math.floor(difference / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  }
}

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(() => getTimeRemaining())

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTimeRemaining(getTimeRemaining())
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [])

  if (timeRemaining.isComplete) {
    return <p className="countdown-inline">Today is the day.</p>
  }

  return (
    <p className="countdown-inline" aria-live="polite">
      {timeRemaining.days} days {timeRemaining.hours} hrs {timeRemaining.minutes} mins {timeRemaining.seconds} secs
    </p>
  )
}

export default CountdownTimer