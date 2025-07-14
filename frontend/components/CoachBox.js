"use client"

import { useState } from 'react'
import { FaRobot, FaPaperPlane, FaSpinner } from 'react-icons/fa'

export default function CoachBox({ question, setQuestion, answer, onAsk, loading = false }) {
  const [isTyping, setIsTyping] = useState(false)

  const handleAsk = async () => {
    if (!question.trim() || loading) return
    
    setIsTyping(true)
    await onAsk()
    setIsTyping(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleAsk()
    }
  }

  return (
    <div 
      className="coach-box"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        backdropFilter: 'blur(20px)',
        padding: '1.5rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        animation: 'fadeIn 0.5s ease-in-out',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1.25rem',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
            borderRadius: '50%',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'pulse 2s infinite',
          }}
        >
          <FaRobot size={16} color="white" />
        </div>
        <h4
          style={{
            color: '#F8FAFC',
            fontWeight: 600,
            fontSize: '1.125rem',
            margin: 0,
            background: 'linear-gradient(135deg, #F8FAFC 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Coach IA
        </h4>
      </div>

      {/* Input Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div style={{ position: 'relative' }}>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Pregúntale al coach sobre este capítulo..."
            disabled={loading || isTyping}
            style={{
              width: '100%',
              minHeight: '80px',
              maxHeight: '120px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '12px',
              padding: '0.875rem',
              color: '#F8FAFC',
              fontSize: '0.9rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              outline: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
          
          {/* Character count */}
          <div
            style={{
              position: 'absolute',
              bottom: '0.5rem',
              right: '0.75rem',
              fontSize: '0.75rem',
              color: 'rgba(248, 250, 252, 0.5)',
              pointerEvents: 'none',
            }}
          >
            {question.length}/500
          </div>
        </div>

        <button
          onClick={handleAsk}
          disabled={loading || isTyping || !question.trim() || question.length > 500}
          style={{
            background: (loading || isTyping || !question.trim() || question.length > 500) 
              ? 'rgba(6, 182, 212, 0.3)' 
              : 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '0.875rem 1.5rem',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: (loading || isTyping || !question.trim() || question.length > 500) ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: (loading || isTyping || !question.trim() || question.length > 500) 
              ? 'none' 
              : '0 4px 15px rgba(6, 182, 212, 0.3)',
          }}
        >
          {loading || isTyping ? (
            <>
              <FaSpinner 
                size={14} 
                style={{ 
                  animation: 'spin 1s linear infinite' 
                }} 
              />
              {isTyping ? 'Procesando...' : 'Enviando...'}
            </>
          ) : (
            <>
              <FaPaperPlane size={14} />
              Preguntar al Coach
            </>
          )}
        </button>
      </div>

      {/* Answer Section */}
      {answer && (
        <div
          style={{
            marginTop: '1.5rem',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            borderRadius: '12px',
            padding: '1.25rem',
            animation: 'fadeInUp 0.5s ease-in-out',
            position: 'relative',
          }}
        >
          {/* Answer indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.75rem',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                background: '#06B6D4',
                borderRadius: '50%',
                animation: 'pulse 1.5s infinite',
              }}
            />
            <span
              style={{
                color: 'rgba(248, 250, 252, 0.8)',
                fontSize: '0.8rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Respuesta del Coach
            </span>
          </div>
          
          <p
            style={{
              color: '#F8FAFC',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              margin: 0,
              whiteSpace: 'pre-wrap',
            }}
          >
            {answer}
          </p>

          {/* Decorative element */}
          <div
            style={{
              position: 'absolute',
              top: '-1px',
              left: '1rem',
              right: '1rem',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
            }}
          />
        </div>
      )}

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.05);
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(15px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }

        .coach-box textarea:focus {
          border-color: rgba(6, 182, 212, 0.5) !important;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1) !important;
          background: rgba(255, 255, 255, 0.12) !important;
        }

        .coach-box:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
    </div>
  )
}
