import Layout from '../components/Layout';
import Link from 'next/link';
import Card from '../components/Card';
import Flex from '../components/Flex';
import { FaShieldAlt, FaHeart, FaChartLine, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Home() {
Home.title = "Inicio | F88 Academia";
  return (
    <Layout>
      {/* HERO mejorado con burbujas decorativas */}
      <section style={{
        width: '100%',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2196f3',
        color: '#fff',
        padding: '2rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Fondo tipo network: líneas y nodos sutiles */}
        <svg style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:1}} viewBox="0 0 1440 400" fill="none">
          {/* Líneas */}
          <line x1="100" y1="80" x2="400" y2="300" stroke="#fff" strokeOpacity="0.10" strokeWidth="2" />
          <line x1="400" y1="300" x2="900" y2="320" stroke="#fff" strokeOpacity="0.10" strokeWidth="2" />
          <line x1="900" y1="320" x2="1200" y2="120" stroke="#fff" strokeOpacity="0.10" strokeWidth="2" />
          <line x1="220" y1="80" x2="700" y2="320" stroke="#fff" strokeOpacity="0.10" strokeWidth="2" />
          <line x1="1300" y1="350" x2="1200" y2="120" stroke="#fff" strokeOpacity="0.10" strokeWidth="2" />
          <line x1="220" y1="80" x2="1300" y2="350" stroke="#fff" strokeOpacity="0.07" strokeWidth="1.5" />
          {/* Nodos grandes */}
          <circle cx="220" cy="80" r="38" fill="#fff" opacity="0.07" />
          <circle cx="1200" cy="120" r="48" fill="#fff" opacity="0.07" />
          <circle cx="400" cy="300" r="32" fill="#fff" opacity="0.07" />
          <circle cx="900" cy="320" r="28" fill="#fff" opacity="0.07" />
          <circle cx="1300" cy="350" r="36" fill="#fff" opacity="0.07" />
          {/* Nodos pequeños */}
          <circle cx="700" cy="320" r="12" fill="#fff" opacity="0.13" />
          <circle cx="300" cy="180" r="8" fill="#fff" opacity="0.13" />
          <circle cx="1100" cy="200" r="10" fill="#fff" opacity="0.13" />
          <circle cx="600" cy="100" r="7" fill="#fff" opacity="0.13" />
          <circle cx="1000" cy="380" r="9" fill="#fff" opacity="0.13" />
        </svg>
        <div style={{
          flex: 1,
          maxWidth: 600,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontFamily: 'Poppins, Inter, Segoe UI, Arial, sans-serif',
            fontWeight: 600,
            fontSize: '2.7rem',
            marginBottom: '1.2rem',
            letterSpacing: '-0.01em',
            lineHeight: 1.13,
            color: '#fff',
            textAlign: 'center',
            textShadow: '0 3px 16px rgba(0,0,0,0.13)',
          }}>
            <span style={{fontWeight:700, letterSpacing:'0.01em', fontSize:'3.1rem', textTransform:'uppercase', fontFamily:'Poppins, Inter, Segoe UI, Arial, sans-serif'}}>
              FORTITUDE
            </span>
          </h1>
          <p style={{
            fontSize: '1.35rem',
            marginBottom: '2.5rem',
            color: '#e3f2fd',
            fontWeight: 500,
            lineHeight: 1.7,
            fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
            textAlign: 'center',
          }}>
            Crece, supera desafíos y vive con valores.<br />
            <span style={{ color: '#ffe082', fontWeight: 700 }}>Autenticidad</span>, <span style={{ color: '#fff', fontWeight: 700 }}>coraje</span> y <span style={{ color: '#ffe082', fontWeight: 700 }}>transformación real</span>.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '2.2rem',
            marginBottom: '2.2rem',
            flexWrap: 'wrap',
            zIndex: 2,
            position: 'relative',
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '1.1rem 1.7rem',
              minWidth: 220,
              maxWidth: 260,
              flex: '1 1 220px',
              boxShadow: '0 2px 12px rgba(33,150,243,0.10)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div style={{fontWeight:400,fontSize:'1.08rem',color:'#fff',marginBottom:'0.3rem'}}>Seguro</div>
              <div style={{fontSize:'1.02rem',color:'#e3f2fd',fontWeight:300}}>Ambiente protegido y confiable para tu desarrollo.</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '1.1rem 1.7rem',
              minWidth: 220,
              maxWidth: 260,
              flex: '1 1 220px',
              boxShadow: '0 2px 12px rgba(139,92,246,0.10)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div style={{fontWeight:400,fontSize:'1.08rem',color:'#fff',marginBottom:'0.3rem'}}>Crecimiento</div>
              <div style={{fontSize:'1.02rem',color:'#e3f2fd',fontWeight:300}}>Herramientas y acompañamiento para tu evolución personal.</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '1.1rem 1.7rem',
              minWidth: 220,
              maxWidth: 260,
              flex: '1 1 220px',
              boxShadow: '0 2px 12px rgba(247,200,115,0.10)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div style={{fontWeight:400,fontSize:'1.08rem',color:'#fff',marginBottom:'0.3rem'}}>Humano</div>
              <div style={{fontSize:'1.02rem',color:'#e3f2fd',fontWeight:300}}>Relaciones auténticas y apoyo genuino.</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <Link href="/register"><button style={{
              background: '#ffe082',
              color: '#222',
              fontWeight: 700,
              fontSize: '1.15rem',
              border: 'none',
              borderRadius: '12px',
              padding: '1rem 2.2rem',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(33,150,243,0.10)'
            }}>Comenzar ahora</button></Link>
          </div>
        </div>
          <div style={{flex:1, maxWidth:500, display:'flex', justifyContent:'center',zIndex:2}}>
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
              alt="Hero"
              style={{
                width:'100%',
                maxWidth:400,
                borderRadius:'32px',
                boxShadow:'0 8px 32px rgba(33,150,243,0.10)'
              }}
            />
          </div>
        </section>

        {/* NOVEDADES / BLOG */}
        <section style={{
          width: '100%',
          background: '#fff',
          color: '#222',
          padding: '4rem 1rem 2.5rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h2 style={{
            fontWeight: 900,
            fontSize: '2.6rem',
            marginBottom: '2.5rem',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            color: '#18181b',
          }}>Lee las últimas novedades</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2.5rem',
            justifyContent: 'center',
            alignItems: 'stretch',
            width: '100%',
            maxWidth: 1200,
            marginBottom: '2.5rem',
          }}>
            {/* Card 1 */}
            <div style={{
              background: '#18344a',
              borderRadius: '12px',
              boxShadow: '0 4px 24px rgba(33,150,243,0.10)',
              minWidth: 320,
              maxWidth: 370,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}>
              <div style={{width:'100%',height:180,overflow:'hidden'}}>
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Coaching Dinero" style={{width:'100%',height:'100%',objectFit:'cover'}} />
              </div>
              <div style={{padding:'1.2rem 1.2rem 0.7rem 1.2rem'}}>
                <span style={{background:'#06B6D4',color:'#fff',fontWeight:700,fontSize:'0.95rem',borderRadius:'7px',padding:'0.3rem 0.9rem',marginBottom:'0.7rem',display:'inline-block'}}>BLOG</span>
                <h3 style={{fontWeight:800,fontSize:'1.18rem',margin:'0.7rem 0 0.7rem 0',color:'#fff'}}>11 Claves para potenciar tu mentalidad financiera</h3>
                <p style={{color:'#e3f2fd',fontSize:'1.05rem',marginBottom:'1.1rem'}}>Descubre cómo el coaching puede ayudarte a transformar tu relación con el dinero y alcanzar tus metas.</p>
              </div>
              <div style={{padding:'0.7rem 1.2rem',fontSize:'0.98rem',color:'#b3c2d6',borderTop:'1px solid #27405a',display:'flex',justifyContent:'space-between'}}>
                <span>Julio 16, 2025</span>
                <span>No hay comentarios</span>
              </div>
            </div>
            {/* Card 2 */}
            <div style={{
              background: '#18344a',
              borderRadius: '12px',
              boxShadow: '0 4px 24px rgba(33,150,243,0.10)',
              minWidth: 320,
              maxWidth: 370,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}>
              <div style={{width:'100%',height:180,overflow:'hidden'}}>
                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Coaching Meditación" style={{width:'100%',height:'100%',objectFit:'cover'}} />
              </div>
              <div style={{padding:'1.2rem 1.2rem 0.7rem 1.2rem'}}>
                <span style={{background:'#06B6D4',color:'#fff',fontWeight:700,fontSize:'0.95rem',borderRadius:'7px',padding:'0.3rem 0.9rem',marginBottom:'0.7rem',display:'inline-block'}}>BLOG</span>
                <h3 style={{fontWeight:800,fontSize:'1.18rem',margin:'0.7rem 0 0.7rem 0',color:'#fff'}}>17 Beneficios de la meditación para emprendedores</h3>
                <p style={{color:'#e3f2fd',fontSize:'1.05rem',marginBottom:'1.1rem'}}>Mejora tu enfoque, reduce el estrés y potencia tu liderazgo con técnicas de coaching y mindfulness.</p>
              </div>
              <div style={{padding:'0.7rem 1.2rem',fontSize:'0.98rem',color:'#b3c2d6',borderTop:'1px solid #27405a',display:'flex',justifyContent:'space-between'}}>
                <span>Julio 16, 2025</span>
                <span>No hay comentarios</span>
              </div>
            </div>
            {/* Card 3 */}
            <div style={{
              background: '#18344a',
              borderRadius: '12px',
              boxShadow: '0 4px 24px rgba(33,150,243,0.10)',
              minWidth: 320,
              maxWidth: 370,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}>
              <div style={{width:'100%',height:180,overflow:'hidden'}}>
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80" alt="Coaching Productividad" style={{width:'100%',height:'100%',objectFit:'cover'}} />
              </div>
              <div style={{padding:'1.2rem 1.2rem 0.7rem 1.2rem'}}>
                <span style={{background:'#06B6D4',color:'#fff',fontWeight:700,fontSize:'0.95rem',borderRadius:'7px',padding:'0.3rem 0.9rem',marginBottom:'0.7rem',display:'inline-block'}}>BLOG</span>
                <h3 style={{fontWeight:800,fontSize:'1.18rem',margin:'0.7rem 0 0.7rem 0',color:'#fff'}}>Cómo salir de la negatividad y ser productivo</h3>
                <p style={{color:'#e3f2fd',fontSize:'1.05rem',marginBottom:'1.1rem'}}>Estrategias de coaching para superar bloqueos emocionales y recuperar tu energía y motivación.</p>
              </div>
              <div style={{padding:'0.7rem 1.2rem',fontSize:'0.98rem',color:'#b3c2d6',borderTop:'1px solid #27405a',display:'flex',justifyContent:'space-between'}}>
                <span>Julio 16, 2025</span>
                <span>No hay comentarios</span>
              </div>
            </div>
          </div>
          {/* Paginación */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.7rem',
            fontSize: '1.15rem',
            color: '#222',
            marginTop: '0.5rem',
            flexWrap: 'wrap',
          }}>
            <span style={{color:'#a1a1aa'}}>« Anterior</span>
            <span style={{fontWeight:700,color:'#06B6D4'}}>1</span>
            <span>2</span>
            <span>3</span>
            <span>…</span>
            <span>10</span>
            <span style={{color:'#e11d48',fontWeight:700}}>Siguiente »</span>
          </div>
        </section>


        {/* CURSOS Y RECURSOS */}


        <section style={{
          width: '100%',
          background: '#18344a',
          color: '#222',
          padding: '4rem 1rem 3rem 1rem',
          minHeight: '520px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h2 style={{
            fontWeight:900,
            fontSize:'2.3rem',
            marginBottom:'2.7rem',
            textAlign:'center',
            letterSpacing:'-0.01em',
            color:'#e3f2fd',
            textShadow:'0 2px 12px rgba(0,0,0,0.10)'
          }}>Nuestros Cursos y Recursos</h2>
          <div style={{
            display:'flex',
            flexDirection:'row',
            gap:'2.5rem',
            justifyContent:'center',
            alignItems:'stretch',
            width:'100%',
            maxWidth:1200,
          }}>
            <div style={{
              background:'#fff',
              borderRadius:'18px',
              boxShadow:'0 4px 24px rgba(33,150,243,0.10)',
              padding:'2rem 1.5rem 1.5rem 1.5rem',
              minWidth:320,
              maxWidth:370,
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              border:'1px solid #e0e7ef',
              transition:'box-shadow 0.2s',
            }}>
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Curso" style={{width:'100%',borderRadius:'12px',marginBottom:'1rem',boxShadow:'0 2px 12px rgba(33,150,243,0.08)'}} />
              <h3 style={{fontWeight:700,marginBottom:'0.5rem',fontSize:'1.18rem',color:'#2196f3',textAlign:'center'}}>Curso de Autoliderazgo</h3>
              <p style={{fontSize:'1.05rem',color:'#222',textAlign:'center',fontWeight:500,marginBottom:'1.1rem'}}>Desarrolla tu capacidad de liderar tu vida y tus proyectos.</p>
              <Link href="/curso"><button style={{
                marginTop:'0.5rem',
                background:'#2196f3',
                color:'#fff',
                border:'none',
                borderRadius:'8px',
                padding:'0.7rem 1.5rem',
                fontWeight:600,
                fontSize:'1.05rem',
                cursor:'pointer',
                boxShadow:'0 2px 12px rgba(33,150,243,0.10)',
                transition:'background 0.18s',
              }}>Ver más</button></Link>
            </div>
            <div style={{
              background:'#fff',
              borderRadius:'18px',
              boxShadow:'0 4px 24px rgba(33,150,243,0.10)',
              padding:'2rem 1.5rem 1.5rem 1.5rem',
              minWidth:320,
              maxWidth:370,
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              border:'1px solid #e0e7ef',
              transition:'box-shadow 0.2s',
            }}>
              <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Recursos" style={{width:'100%',borderRadius:'12px',marginBottom:'1rem',boxShadow:'0 2px 12px rgba(33,150,243,0.08)'}} />
              <h3 style={{fontWeight:700,marginBottom:'0.5rem',fontSize:'1.18rem',color:'#2196f3',textAlign:'center'}}>Recursos de Crecimiento</h3>
              <p style={{fontSize:'1.05rem',color:'#222',textAlign:'center',fontWeight:500,marginBottom:'1.1rem'}}>Materiales y herramientas para tu desarrollo personal.</p>
              <Link href="/dashboard"><button style={{
                marginTop:'0.5rem',
                background:'#2196f3',
                color:'#fff',
                border:'none',
                borderRadius:'8px',
                padding:'0.7rem 1.5rem',
                fontWeight:600,
                fontSize:'1.05rem',
                cursor:'pointer',
                boxShadow:'0 2px 12px rgba(33,150,243,0.10)',
                transition:'background 0.18s',
              }}>Ver más</button></Link>
            </div>
          </div>
        </section>


        {/* FOOTER ESTILO MASAcademy */}
        <footer style={{
          width: '100%',
          background: '#111',
          color: '#fff',
          padding: '3.5rem 0 0 0',
          marginTop: 0,
          boxShadow: 'none',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            maxWidth: 1300,
            margin: '0 auto',
            padding: '0 2rem 2.5rem 2rem',
            gap: '2.5rem',
          }}>
            {/* Logo y columna principal */}
            <div style={{flex:'1 1 260px',marginBottom:'2rem',minWidth:220}}>
              <div style={{display:'flex',alignItems:'center',gap:'0.7rem',marginBottom:'1.2rem'}}>
                <div style={{width:44,height:44,borderRadius:'50%',background:'linear-gradient(135deg,#06B6D4 60%,#18181b 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#18181b" />
                    <path d="M14 4L24 24H4L14 4Z" fill="#06B6D4" />
                  </svg>
                </div>
                <span style={{fontWeight:500,fontSize:'2.1rem',letterSpacing:'-0.02em',color:'#fff'}}>F88 | Academia FORTITUDE</span>
              </div>
              <div style={{fontWeight:600,fontSize:'1.15rem',marginBottom:'1.2rem',color:'#e5e7eb'}}>Coaching y Comunidad</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'0.5rem'}}>Coaching individual y grupal</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'0.5rem'}}>Mentoría para el desarrollo personal</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'0.5rem'}}>Grupos de apoyo y networking</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'0.5rem'}}>Charlas y talleres exclusivos</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb'}}>Comunidad F88</div>
            </div>
            {/* Eventos */}
            <div style={{flex:'1 1 180px',marginBottom:'2rem',minWidth:160}}>
              <div style={{fontWeight:600,fontSize:'1.15rem',marginBottom:'1.2rem',color:'#e5e7eb'}}>Cursos y Talleres</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'0.5rem'}}>Autoliderazgo y resiliencia</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'0.5rem'}}>Comunicación efectiva</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb'}}>Gestión emocional</div>
            </div>
            {/* Programas */}
            <div style={{flex:'1 1 220px',marginBottom:'2rem',minWidth:180}}>
              <div style={{fontWeight:600,fontSize:'1.15rem',marginBottom:'1.2rem',color:'#e5e7eb'}}>Recursos</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'0.5rem'}}>Guías y ebooks gratuitos</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'0.5rem'}}>Videos y podcasts</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'0.5rem'}}>Artículos de crecimiento</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb'}}>Testimonios y casos de éxito</div>
            </div>
            {/* Podcast y redes */}
            <div style={{flex:'1 1 180px',marginBottom:'2rem',minWidth:160}}>
              <div style={{fontWeight:600,fontSize:'1.15rem',marginBottom:'1.2rem',color:'#e5e7eb'}}>Podcast y Contacto</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'1.2rem'}}>Escuchá F88 Podcast</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb',marginBottom:'0.7rem'}}>info@f88.com</div>
              <div style={{fontSize:'1rem',color:'#e5e7eb'}}>+54 11 1234-5678</div>
              <div style={{display:'flex',gap:'1.2rem',marginTop:'0.5rem'}}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{color:'#fff',transition:'color 0.2s'}} onMouseOver={e=>e.currentTarget.style.color='#06B6D4'} onMouseOut={e=>e.currentTarget.style.color='#fff'}><FaFacebook size={28} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{color:'#fff',transition:'color 0.2s'}} onMouseOver={e=>e.currentTarget.style.color='#1DA1F2'} onMouseOut={e=>e.currentTarget.style.color='#fff'}><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.813 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/></svg></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{color:'#fff',transition:'color 0.2s'}} onMouseOver={e=>e.currentTarget.style.color='#E1306C'} onMouseOut={e=>e.currentTarget.style.color='#fff'}><FaInstagram size={28} /></a>
              </div>
            </div>
          </div>
          {/* Línea inferior contacto y privacidad */}
          <div style={{background:'#fff',color:'#222',padding:'1.1rem 0 0.7rem 0',fontSize:'1.05rem',textAlign:'center',borderTop:'1px solid #222',marginTop:'0'}}>
            Teléfono: +54 11 1234-5678 &nbsp;|&nbsp; Email: info@f88.com &nbsp;|&nbsp; <span style={{color:'#06B6D4'}}>Política de Privacidad</span>: Valoramos tu privacidad y prometemos nunca enviarte SPAM. <a href="#" style={{color:'#06B6D4',textDecoration:'underline'}}>Aviso de Privacidad</a>.
          </div>

        </footer>
    </Layout>
  );
}
