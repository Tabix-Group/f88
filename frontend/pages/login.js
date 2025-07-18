import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
import Link from 'next/link';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { FaUserLock, FaEye, FaEyeSlash, FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    } catch (err) {
      setError('Credenciales incorrectas. Verifica tu email y contraseña.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        padding: '2rem'
      }}>
        <Card style={{
          maxWidth: '420px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
          animation: 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))',
              borderRadius: '50%',
              padding: '1rem',
              display: 'inline-flex',
              marginBottom: '1rem'
            }}>
              <FaUserLock size={32} color="#06B6D4" />
            </div>
            <h2 style={{
              color: '#F8FAFC',
              fontWeight: 700,
              fontSize: '1.75rem',
              marginBottom: '0.5rem'
            }}>
              Bienvenido de vuelta
            </h2>
            <p style={{
              color: 'rgba(248, 250, 252, 0.7)',
              fontSize: '0.95rem'
            }}>
              Ingresa a tu cuenta para continuar
            </p>
          </div>

          <form onSubmit={handleLogin} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{ position: 'relative' }}>
              <FaEnvelope 
                size={16} 
                color="rgba(248, 250, 252, 0.5)" 
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2
                }}
              />
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
                style={{
                  paddingLeft: '3rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1rem 1rem 1rem 3rem',
                  fontSize: '0.95rem',
                  color: '#F8FAFC',
                  width: '100%',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <FaLock 
                size={16} 
                color="rgba(248, 250, 252, 0.5)" 
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2
                }}
              />
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
                style={{
                  paddingLeft: '3rem',
                  paddingRight: '3rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1rem 3rem 1rem 3rem',
                  fontSize: '0.95rem',
                  color: '#F8FAFC',
                  width: '100%',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  color: 'rgba(248, 250, 252, 0.5)',
                  transition: 'color 0.2s'
                }}
              >
                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '-0.5rem'
            }}>
              <Link href="/forgot-password" style={{
                color: '#06B6D4',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'color 0.2s'
              }}>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              style={{
                marginTop: '1rem',
                background: loading ? 'rgba(6, 182, 212, 0.5)' : 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
                color: '#fff',
                fontWeight: 600,
                border: 'none',
                borderRadius: '12px',
                padding: '1rem 2rem',
                fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
              }}
            >
              {loading ? (
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
              ) : (
                <>
                  <FaSignInAlt size={16} />
                  Iniciar sesión
                </>
              )}
            </button>

            {error && (
              <div className="error" style={{
                color: '#EF4444',
                fontWeight: 500,
                fontSize: '0.875rem',
                textAlign: 'center',
                padding: '0.75rem',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '8px'
              }}>
                {error}
              </div>
            )}
          </form>

          <div style={{
            textAlign: 'center',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{
              color: 'rgba(248, 250, 252, 0.7)',
              fontSize: '0.9rem'
            }}>
              ¿No tienes cuenta?{' '}
              <Link href="/register" style={{
                color: '#06B6D4',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.2s'
              }}>
                Regístrate aquí
              </Link>
            </p>
          </div>
        </Card>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
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
      `}</style>
    </Layout>
  );
}
    