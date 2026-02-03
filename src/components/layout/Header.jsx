import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Kho Giao Diện', path: '/kho-giao-dien' },
    { name: 'Bảng Giá', path: '/bang-gia' },
    { name: 'Quy Trình', path: '/quy-trinh' },
    { name: 'Tin Tức', path: '/tin-tuc' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease',
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      color: isScrolled || location.pathname !== '/' ? 'var(--text-color)' : 'var(--text-color)' // Always dark text for safety unless on dark hero
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--primary-color)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>W</div>
          WEB HỘ KD
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              style={{
                fontWeight: '600',
                fontSize: '0.95rem',
                color: location.pathname === link.path ? 'var(--primary-color)' : 'inherit',
                position: 'relative'
              }}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-actions">
           <a href="tel:0343673555" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
             <Phone size={18} fill="currentColor" />
             0343.673.555
           </a>
           <Link to="/lien-he" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
             Tư Vấn Ngay
           </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ display: 'block', background: 'none', padding: '0.5rem', cursor: 'pointer' }}
          className="mobile-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          padding: '2rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: '600', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/lien-he" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Liên Hệ Tư Vấn
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--primary-color) !important; }
      `}</style>
    </header>
  );
};

export default Header;
