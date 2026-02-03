import React from 'react';
import { ShieldCheck, TrendingUp, Smartphone, Clock } from 'lucide-react';

const BenefitItem = ({ icon: Icon, title, description }) => (
  <div style={{ 
    padding: '2rem', 
    backgroundColor: 'white', 
    borderRadius: '12px', 
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }}>
    <div style={{ 
      backgroundColor: 'var(--bg-light)', 
      padding: '1rem', 
      borderRadius: '50%', 
      marginBottom: '1.5rem',
      color: 'var(--primary-color)'
    }}>
      <Icon size={32} />
    </div>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{title}</h3>
    <p style={{ margin: 0, fontSize: '1rem' }}>{description}</p>
  </div>
);

const Benefits = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <h2 className="section-title">Tại sao bạn cần Website ngay bây giờ?</h2>
        <p className="section-subtitle">
          Kinh doanh truyền thống đang thay đổi. Đừng để đối thủ vượt qua chỉ vì bạn chưa có mặt trên Internet.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <BenefitItem 
            icon={ShieldCheck}
            title="Tăng uy tín thương hiệu"
            description="Khách hàng tin tưởng hơn khi tìm thấy thông tin rõ ràng, địa chỉ và hình ảnh chuyên nghiệp của bạn trên Google."
          />
          <BenefitItem 
            icon={TrendingUp}
            title="Tiếp cận khách hàng mới"
            description="Mở rộng tệp khách hàng không chỉ ở khu vực xung quanh mà con từ khắp nơi trên internet."
          />
          <BenefitItem 
            icon={Smartphone}
            title="Hoạt động trên mọi thiết bị"
            description="Website được thiết kế tối ưu cho điện thoại, nơi 90% khách hàng của bạn đang sử dụng hàng ngày."
          />
          <BenefitItem 
            icon={Clock}
            title="Cửa hàng online 24/7"
            description="Website hoạt động ngay cả khi bạn ngủ, giúp khách hàng xem sản phẩm và liên hệ bất cứ lúc nào."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
