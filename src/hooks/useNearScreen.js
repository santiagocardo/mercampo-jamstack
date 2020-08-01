import { useEffect, useRef, useState } from 'react'

const useNearScreen = ({ distance = '100px', externalRef, once = true } = {}) => {
  const fromRef = useRef()
  const [isNearScreen, setIsNearScreen] = useState(false)

  useEffect(() => {
    let observer
    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  }, [distance, externalRef, once])

  return { isNearScreen, fromRef }
}

export default useNearScreen
