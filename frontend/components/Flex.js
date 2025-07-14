"use client"

export default function Flex({ children, style, className = "", ...props }) {
  return (
    <div
      className={`flex ${className}`}
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
