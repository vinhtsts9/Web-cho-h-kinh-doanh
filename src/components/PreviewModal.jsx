import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const PreviewModal = ({ theme, onClose }) => {
  const [showFullPage, setShowFullPage] = useState(false);

  if (!theme) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem',
        animation: 'fadeIn 0.3s ease-in'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          maxWidth: '1400px',
          width: '100%',
          maxHeight: '95vh',
          overflow: 'auto',
          position: 'relative',
          animation: 'slideUp 0.3s ease-out',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
        >
          <X size={24} />
        </button>

        {/* Landing Page View */}
        {!showFullPage ? (
          <div style={{
            padding: '2rem',
            backgroundColor: '#f8fafc'
          }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {/* Category & Title */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '0.85rem', 
                  color: '#888', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px',
                  backgroundColor: '#e2e8f0',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px'
                }}>
                  {theme.category}
                </span>
              </div>
              
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                {theme.name}
              </h2>
              
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {theme.description || `Giao diện chuyên nghiệp, tối ưu cho ngành ${theme.category}. 
                Responsive hoàn toàn, tích hợp sẵn các tính năng cần thiết, 
                chuẩn SEO và tốc độ tải trang nhanh.`}
              </p>

              {/* Features */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {['✓ Responsive 100%', '✓ Chuẩn SEO', '✓ Tốc độ cao', '✓ Dễ tùy chỉnh'].map((feature, idx) => (
                  <div key={idx} style={{
                    padding: '0.75rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    border: '1px solid #e2e8f0'
                  }}>
                    {feature}
                  </div>
                ))}
              </div>

              {/* View Landing Page Button */}
              {theme.demoUrl && theme.demoUrl !== '#' && (
                <button 
                  style={{ 
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1.1rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                  onClick={() => setShowFullPage(true)}
                >
                  <ExternalLink size={20} />
                  Xem Landing Page Đầy Đủ
                </button>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  style={{ 
                    flex: 1,
                    minWidth: '150px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                  onClick={() => window.open(theme.demoUrl || '#', '_blank')}
                >
                  Mở Tab Mới
                </button>
                
                <button 
                  style={{ 
                    flex: 1,
                    minWidth: '150px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    backgroundColor: 'white',
                    color: '#3b82f6',
                    border: '2px solid #3b82f6',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#eff6ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                >
                  Liên hệ tư vấn
                </button>
              </div>

              {/* Price */}
              <div style={{ 
                marginTop: '2rem', 
                padding: '1.5rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.25rem' }}>Giá trọn gói</p>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>
                    {theme.price || '1.490.000đ'}
                  </p>
                </div>
                <button 
                  style={{ 
                    padding: '0.75rem 2rem',
                    fontSize: '1rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                >
                  Đặt hàng ngay
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Full Page View */}
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '0.5rem 1rem',
              display: 'flex',
              justifyContent: 'flex-start',
              borderBottom: '1px solid #e2e8f0'
            }}>
              <button 
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#f3f4f6',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onClick={() => setShowFullPage(false)}
              >
                ← Quay lại Preview
              </button>
            </div>
            
            <iframe
              src={theme.demoUrl}
              title={theme.name}
              style={{
                width: '100%',
                height: 'calc(95vh - 60px)',
                border: 'none',
                borderRadius: '0',
                display: 'block'
              }}
            />
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PreviewModal;
