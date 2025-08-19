import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #8B4513, #D2691E)',
          fontFamily: 'Arial, sans-serif'
        }}>
          <div className="error-content" style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            maxWidth: '500px'
          }}>
            <h2 style={{ color: '#8B4513', marginBottom: '20px' }}>🙏 श्री श्याम की कृपा से</h2>
            <p style={{ color: '#333', marginBottom: '10px' }}>कुछ तकनीकी समस्या आई है। कृपया पेज को रिफ्रेश करें।</p>
            <p style={{ color: '#666', marginBottom: '20px' }}>Something went wrong. Please refresh the page.</p>
            <button 
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 24px',
                background: '#8B4513',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.background = '#A0522D'}
              onMouseOut={(e) => e.target.style.background = '#8B4513'}
            >
              Refresh Page / पेज रिफ्रेश करें
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
