import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      zIndex: 1000
    }}>
      {/* Zalo Button */}
      <a 
        href="https://zalo.me/0912345678" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#0068FF',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <span style={{ fontWeight: 'bold', fontSize: '10px' }}>Zalo</span>
      </a>

      {/* Phone Button */}
      <a 
        href="tel:0912345678" 
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#dc3545',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s',
          cursor: 'pointer',
          animation: 'pulse 2s infinite'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Phone size={24} />
      </a>
      
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(220, 53, 69, 0); }
          100% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0); }
        }
      `}</style>
    </div>
  );
};

export default FloatingContact;
