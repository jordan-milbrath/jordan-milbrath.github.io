import { useState, useEffect, useRef } from 'react'
import './Ghost.css'

function Ghost() {
  const [sparkles, setSparkles] = useState([])
  const targetPosition = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef(null)
  const sparkleIdRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
      
      // Add a new sparkle at a slightly random position around the cursor
      const randomOffset = () => (Math.random() - 0.5) * 30 // ±15px
      const newSparkle = {
        id: sparkleIdRef.current++,
        x: e.clientX + randomOffset(),
        y: e.clientY + randomOffset(),
        opacity: 1,
      }
      
      setSparkles(prev => [...prev.slice(-19), newSparkle])
    }

    const animate = () => {
      setSparkles(prev => 
        prev.map(sparkle => ({
          ...sparkle,
          opacity: Math.max(0, sparkle.opacity - 0.03),
        })).filter(sparkle => sparkle.opacity > 0)
      )
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <>
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            opacity: sparkle.opacity,
          }}
        />
      ))}
    </>
  )
}

export default Ghost

