import Link from 'next/link';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Flex from '../components/Flex';
import { FaBook, FaGraduationCap, FaAmazon, FaRocket, FaStar, FaPlay } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <Layout>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        animation: 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <h2 style={{
          background: 'linear-gradient(135deg, #F8FAFC 0%, #06B6D4 50%, #8B5CF6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 800,
          fontSize: '2.5rem',
          marginBottom: '0.5rem'
        }}>
          Bienvenido a tu espacio
        </h2>
        <p style={{
          color: 'rgba(248, 250, 252, 0.7)',
          fontSize: '1.125rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Elige tu camino de crecimiento personal y profesional
        </p>
      </div>

      <Flex style={{
        marginTop: '2rem',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <Card style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          boxShadow: '0 8px 32px rgba(6, 182, 212, 0.1)',
          minWidth: '350px',
          maxWidth: '400px',
          position: 'relative',
          overflow: 'hidden',
          animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
            animation: 'float 6s infinite alternate'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #06B6D4, #0891B2)',
                borderRadius: '12px',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaBook size={24} color="white" />
              </div>
              <h3 style={{
                color: '#F8FAFC',
                fontWeight: 700,
                fontSize: '1.5rem',
                margin: 0
              }}>
                Libro Digital
              </h3>
            </div>
            
            <p style={{
              color: 'rgba(248, 250, 252, 0.8)',
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              Adquiere el libro físico o digital en Amazon y tiendas asociadas. 
              Contenido transformador para tu crecimiento personal.
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              color: 'rgba(248, 250, 252, 0.7)',
              fontSize: '0.875rem'
            }}>
              <FaStar color="#F59E0B" />
              <FaStar color="#F59E0B" />
              <FaStar color="#F59E0B" />
              <FaStar color="#F59E0B" />
              <FaStar color="#F59E0B" />
              <span style={{ marginLeft: '0.5rem' }}>4.9/5 (2,847 reseñas)</span>
            </div>
            
            <a href="https://amazon.com/demo-libro" target="_blank" rel="noopener noreferrer">
              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                border: 'none',
                borderRadius: '12px',
                padding: '1rem 2rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
              }}>
                <FaAmazon size={20} />
                Comprar en Amazon
              </button>
            </a>
          </div>
        </Card>

        <Card style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          boxShadow: '0 8px 32px rgba(139, 92, 246, 0.1)',
          minWidth: '350px',
          maxWidth: '400px',
          position: 'relative',
          overflow: 'hidden',
          animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            animation: 'float 6s infinite alternate-reverse'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                borderRadius: '12px',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaGraduationCap size={24} color="white" />
              </div>
              <h3 style={{
                color: '#F8FAFC',
                fontWeight: 700,
                fontSize: '1.5rem',
                margin: 0
              }}>
                Curso Completo
              </h3>
            </div>
            
            <p style={{
              color: 'rgba(248, 250, 252, 0.8)',
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              Accede al curso online completo, lee y escucha el libro, 
              y consulta con nuestro Coach IA personalizado.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '0.75rem',
                textAlign: 'center'
              }}>
                <div style={{ color: '#8B5CF6', fontWeight: 700, fontSize: '1.25rem' }}>12+</div>
                <div style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '0.75rem' }}>Capítulos</div>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '0.75rem',
                textAlign: 'center'
              }}>
                <div style={{ color: '#06B6D4', fontWeight: 700, fontSize: '1.25rem' }}>24/7</div>
                <div style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '0.75rem' }}>Coach IA</div>
              </div>
            </div>
            
            <Link href="/curso">
              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                border: 'none',
                borderRadius: '12px',
                padding: '1rem 2rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
              }}>
                <FaPlay size={16} />
                Comenzar curso
              </button>
            </Link>
          </div>
        </Card>
      </Flex>

      <div style={{
        textAlign: 'center',
        marginTop: '4rem',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        animation: 'fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both'
      }}>
        <FaRocket size={32} color="#06B6D4" style={{ marginBottom: '1rem' }} />
        <h3 style={{
          color: '#F8FAFC',
          fontWeight: 600,
          fontSize: '1.25rem',
          marginBottom: '0.5rem'
        }}>
          ¿Listo para transformar tu vida?
        </h3>
        <p style={{
          color: 'rgba(248, 250, 252, 0.7)',
          fontSize: '0.95rem',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          Únete a miles de personas que ya han comenzado su viaje de crecimiento personal y profesional.
        </p>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px);
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
        
        @keyframes float {
          from { 
            transform: translateY(0) rotate(0deg);
          }
          to { 
            transform: translateY(-10px) rotate(5deg);
          }
        }
      `}</style>
    </Layout>
  );
}
