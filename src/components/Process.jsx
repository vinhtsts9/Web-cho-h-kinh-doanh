import React from 'react';

const Step = ({ number, title, description }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'flex-start', 
    gap: '1.5rem',
    marginBottom: '2rem'
  }}>
    <div style={{ 
      flexShrink: 0,
      width: '50px', 
      height: '50px', 
      backgroundColor: 'var(--primary-color)', 
      color: 'white',
      borderRadius: '50%',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontWeight: '700'
    }}>
      {number}
    </div>
    <div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ margin: 0, color: 'var(--text-light)' }}>{description}</p>
    </div>
  </div>
);

const Process = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', lg: 'row', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Quy trình triển khai đơn giản</h2>
            <p style={{ marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '500px' }}>
              Chúng tôi tối giản hóa mọi bước để bạn có thể sở hữu website nhanh nhất mà không cần lo lắng về kỹ thuật.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Step 
                number="1" 
                title="Chọn giao diện & Gói dịch vụ" 
                description="Lựa chọn mẫu website ưng ý từ kho giao diện và gói dịch vụ phù hợp với ngân sách." 
              />
              <Step 
                number="2" 
                title="Cung cấp thông tin" 
                description="Gửi cho chúng tôi hình ảnh, nội dung giới thiệu và thông tin liên hệ của bạn." 
              />
              <Step 
                number="3" 
                title="Bàn giao & Hướng dẫn" 
                description="Sau 3-5 ngày, nhận website hoàn chỉnh và được hướng dẫn chi tiết cách sử dụng." 
              />
            </div>
          </div>
          
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
             {/* Simple visual representation of process */}
             <div style={{ 
               width: '100%', 
               maxWidth: '450px',
               height: '400px', 
               backgroundColor: 'var(--bg-light)', 
               borderRadius: '24px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               border: '2px dashed var(--primary-color)'
             }}>
               <div style={{ textAlign: 'center', padding: '2rem' }}>
                 <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>
                   Nhanh Chóng - Tiết Kiệm - Hiệu Quả
                 </p>
                 <p>Cam kết hỗ trợ trọn đời</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
