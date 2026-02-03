import React, { useState } from 'react';

const ContactCTA = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', job: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm.');
  };

  return (
    <section id="contact" className="section" style={{ 
      background: 'linear-gradient(to right, var(--secondary-color), var(--primary-color))',
      color: 'white',
      padding: '5rem 0'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', // Mobile first default 
          gap: '4rem', 
          alignItems: 'center',
          textAlign: 'center'
        }}>
          
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Sẵn sàng đưa công việc kinh doanh lên Online?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '2rem' }}>
              Để lại thông tin để được tư vấn miễn phí giải pháp phù hợp nhất cho mô hình của bạn.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Hotline: 0912.345.678</p>
              <p>Email: hotro@webhokinhdoanh.vn</p>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: '2rem', 
            borderRadius: '16px', 
            width: '100%',
            maxWidth: '500px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            <h3 style={{ color: 'var(--text-color)', marginBottom: '1.5rem', textAlign: 'center' }}>Đăng ký tư vấn</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input 
                type="text" 
                placeholder="Họ và tên của bạn" 
                required
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '1rem'
                }}
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
              />
              <input 
                type="tel" 
                placeholder="Số điện thoại" 
                required
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '1rem'
                }}
                value={formState.phone}
                onChange={e => setFormState({...formState, phone: e.target.value})}
              />
              <select 
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: '1rem',
                  backgroundColor: 'white'
                }}
                value={formState.job}
                onChange={e => setFormState({...formState, job: e.target.value})}
              >
                <option value="">Bạn đang kinh doanh gì?</option>
                <option value="fb">Cafe / Nhà hàng / Ăn uống</option>
                <option value="retail">Cửa hàng bán lẻ / Shop</option>
                <option value="service">Dịch vụ (Sửa chữa, Làm đẹp...)</option>
                <option value="other">Khác</option>
              </select>
              
              <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>
                Gửi thông tin tư vấn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
