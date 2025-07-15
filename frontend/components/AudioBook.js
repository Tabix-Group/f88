import { useRef, useState } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';

const transcript = [
  {
    start: 0,
    end: 14,
    text: "Este es el cayo emocional que construyes con el tiempo y de poco a poco. La mente es un primer filtro de información, tu fuerza emocional es tu segundo filtro o búfer."
  },

  {
    start: 14,
    end: 28,
    text: "Las experiencias se disparan en tu mente y tu código de creencias de fortaleza reestudiado como tu código “The GRIT” las traduce y manda al cuerpo como realidades de sensaciones."
  },

  {
    start: 28,
    end: 53,
    text: "Las emociones, son también respuestas que experimentas a condicionamiento de patrones aprendidos por tu propio cuerpo respecto de ciertas experiencias pasadas. Estos recuerdos provienen de tu memoria muscular, celular, inmunológica y somática en lo general y no necesariamente provienen de una señal de tu mente."
  },
  {
    start: 53,
    end: 72,
    text: "Para el caso en donde las emociones surgen como respuesta al comportamiento aprendido por la memoria de las células de tu cuerpo, te quiero decir que no está bajo tu control inicial el manipularlas, más, sin embargo, son totalmente manejables si tiene la fortaleza emocional desarrollada."
  },
  {
    start: 72,
    end: 104,
    text: "La secuencia de lo que sientes es como sigue, primero sentirás esa respuesta celular energética, como una carga emocional que afecta a tu cuerpo, pero a posteriori, podrás autocontrolar la sensación producida con una nueva emoción suplantada por ti intencionalmente y que proviene de tu mente re-programada y que se respalda con el ejercicio que hagas en situaciones similares utilizando tu nuevo código de creencia o fuerza mental."
  }
];

export default function AudioBook({ audioSrc = "http://localhost:5000/tu-audio.mp3", onProgress, onAudioState }) {
  const audioRef = useRef();
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    const time = audioRef.current.currentTime;
    setProgress(time);
    const idx = transcript.findIndex(
      (frag, i) =>
        time >= frag.start &&
        (i === transcript.length - 1 || time < transcript[i + 1].start)
    );
    setCurrent(idx === -1 ? 0 : idx);
    if (onProgress && duration > 0) {
      onProgress((time / duration) * 100);
    }
    if (onAudioState) {
      onAudioState(audioRef.current.paused, transcript[idx === -1 ? 0 : idx]?.text || "");
    }
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const value = Number(e.target.value);
    audioRef.current.currentTime = value;
    setProgress(value);
    // Llamar a onProgress manualmente para actualizar la barra externa
    if (onProgress && duration > 0) {
      onProgress((value / duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
    // Si el audio ya tiene progreso, actualizar barra externa
    if (onProgress && audioRef.current.currentTime > 0 && audioRef.current.duration > 0) {
      onProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const jump = (sec) => {
    if (!audioRef.current) return;
    let newTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + sec));
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', background: '#181f2a', borderRadius: 16, padding: 24, color: '#fff', boxShadow: '0 4px 24px #0002' }}>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => {
          setIsPlaying(true);
          if (onAudioState) onAudioState(false, transcript[current]?.text || "");
        }}
        onPause={() => {
          setIsPlaying(false);
          if (onAudioState) onAudioState(true, transcript[current]?.text || "");
        }}
        style={{ display: 'none' }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={() => jump(-10)} style={{ background: 'none', border: 'none', color: '#f7c873', fontSize: 20, cursor: 'pointer' }} title="Retroceder 10s"><FaStepBackward /></button>
        <button onClick={handlePlayPause} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer' }}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={() => jump(10)} style={{ background: 'none', border: 'none', color: '#f7c873', fontSize: 20, cursor: 'pointer' }} title="Avanzar 10s"><FaStepForward /></button>
        <input
          type="range"
          min={0}
          max={duration}
          value={progress}
          onChange={handleSeek}
          style={{ flex: 1, margin: '0 12px', accentColor: '#f7c873' }}
        />
        <span style={{ fontSize: 14, minWidth: 60, textAlign: 'right' }}>{formatTime(progress)} / {formatTime(duration)}</span>
      </div>
      <div style={{ marginTop: 32, minHeight: 80, fontSize: '1.15rem', transition: 'all .3s', textAlign: 'center' }}>
        {transcript[current]?.text}
      </div>
    </div>
  );
}

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}
