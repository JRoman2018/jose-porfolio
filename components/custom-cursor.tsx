"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface CustomCursorProps {
  color?: string
}

export function CustomCursor({ color = "#10b981" }: CustomCursorProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  // Mouse position with spring physics for smooth movement
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Add spring physics for smoother movement
  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Check if device has touch screen (mobile devices)
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0

    // Don't show custom cursor on touch devices
    if (isTouchDevice) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    // Check if cursor is over clickable elements
    const checkIfPointer = () => {
      const element = document.elementFromPoint(cursorX.get(), cursorY.get())
      if (!element) return

      const clickableElements = ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT", "LABEL"]

      // Check if element or its parents are clickable
      let currentElement: HTMLElement | null = element as HTMLElement
      let isPointerElement = false

      while (currentElement && !isPointerElement) {
        // Check tag name
        if (clickableElements.includes(currentElement.tagName)) {
          isPointerElement = true
        }

        // Check cursor style
        const computedStyle = window.getComputedStyle(currentElement)
        if (computedStyle.cursor === "pointer") {
          isPointerElement = true
        }

        currentElement = currentElement.parentElement
      }

      setIsPointer(isPointerElement)
    }

    // Add event listeners
    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mousemove", checkIfPointer)

    // Hide default cursor
    document.body.style.cursor = "none"

    // Clean up
    return () => {
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mousemove", checkIfPointer)
      document.body.style.cursor = "auto"
    }
  }, [cursorX, cursorY])

  if (typeof window === "undefined") return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: isClicking ? 0.7 : isPointer ? 1.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="rounded-full"
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: color,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Cursor ring/outline */}
      <motion.div
        className="fixed top-0 left-0 z-50 rounded-full border-2 pointer-events-none mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isPointer ? "40px" : "30px",
          height: isPointer ? "40px" : "30px",
          borderColor: color,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.5 : 0,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          opacity: isVisible ? (isPointer ? 0.8 : 0.5) : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Cursor trail effect */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 z-40 rounded-full pointer-events-none mix-blend-difference"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            width: "5px",
            height: "5px",
            backgroundColor: color,
            translateX: "-50%",
            translateY: "-50%",
            opacity: isVisible ? 0.2 - i * 0.03 : 0,
            scale: 1 - i * 0.05,
            transition: `transform ${0.1 + i * 0.05}s ease-out, opacity ${0.1 + i * 0.05}s ease-out`,
          }}
        />
      ))}
    </>
  )
}
