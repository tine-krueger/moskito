import { useState, useEffect } from 'react'

const Delayed = ({ children, waitBeforeShow = 500 }) => {
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    let mounted = true
    setTimeout(() => {
      mounted && setIsShown(true)
    }, waitBeforeShow)
    return () => mounted = false
  }, [waitBeforeShow])

  return isShown ? children : null
};

export default Delayed;