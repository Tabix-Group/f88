

import CoachBox from '../components/CoachBox';
import AudioBook from '../components/AudioBook';
import Layout from '../components/Layout';
import { useState } from 'react';

const CHAPTER_TITLE = 'La fortaleza emocional es esa energía de autocontrol sobre la reacción inminente de tus emociones';


export default function Curso() {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentText, setCurrentText] = useState("");

  // Recibe el progreso desde AudioBook (en porcentaje)
  const handleProgress = (percent) => {
    setProgress(percent);
  };

  // Recibe el estado de pausa y el texto sincronizado actual
  const handleAudioState = (paused, text) => {
    setIsPaused(paused);
    setCurrentText(text);
  };

  // Lógica para preguntar al coach
  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch("http://localhost:4000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      setAnswer(data.answer);
    } catch (e) {
      setAnswer("Error al consultar al Coach IA");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div style={{maxWidth:700,margin:'2rem auto',background:'rgba(24,31,42,0.98)',borderRadius:16,boxShadow:'0 2px 16px rgba(24,49,83,0.18)',padding:'2.5rem 2rem 1.5rem 2rem'}}>
        <h1 style={{textAlign:'center',marginBottom:'2rem',fontWeight:800,fontSize:'1.35rem',color:'#F8FAFC',letterSpacing:'-0.01em',lineHeight:1.2}}>{CHAPTER_TITLE}</h1>
        <div style={{marginBottom:'1.5rem',textAlign:'center'}}>
          <div style={{height:8,background:'#22293a',borderRadius:4,overflow:'hidden',margin:'0 auto 8px',maxWidth:400}}>
            <div style={{width:`${progress}%`,height:8,background:'linear-gradient(90deg,#06B6D4,#8B5CF6)',borderRadius:4,transition:'width 0.3s'}}></div>
          </div>
          <div style={{color:'#06B6D4',fontWeight:700,fontSize:'1.15rem',marginTop:4,letterSpacing:'0.01em'}}>{Math.round(progress)}% completado</div>
        </div>
        <div style={{margin:'2rem 0'}}>
          <AudioBook
            audioSrc="http://localhost:4100/audios/zaratustra.mp3"
            onProgress={handleProgress}
            onAudioState={handleAudioState}
          />
        </div>
        {isPaused && (
          <CoachBox
            question={question}
            setQuestion={setQuestion}
            answer={answer}
            onAsk={handleAsk}
            loading={loading}
            context={currentText}
          />
        )}
      </div>
    </Layout>
  );
}