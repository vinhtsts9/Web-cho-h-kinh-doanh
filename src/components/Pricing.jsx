import React from 'react';
import { Check, X } from 'lucide-react';

const PricingCard = ({ title, price, features, isPopular, delay }) => (
  <div style={{ 
    backgroundColor: 'white', 
    borderRadius: '16px', 
    padding: '2rem', 
    boxShadow: isPopular ? '0 20px 40px rgba(0,78,146,0.15)' : '0 10px 20px rgba(0,0,0,0.05)',
    border: isPopular ? '2px solid var(--primary-color)' : '1px solid #eee',
    position: 'relative',
    transform: isPopular ? 'scale(1.05)' : 'scale(1)',
    zIndex: isPopular ? 2 : 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'transform 0.3s ease',
  }}
  className="pricing-card"
  >
    {isPopular && (
      <div style={{ 
        position: 'absolute', 
        top: '-12px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        backgroundColor: '#FF9800', 
        color: 'white', 
        padding: '0.25rem 1rem', 
        borderRadius: '20px', 
        fontSize: '0.8rem', 
        fontWeight: 'bold',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        ĐƯỢC CHỌN NHIỀU NHẤT
      </div>
    )}
    
    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: isPopular ? 'var(--primary-color)' : 'inherit' }}>{title}</h3>
    <div style={{ marginBottom: '2rem' }}>
      <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--secondary-color)' }}>{price}</span>
      <span style={{ color: 'var(--text-light)' }}></span>
    </div>
    
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
      {features.map((feature, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {feature.included ? (
            <div style={{ backgroundColor: '#e6f0fa', padding: '4px', borderRadius: '50%', color: 'var(--primary-color)' }}>
              <Check size={14} strokeWidth={3} />
            </div>
          ) : (
             <div style={{ padding: '4px', color: '#ccc' }}>
              <X size={14} />
            </div>
          )}
          <span style={{ fontSize: '0.95rem', color: feature.included ? 'inherit' : '#ccc', textDecoration: feature.included ? 'none' : 'line-through' }}>
            {feature.text}
          </span>
        </div>
      ))}
    </div>
    
    <a href="#contact" className={isPopular ? "btn btn-primary" : "btn btn-outline"} style={{ width: '100%', textAlign: 'center' }}>
      Chọn Gói Này
    </a>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Cơ Bản",
      price: "1.490k",
      features: [
        { text: "1 Giao diện đẹp sẵn có", included: true },
        { text: "Tặng Tên miền .com (1 năm)", included: true },
        { text: "Hosting 1GB tốc độ cao", included: true },
        { text: "SSL Bảo mật miễn phí", included: true },
        { text: "Tối ưu hiển thị di động", included: true },
        { text: "Hỗ trợ nhập 5 sản phẩm/bài viết", included: true },
        { text: "Tích hợp Chat Zalo/Facebook", included: false },
        { text: "Thiết kế Banner quảng cáo", included: false },
      ]
    },
    {
      title: "Chuyên Nghiệp",
      price: "3.990k",
      isPopular: true,
      features: [
        { text: "Kho giao diện Premium Vip", included: true },
        { text: "Tặng Tên miền .com/.net (1 năm)", included: true },
        { text: "Hosting 3GB không giới hạn", included: true },
        { text: "SSL Bảo mật miễn phí", included: true },
        { text: "Tối ưu SEO Google cơ bản", included: true },
        { text: "Hỗ trợ nhập 30 sản phẩm/bài viết", included: true },
        { text: "Tích hợp Chat, Bản đồ, Form", included: true },
        { text: "Tặng 3 Banner thiết kế riêng", included: true },
      ]
    },
    {
      title: "Thiết Kế Riêng",
      price: "Liên hệ",
      features: [
        { text: "Thiết kế độc quyền theo yêu cầu", included: true },
        { text: "Tên miền Quốc tế tuỳ chọn", included: true },
        { text: "Hosting Doanh nghiệp 5GB", included: true },
        { text: "SSL & Security nâng cao", included: true },
        { text: "Tối ưu SEO tổng thể", included: true },
        { text: "Hỗ trợ nội dung không giới hạn", included: true },
        { text: "Tính năng nâng cao (Booking, CRM..)", included: true },
        { text: "Thiết kế bộ nhận diện thương hiệu", included: true },
      ]
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <h2 className="section-title">Bảng Giá Dịch Vụ Trọn Gói</h2>
        <p className="section-subtitle">
          Chi phí minh bạch, không phát sinh. Phù hợp cho mọi quy mô kinh doanh từ nhỏ đến lớn.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          alignItems: 'center',
          marginTop: '3rem',
          paddingBottom: '2rem' // Spacing for hover effects
        }}>
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        
        <div style={{ 
          marginTop: '3rem', 
          textAlign: 'center', 
          padding: '2rem', 
          backgroundColor: '#e6f0fa', 
          borderRadius: '12px',
          color: 'var(--primary-color)'
        }}>
          <p style={{ margin: 0, fontWeight: '600', color: 'inherit' }}>
            🎉 Cam kết hoàn tiền 100% nếu không hài lòng với bản thiết kế Demo đầu tiên!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
