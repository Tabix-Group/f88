"use client"

export default function Card({ children, style, className = "", hover = true, ...props }) {
  return (
    <div 
      className={`card ${className}`} 
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '20px',
        backdropFilter: 'blur(20px)',
        padding: '2rem',
        minWidth: '300px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {/* Subtle top border gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
          opacity: 0.7,
        }}
      />
      
      {children}
      
      <style jsx>{`
        .card:hover {
          transform: ${hover ? 'translateY(-4px)' : 'none'};
          box-shadow: ${hover ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(6, 182, 212, 0.1)' : '0 8px 32px rgba(0, 0, 0, 0.1)'};
          border-color: ${hover ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.15)'};
        }
      `}</style>
    </div>
  )
}
