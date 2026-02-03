import React from 'react';

const DemoCard = ({ title, category, color }) => (
  <div style={{ 
    borderRadius: '12px', 
    overflow: 'hidden', 
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
    backgroundColor: 'white',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    {/* CSS-based UI Preview */}
    <div style={{ 
      height: '200px', 
      backgroundColor: '#f3f4f6', 
      position: 'relative',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      {/* Fake Header */}
      <div style={{ height: '12px', width: '100%', backgroundColor: color, borderRadius: '4px', opacity: 0.8 }}></div>
      {/* Fake Hero */}
      <div style={{ height: '80px', width: '100%', backgroundColor: '#e5e7eb', borderRadius: '4px', marginTop: '0.5rem' }}></div>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <div style={{ height: '40px', flex: 1, backgroundColor: '#e5e7eb', borderRadius: '4px' }}></div>
        <div style={{ height: '40px', flex: 1, backgroundColor: '#e5e7eb', borderRadius: '4px' }}></div>
      </div>
    </div>
    
    <div style={{ padding: '1.5rem' }}>
      <div style={{ 
        fontSize: '0.75rem', 
        color: 'var(--primary-color)', 
        textTransform: 'uppercase', 
        letterSpacing: '0.05em',
        fontWeight: '600',
        marginBottom: '0.5rem'
      }}>
        {category}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <a href="#" style={{ color: 'var(--accent-color)', fontWeight: '500', fontSize: '0.9rem' }}>Xem chi tiết &rarr;</a>
    </div>
  </div>
);

const DemoCards = () => {
  return (
    <section id="demo" className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="section-title">Kho Giao Diện Mẫu</h2>
        <p className="section-subtitle">
          Chọn mẫu phù hợp với ngành nghề của bạn. Tất cả đều được tối ưu cho trải nghiệm người dùng tốt nhất.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <DemoCard title="Tiệm Cafe & Ăn Vặt" category="F&B" color="#D2691E" />
          <DemoCard title="Dịch Vụ Sửa Chữa" category="Dịch Vụ" color="#005086" />
          <DemoCard title="Shop Thời Trang" category="Bán Lẻ" color="#E91E63" />
          <DemoCard title="Spa & Làm Đẹp" category="Làm Đẹp" color="#4CAF50" />
          <DemoCard title="Bất Động Sản" category="Tư Vấn" color="#607D8B" />
          <DemoCard title="Giới Thiệu Công Ty" category="Doanh Nghiệp" color="#3F51B5" />
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-outline">Xem tất cả kho giao diện</button>
        </div>
      </div>
    </section>
  );
};

export default DemoCards;
