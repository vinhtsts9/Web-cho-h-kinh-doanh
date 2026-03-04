import React, { useState, useEffect } from 'react';
import PreviewModal from './PreviewModal';

const DemoCard = ({ template, onViewDemo }) => (
  <div style={{ 
    borderRadius: '12px', 
    overflow: 'hidden', 
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
    backgroundColor: 'white',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  }}
  onClick={() => onViewDemo(template)}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    {/* Preview Image or Color */}
    <div style={{ 
      height: '200px', 
      backgroundColor: template.image?.startsWith('#') ? template.image : '#f3f4f6',
      position: 'relative',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      backgroundImage: !template.image?.startsWith('#') ? `url(${template.image})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden'
    }}>
      {/* Overlay wenn für bessere Lesbarkeit */}
      {template.image?.startsWith('/') && (
        <div style={{ 
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ color: 'white', textAlign: 'center', fontSize: '0.9rem' }}>
            Click để xem demo
          </div>
        </div>
      )}
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
        {template.category}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{template.name}</h3>
      <a href="#" onClick={(e) => { e.preventDefault(); onViewDemo(template); }} style={{ color: 'var(--accent-color)', fontWeight: '500', fontSize: '0.9rem' }}>Xem chi tiết &rarr;</a>
    </div>
  </div>
);

const DemoCards = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load templates from JSON
    fetch('/templates.json')
      .then(response => response.json())
      .then(data => {
        setTemplates(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading templates:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section id="kho-giao-dien" className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Kho Giao Diện Mẫu</h2>
          <p className="section-subtitle">
            Chọn mẫu phù hợp với ngành nghề của bạn. Tất cả đều được tối ưu cho trải nghiệm người dùng tốt nhất.
          </p>
          
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <p>Đang tải templates...</p>
            </div>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {templates.map((template) => (
                <DemoCard 
                  key={template.id} 
                  template={template} 
                  onViewDemo={setSelectedTemplate}
                />
              ))}
            </div>
          )}
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-outline">Xem tất cả kho giao diện</button>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {selectedTemplate && (
        <PreviewModal 
          theme={selectedTemplate} 
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </>
  );
};

export default DemoCards;
