import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { 
  Pill, 
  Heart, 
  Camera, 
  Calculator, 
  BookOpen, 
  BarChart3, 
  Shield, 
  Clock,
  Award,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Sparkles
} from 'lucide-react'

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: "Healthcare Excellence Award",
      role: "Industry Recognition",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Recognized for outstanding innovation in healthcare technology and patient care management systems.",
      rating: 5
    },
    {
      name: "Patient Success Stories",
      role: "Real Results",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Over 90% of users report improved medication adherence and better health outcomes within 30 days.",
      rating: 5
    },
    {
      name: "Medical Technology Innovation",
      role: "AI-Powered Care", 
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Advanced AI algorithms provide personalized health insights and early warning systems for better preventive care.",
      rating: 5
    }
  ]
  const features = [
    {
      icon: <Pill size={40} />,
      title: "Medication Tracker",
      description: "Never miss a dose with smart reminders and comprehensive medication management.",
      link: "/medication-tracker"
    },
    {
      icon: <Heart size={40} />,
      title: "Mental Health Monitor",
      description: "Track your mood, emotions, and mental wellness with AI-powered insights.",
      link: "/mood-monitor"
    },
    {
      icon: <Camera size={40} />,
      title: "Medical Image Detector",
      description: "AI-powered medical image analysis for early anomaly detection and health insights.",
      link: "/medical-detector"
    },
    {
      icon: <Calculator size={40} />,
      title: "Healthcare Cost Calculator",
      description: "Estimate and plan your healthcare expenses with our comprehensive cost calculator.",
      link: "/cost-calculator"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Health Journal",
      description: "Document your health records with our comprehensive digital logging system.",
      link: "/journal"
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Analytics Dashboard",
      description: "Visualize your health data with comprehensive charts and insights.",
      link: "/dashboard"
    }
  ]

  const stats = [
    { icon: <Users size={30} />, value: "50K+", label: "Active Users", color: "#3B82F6" },
    { icon: <Shield size={30} />, value: "99.9%", label: "Data Security", color: "#10B981" },
    { icon: <Clock size={30} />, value: "24/7", label: "Support", color: "#F59E0B" },
    { icon: <Award size={30} />, value: "4.9★", label: "User Rating", color: "#EF4444" }
  ]

  return (
    <div className="homepage" style={{
      background: 'linear-gradient(180deg, rgba(45, 55, 72, 0.95) 0%, rgba(26, 32, 44, 0.95) 20%, #ffffff 30%, #f8fafc 50%, #ffffff 70%, #fafbfc 90%, #f1f5f9 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Particles */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: 'rgba(56, 178, 172, 0.3)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <div style={{
        position: 'fixed',
        top: mousePosition.y - 10,
        left: mousePosition.x - 10,
        width: '20px',
        height: '20px',
        background: 'radial-gradient(circle, rgba(56, 178, 172, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1000,
        transition: 'all 0.1s ease'
      }} />

      {/* Dynamic Hero Section */}
      <div className="hero" style={{
        background: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '2rem'
      }}>
        {/* Animated Medical Icons */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          fontSize: '2rem',
          opacity: 0.05,
          color: 'rgba(56, 178, 172, 0.3)'
        }}>⚕️</div>
        
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          fontSize: '1.8rem',
          opacity: 0.05,
          color: 'rgba(56, 178, 172, 0.3)'
        }}>🏥</div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          fontSize: '2rem',
          opacity: 0.05,
          color: 'rgba(56, 178, 172, 0.3)'
        }}>📊</div>

        <div className="hero-content" style={{
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '2rem',
          position: 'relative',
          zIndex: 2,
          animation: 'fadeInUp 1s ease-out'
        }}>
          {/* Professional Healthcare Technology */}
          <div style={{
            position: 'relative',
            width: '250px',
            height: '160px',
            margin: '0 auto 2rem',
          }}>
            <div style={{
              width: '250px',
              height: '160px',
              backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Professional Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.1) 0%, rgba(45, 55, 72, 0.1) 100%)'
              }} />
            </div>
            {/* Professional Status Indicator */}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              padding: '4px 8px',
              background: '#10B981',
              borderRadius: '4px',
              border: '1px solid white',
              color: 'white',
              fontSize: '10px',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              ACTIVE
            </div>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
            lineHeight: '1.1',
            fontFamily: '"Inter", "Segoe UI", sans-serif',
            letterSpacing: '-0.02em'
          }}>
            Enterprise Healthcare
            <br />
            <span style={{
              color: '#4FD1C7',
              fontWeight: '600'
            }}>
              Management Platform
            </span>
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '3rem',
            lineHeight: '1.6',
            textShadow: '0px 1px 2px rgba(0,0,0,0.2)',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            fontWeight: '400',
            letterSpacing: '0.01em'
          }}>
            Streamline healthcare operations with our comprehensive digital platform. 
            Advanced analytics, automated workflows, and enterprise-grade security 
            designed for healthcare professionals and institutions.
          </p>
          
          <div className="cta-buttons" style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <Link to="/dashboard" style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #38B2AC 0%, #2D3748 100%)',
              color: 'white',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(56, 178, 172, 0.3)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 20px rgba(56, 178, 172, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 12px rgba(56, 178, 172, 0.3)'
            }}>
              <span>Get Started</span>
              <ArrowRight size={18} />
            </Link>
            
            <button style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '6px',
              background: 'transparent',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)'
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
              e.target.style.transform = 'translateY(0)'
            }}>
              <Play size={18} />
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            opacity: 0.8
          }}>
            {[
              { icon: <CheckCircle size={16} style={{ color: '#10B981' }} />, text: 'HIPAA Compliant' },
              { icon: <CheckCircle size={16} style={{ color: '#10B981' }} />, text: 'FDA Approved' },
              { icon: <Star size={16} style={{ color: '#F59E0B' }} />, text: '4.9★ Rating' }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'white',
                fontSize: '0.9rem',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div style={{ 
        padding: '4rem 2rem', 
        background: 'transparent',
        position: 'relative',
        marginTop: '-5rem'
      }}>
        {/* Animated Background Shapes */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(56, 178, 172, 0.05), rgba(79, 209, 197, 0.05))',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 197, 253, 0.05))',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--primary-color)',
              marginBottom: '1rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #38B2AC 0%, #2D3748 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Trusted Worldwide
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Join healthcare professionals who trust our enterprise platform
            </p>
          </div>

          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '25px',
                padding: '3rem 2rem',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                transformOrigin: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.05) rotateY(5deg)'
                e.currentTarget.style.boxShadow = `0 40px 80px rgba(${stat.color === '#3B82F6' ? '59, 130, 246' : stat.color === '#10B981' ? '16, 185, 129' : stat.color === '#F59E0B' ? '245, 158, 11' : '239, 68, 68'}, 0.25)`
                e.currentTarget.style.background = 'rgba(255, 255, 255, 1)'
                e.currentTarget.style.border = `2px solid ${stat.color}30`
                
                // Animate the icon
                const icon = e.currentTarget.querySelector('.stat-icon')
                if (icon) {
                  icon.style.transform = 'scale(1.2) rotateZ(10deg)'
                  icon.style.boxShadow = `0 15px 40px ${stat.color}40`
                }
                
                // Animate the value
                const value = e.currentTarget.querySelector('.stat-value')
                if (value) {
                  value.style.transform = 'scale(1.1)'
                  value.style.textShadow = `0 5px 15px ${stat.color}30`
                }
                
                // Add ripple effect
                const ripple = e.currentTarget.querySelector('.ripple-effect')
                if (ripple) {
                  ripple.style.transform = 'scale(2)'
                  ripple.style.opacity = '0.1'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1) rotateY(0deg)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)'
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)'
                
                // Reset icon animation
                const icon = e.currentTarget.querySelector('.stat-icon')
                if (icon) {
                  icon.style.transform = 'scale(1) rotateZ(0deg)'
                  icon.style.boxShadow = `0 10px 30px ${stat.color}30`
                }
                
                // Reset value animation
                const value = e.currentTarget.querySelector('.stat-value')
                if (value) {
                  value.style.transform = 'scale(1)'
                  value.style.textShadow = 'none'
                }
                
                // Reset ripple effect
                const ripple = e.currentTarget.querySelector('.ripple-effect')
                if (ripple) {
                  ripple.style.transform = 'scale(0)'
                  ripple.style.opacity = '0'
                }
              }}>
                {/* Ripple Effect */}
                <div className="ripple-effect" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100px',
                  height: '100px',
                  background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%) scale(0)',
                  transition: 'all 0.6s ease',
                  opacity: 0,
                  pointerEvents: 'none'
                }} />
                
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${stat.color}, ${stat.color}88)`,
                  transition: 'all 0.3s ease'
                }} />
                
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  fontSize: '6rem',
                  opacity: 0.05,
                  color: stat.color,
                  transition: 'all 0.4s ease'
                }}>
                  {index === 0 ? '👥' : index === 1 ? '🔒' : index === 2 ? '⏰' : '⭐'}
                </div>
                
                <div className="stat-icon" style={{ 
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, ${stat.color}, ${stat.color}CC)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  margin: '0 auto 2rem',
                  boxShadow: `0 10px 30px ${stat.color}30`,
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {stat.icon}
                </div>
                
                <div className="stat-value" style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: '800',
                  color: stat.color,
                  display: 'block',
                  marginBottom: '1rem',
                  fontFamily: 'monospace',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {stat.value}
                </div>
                
                <div style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-secondary)',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  transition: 'color 0.3s ease'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Live Activity Feed */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(56, 178, 172, 0.1)'
          }}>
            <h3 style={{
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: 'var(--primary-color)',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              🔴 Live Activity
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)'
            }}>
              <span style={{ animation: 'pulse 2s ease-in-out infinite' }}>
                📊 1,247 health records analyzed today
              </span>
              <span style={{ animation: 'pulse 2s ease-in-out infinite 0.5s' }}>
                💊 3,821 medications tracked
              </span>
              <span style={{ animation: 'pulse 2s ease-in-out infinite 1s' }}>
                🧠 567 mood entries logged
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Individual Images */}
      <div className="features-section" style={{
        padding: '4rem 2rem',
        background: 'transparent',
        marginTop: '-3rem'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Comprehensive Health Management
          </h2>
          <p className="section-subtitle" style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 4rem',
            lineHeight: '1.6'
          }}>
            Professional healthcare tools and resources for comprehensive health management
          </p>
          
          <div className="features-grid">
            {features.map((feature, index) => {
              // Define specific images for each feature
              const featureImages = [
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Pills for medication
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Mental health
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Medical imaging
                "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Calculator/costs
                "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Journal/notes
                "https://images.unsplash.com/photo-1551838719-d64fb15d5c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"  // Dashboard/analytics
              ];

              return (
                <div key={index} className="feature-card" style={{ 
                  background: 'white',
                  borderRadius: '8px',
                  padding: '0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(56, 178, 172, 0.12)'
                  e.currentTarget.querySelector('.feature-icon').style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                  e.currentTarget.querySelector('.feature-icon').style.transform = 'scale(1)'
                }}>
                  {/* Professional Feature Header */}
                  <div style={{
                    height: '160px',
                    backgroundImage: `url("${featureImages[index]}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.85) 0%, rgba(45, 55, 72, 0.85) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div className="feature-icon" style={{
                        width: '60px',
                        height: '60px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#38B2AC',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Professional Content Area */}
                  <div style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: '#2D3748',
                      marginBottom: '1rem',
                      letterSpacing: '0.3px'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      color: '#4A5568',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                      flex: '1',
                      fontSize: '0.95rem'
                    }}>
                      {feature.description}
                    </p>
                    <Link 
                      to={feature.link} 
                      style={{ 
                        alignSelf: 'flex-start',
                        borderRadius: '6px',
                        padding: '0.75rem 1.5rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        background: '#38B2AC',
                        color: 'white',
                        border: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#2D3748'
                        e.target.style.transform = 'translateX(3px)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#38B2AC'
                        e.target.style.transform = 'translateX(0)'
                      }}
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Section with Professional Healthcare */}
      <div style={{
        padding: '4rem 2rem', 
        background: 'transparent',
        position: 'relative',
        marginTop: '-2rem'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(248, 250, 252, 0.1)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ 
          position: 'relative', 
          zIndex: 2,
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            {/* Professional Healthcare Images */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              {[
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              ].map((img, index) => (
                <div key={index} style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundImage: `url("${img}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '3px solid var(--primary-color)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  animation: `float ${3 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'
                  e.target.style.boxShadow = '0 10px 25px rgba(56, 178, 172, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: 'var(--primary-color)'
            }}>
              Why Choose HealthCare Pro?
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              marginBottom: '4rem',
              lineHeight: '1.6'
            }}>
              Trusted by healthcare professionals and loved by patients worldwide
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '3rem', 
              marginTop: '3rem' 
            }}>
              {[
                {
                  emoji: '🔒',
                  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                  title: 'Secure & Private',
                  description: 'Your health data is encrypted and protected with bank-level security. We never share your personal information without your explicit consent.'
                },
                {
                  emoji: '🤖',
                  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                  title: 'AI-Powered Insights',
                  description: 'Our advanced AI analyzes your health patterns to provide personalized recommendations and early warning signs.'
                },
                {
                  emoji: '📱',
                  image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                  title: 'Cross-Platform Access',
                  description: 'Access your health data anytime, anywhere. Our responsive design works seamlessly across all devices.'
                },
                {
                  emoji: '🏥',
                  image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                  title: 'Healthcare Integration',
                  description: 'Seamlessly integrate with healthcare providers and share your health data with medical professionals when needed.'
                }
              ].map((item, index) => (
                <div key={index} style={{ 
                  textAlign: 'left',
                  background: 'rgba(255, 255, 255, 0.9)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(56, 178, 172, 0.1)',
                  backdropFilter: 'blur(15px)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(56, 178, 172, 0.15)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.08)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    backgroundImage: `url("${item.image}")`,
                    backgroundSize: 'cover',
                    borderRadius: '50%',
                    opacity: 0.2
                  }}></div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'var(--primary-color)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>
                      {item.emoji}
                    </div>
                    <h3 style={{ 
                      color: 'var(--primary-color)', 
                      margin: 0, 
                      fontSize: '1.4rem',
                      fontWeight: '600'
                    }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    margin: 0,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Testimonials Section */}
      <div style={{
        padding: '4rem 2rem',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-2rem'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              marginBottom: '1rem',
              color: 'var(--primary-color)',
              fontWeight: '700'
            }}>
              Industry Recognition
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Trusted by healthcare professionals and recognized for excellence
            </p>
          </div>

          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '30px',
              padding: '4rem',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(56, 178, 172, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'all 0.5s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 40px 80px rgba(56, 178, 172, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.1)'
            }}>
              {/* Background pattern */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                fontSize: '15rem',
                opacity: 0.02,
                color: 'var(--primary-color)',
                fontFamily: 'serif'
              }}>"</div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundImage: `url("${testimonials[currentTestimonial].image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '4px solid var(--primary-color)',
                  boxShadow: '0 10px 30px rgba(56, 178, 172, 0.3)',
                  flexShrink: 0
                }} />
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p style={{
                    color: 'var(--primary-color)',
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}>
                    {testimonials[currentTestimonial].role}
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '0.25rem'
                  }}>
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={20} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote style={{
                fontSize: '1.4rem',
                lineHeight: '1.8',
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                margin: 0,
                position: 'relative',
                zIndex: 2
              }}>
                "{testimonials[currentTestimonial].text}"
              </blockquote>
            </div>

            {/* Navigation dots */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '3rem'
            }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: currentTestimonial === index ? '40px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: currentTestimonial === index ? 'var(--primary-color)' : 'rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (currentTestimonial !== index) {
                      e.target.style.background = 'rgba(56, 178, 172, 0.5)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentTestimonial !== index) {
                      e.target.style.background = 'rgba(0, 0, 0, 0.2)'
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
