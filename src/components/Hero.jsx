import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" style={{ 
      background: 'linear-gradient(135deg, var(--bg-light) 0%, #ffffff 100%)',
      padding: '6rem 0 4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ 
            backgroundColor: '#e6f0fa', 
            color: 'var(--primary-color)', 
            padding: '0.5rem 1rem', 
            borderRadius: '20px', 
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            display: 'inline-block'
          }}>
            Giải pháp Web cho Hộ Kinh Doanh & Cá Nhân
          </span>
          
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2', maxWidth: '800px', marginBottom: '1.5rem' }}>
            Xây dựng uy tín và tăng doanh thu với Website chuyên nghiệp
          </h1>
          
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
            Không cần biết kỹ thuật. Chúng tôi lo trọn gói từ thiết kế, nội dung đến vận hành. Giá cả phù hợp cho quy mô nhỏ.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Nhận tư vấn miễn phí
            </a>
            <a href="#demo" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Xem mẫu Website
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'rgba(0, 123, 255, 0.05)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>
    </section>
  );
};

export default Hero;
