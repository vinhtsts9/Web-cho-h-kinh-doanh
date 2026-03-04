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
    <section className="section" id="process">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', lg: 'row', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Quy trình triển khai chuyên nghiệp</h2>
            <p style={{ marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '500px' }}>
              Quy trình 6 bước rõ ràng, bạn nắm được từng giai đoạn. Như vậy cả hai bên đều an tâm được cập nhật tiến độ.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Step 
                number="1" 
                title="Bạn cung cấp thông tin" 
                description="Gửi thông tin doanh nghiệp, hình ảnh, nội dung, yêu cầu đặc biệt của bạn cho chúng tôi." 
              />
              <Step 
                number="2" 
                title="Chúng tôi xác nhận & báo giá" 
                description="Xác nhận scope công việc, deadline, giá tiền. Gửi hợp đồng qua email để bạn xác nhận." 
              />
              <Step 
                number="3" 
                title="Chúng tôi bắt đầu làm việc" 
                description="Thiết kế & phát triển website theo yêu cầu. Duy trì liên lạc thường xuyên với bạn." 
              />
              <Step 
                number="4" 
                title="Gửi review & nhận feedback" 
                description="Gửi website preview để bạn kiểm tra. Ghi nhận ý kiến sửa chữa từ bạn (nếu có)." 
              />
              <Step 
                number="5" 
                title="Sửa chữa & hoàn thiện" 
                description="Thực hiện các sửa chữa theo feedback. Sau khi có góp ý, chúng tôi sửa và gửi lại." 
              />
              <Step 
                number="6" 
                title="Bàn giao & hoàn tất" 
                description="Website hoàn thành. Bàn giao toàn bộ file, hướng dẫn sử dụng và hỗ trợ kỹ thuật." 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
