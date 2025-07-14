"use client"

import { useEffect, useState, useRef } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import Card from "../components/Card"
import Flex from "../components/Flex"
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp, FaRobot, FaBookOpen } from "react-icons/fa"

export default function Curso() {
  const [chapters, setChapters] = useState([])
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef()

  useEffect(() => {
    axios.get("http://localhost:4000/api/chapters").then((res) => setChapters(res.data))
  }, [])

  const handlePlay = () => {
    setPlaying(true)
    audioRef.current.play()
  }

  const handlePause = () => {
    setPlaying(false)
    audioRef.current.pause()
  }

  const handleNext = () => {
    setCurrent((c) => Math.min(c + 1, chapters.length - 1))
    setPlaying(false)
    setAnswer("")
    setProgress(0)
  }

  const handlePrev = () => {
    setCurrent((c) => Math.max(c - 1, 0))
    setPlaying(false)
    setAnswer("")
    setProgress(0)
  }

  const handleAsk = async () => {
    if (!question.trim()) return

    setLoading(true)
    try {
      const res = await axios.post("http://localhost:4000/api/chat", { question })
      setAnswer(res.data.answer)
    } catch (error) {
      setAnswer("Lo siento, hubo un error al procesar tu pregunta. Intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime
      const duration = audioRef.current.duration
      setProgress((currentTime / duration) * 100)
    }
  }

  if (!chapters.length) {
    return (
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid rgba(6, 182, 212, 0.3)",
              borderTop: "3px solid #06B6D4",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <p style={{ color: "rgba(248, 250, 252, 0.7)", fontSize: "1.125rem" }}>Cargando contenido del curso...</p>
        </div>
      </Layout>
    )
  }

  const chapter = chapters[current]

  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          animation: "fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <FaBookOpen size={32} color="#06B6D4" />
          <h2
            style={{
              background: "linear-gradient(135deg, #F8FAFC 0%, #06B6D4 50%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
              fontSize: "2rem",
              margin: 0,
            }}
          >
            {chapter.title}
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            color: "rgba(248, 250, 252, 0.7)",
            fontSize: "0.95rem",
          }}
        >
          <span>
            Capítulo {current + 1} de {chapters.length}
          </span>
          <span>•</span>
          <span>{Math.round(progress)}% completado</span>
        </div>
      </div>

      <Flex
        style={{
          marginTop: "2rem",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Content Card */}
        <Card
          style={{
            maxWidth: "500px",
            minHeight: "400px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
            animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))",
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <p
              style={{
                whiteSpace: "pre-line",
                color: "#F8FAFC",
                fontSize: "1.125rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {chapter.text}
            </p>
          </div>

          {/* Progress Bar */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
              height: "6px",
              marginBottom: "1rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "linear-gradient(90deg, #06B6D4, #8B5CF6)",
                height: "100%",
                width: `${progress}%`,
                borderRadius: "10px",
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>
        </Card>

        {/* Audio Player Card */}
        <Card
          style={{
            minWidth: "350px",
            maxWidth: "400px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
            animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #06B6D4)",
                borderRadius: "50%",
                padding: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaVolumeUp size={20} color="white" />
            </div>
            <h3
              style={{
                color: "#F8FAFC",
                fontWeight: 600,
                fontSize: "1.25rem",
                margin: 0,
              }}
            >
              Audio del Capítulo
            </h3>
          </div>

          <audio
            ref={audioRef}
            src={chapter.audio}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            style={{ display: "none" }}
          />

          {/* Custom Audio Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <button
              onClick={handlePrev}
              disabled={current === 0}
              style={{
                background: current === 0 ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                padding: "0.75rem",
                cursor: current === 0 ? "not-allowed" : "pointer",
                transition: "all 0.3s",
                opacity: current === 0 ? 0.5 : 1,
              }}
            >
              <FaStepBackward size={16} color="#F8FAFC" />
            </button>

            <button
              onClick={playing ? handlePause : handlePlay}
              style={{
                background: "linear-gradient(135deg, #06B6D4, #8B5CF6)",
                border: "none",
                borderRadius: "50%",
                padding: "1rem",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 4px 15px rgba(6, 182, 212, 0.3)",
              }}
            >
              {playing ? <FaPause size={20} color="white" /> : <FaPlay size={20} color="white" />}
            </button>

            <button
              onClick={handleNext}
              disabled={current === chapters.length - 1}
              style={{
                background: current === chapters.length - 1 ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                padding: "0.75rem",
                cursor: current === chapters.length - 1 ? "not-allowed" : "pointer",
                transition: "all 0.3s",
                opacity: current === chapters.length - 1 ? 0.5 : 1,
              }}
            >
              <FaStepForward size={16} color="#F8FAFC" />
            </button>
          </div>

          {/* Coach AI Section */}
          {!playing && (
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                padding: "1.5rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                animation: "fadeIn 0.5s ease-in-out",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <FaRobot size={20} color="#06B6D4" />
                <h4
                  style={{
                    color: "#F8FAFC",
                    fontWeight: 600,
                    fontSize: "1rem",
                    margin: 0,
                  }}
                >
                  Coach IA
                </h4>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <input
                  type="text"
                  placeholder="Pregunta sobre este capítulo..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAsk()}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "0.75rem",
                    color: "#F8FAFC",
                    fontSize: "0.9rem",
                    width: "100%",
                  }}
                />

                <button
                  onClick={handleAsk}
                  disabled={loading || !question.trim()}
                  style={{
                    background:
                      loading || !question.trim()
                        ? "rgba(6, 182, 212, 0.3)"
                        : "linear-gradient(135deg, #06B6D4, #8B5CF6)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: loading || !question.trim() ? "not-allowed" : "pointer",
                    transition: "all 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  {loading ? (
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        borderTop: "2px solid white",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    ></div>
                  ) : (
                    "Preguntar"
                  )}
                </button>

                {answer && (
                  <div
                    style={{
                      background: "rgba(6, 182, 212, 0.1)",
                      border: "1px solid rgba(6, 182, 212, 0.2)",
                      borderRadius: "8px",
                      padding: "1rem",
                      marginTop: "0.5rem",
                      animation: "fadeIn 0.5s ease-in-out",
                    }}
                  >
                    <p
                      style={{
                        color: "#F8FAFC",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </Card>
      </Flex>

      <style jsx global>{`
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
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
      `}</style>
    </Layout>
  )
}
