import type React from "react"

interface GlowProps {
  className?: string
}

const Glow: React.FC<GlowProps> = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-[600px] h-[700px] rounded-full opacity-55 blur-[150px]  ${className}`}
      style={{
        background: "radial-gradient(circle, rgba(255, 254, 254, 0.8) 0%, rgba(0,128,255,0) 70%)",
      }}
    />
  )
}

export default Glow