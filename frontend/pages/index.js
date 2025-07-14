import Layout from '../components/Layout';
import Link from 'next/link';
import { FaHandsHelping, FaRegUser, FaArrowRight, FaShieldAlt, FaHeart, FaChartLine } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '24px',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        margin: '2rem auto',
        padding: '3rem 2rem',
        maxWidth: '600px',
        position: 'relative',
        overflow: 'hidden',
        animation: 'fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '200%',
          height: '200%',
          background: 'conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.1), transparent)',
          animation: 'float 8s infinite linear',
          borderRadius: '50%'
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))',
            borderRadius: '50%',
            padding: '1.5rem',
            display: 'inline-flex',
            marginBottom: '2rem',
            animation: 'bounce 3s infinite'
          }}>
            <FaHandsHelping size={48} color="#f7c873" />
          </div>
          
          <h1 style={{
            fontWeight: 800,
            fontSize: '3rem',
            background: 'linear-gradient(135deg, #F8FAFC 0%, #06B6D4 50%, #8B5CF6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}>
            Hombres y Mujeres Fuertes
          </h1>
          
          <p style={{
            maxWidth: '500px',
            textAlign: 'center',
            margin: '0 auto 2.5rem auto',
            color: 'rgba(248, 250, 252, 0.8)',
            fontSize: '1.125rem',
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            Un espacio profesional y humano para quienes buscan crecer, superar desafíos y vivir con valores. 
            Aquí no se trata de perfección, sino de <span style={{color: '#06B6D4', fontWeight: 600}}>autenticidad</span>, 
            <span style={{color: '#8B5CF6', fontWeight: 600}}> coraje</span> y 
            <span style={{color: '#06B6D4', fontWeight: 600}}> transformación real</span>.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}>
            <Link href="/login">
              <button style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                border: 'none',
                borderRadius: '12px',
                padding: '1rem 2rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
              }}>
                Ingresar <FaArrowRight />
              </button>
            </Link>
            
            <Link href="/register">
              <button className="secondary" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#F8FAFC',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: 600,
                fontSize: '1rem',
                borderRadius: '12px',
                padding: '1rem 2rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backdropFilter: 'blur(20px)'
              }}>
                Registrarse <FaRegUser />
              </button>
            </Link>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{textAlign: 'center', opacity: 0.8}}>
              <FaShieldAlt size={24} color="#06B6D4" style={{marginBottom: '0.5rem'}} />
              <div style={{fontSize: '0.875rem', color: 'rgba(248, 250, 252, 0.7)'}}>Seguro</div>
            </div>
            <div style={{textAlign: 'center', opacity: 0.8}}>
            <FaChartLine size={24} color="#22d3ee" style={{marginBottom: '0.5rem'}} />
            <div style={{fontSize: '0.875rem', color: 'rgba(248, 250, 252, 0.7)'}}>Crecimiento</div>
            </div>
            <div style={{textAlign: 'center', opacity: 0.8}}>
              <FaHeart size={24} color="#06B6D4" style={{marginBottom: '0.5rem'}} />
              <div style={{fontSize: '0.875rem', color: 'rgba(248, 250, 252, 0.7)'}}>Humano</div>
            </div>
          </div>
          
          <blockquote style={{
            marginTop: '2.5rem',
            color: 'rgba(248, 250, 252, 0.9)',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: '1rem',
            textAlign: 'center',
            animation: 'fadeInUp 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative'
          }}>
            <span style={{
              fontSize: '2rem',
              color: '#06B6D4',
              position: 'absolute',
              left: '-1rem',
              top: '-0.5rem'
            }}>"</span>
            Ser fuerte no significa no tener miedo, sino avanzar a pesar de él.
            <span style={{
              fontSize: '2rem',
              color: '#8B5CF6',
              position: 'absolute',
              right: '-1rem',
              bottom: '-1rem'
            }}>"</span>
          </blockquote>
        </div>
      </section>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-8px);
          }
        }
        
        @keyframes float {
          from { 
            transform: rotate(0deg);
          }
          to { 
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Layout>
  );
}
