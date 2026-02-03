import React from 'react';
import { Facebook, MapPin, Mail, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--secondary-color)', color: '#e2e8f0', paddingTop: '5rem', fontSize: '0.95rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Cột 1: Thông tin công ty */}
          <div>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              WEB HỘ KD
            </h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#cbd5e1' }}>
              Đơn vị hàng đầu chuyên cung cấp giải pháp website trọn gói, tiết kiệm và hiệu quả cho hộ kinh doanh, cá nhân và doanh nghiệp nhỏ tại Việt Nam.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Facebook size={18} /></div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Globe size={18} /></div>
            </div>
          </div>

          {/* Cột 2: Liên hệ */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>THÔNG TIN LIÊN HỆ</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--primary-color)" style={{ marginTop: '2px' }} />
                <span>Tầng 5, Tòa nhà TechTower, Quận Cầu Giấy, Hà Nội</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={20} color="var(--primary-color)" />
                <a href="tel:0343673555" style={{ fontWeight: '600', color: 'white' }}>0343.673.555</a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={20} color="var(--primary-color)" />
                <a href="mailto:contact@webhokinhdoanh.vn">contact@webhokinhdoanh.vn</a>
              </div>
            </div>
          </div>

          {/* Cột 3: Dịch vụ */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>DỊCH VỤ</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/kho-giao-dien">Thiết kế Web Bán hàng</Link></li>
              <li><Link to="/kho-giao-dien">Thiết kế Web Giới thiệu</Link></li>
              <li><Link to="/kho-giao-dien">Thiết kế Web Bất động sản</Link></li>
              <li><Link to="/bang-gia">Đăng ký Tên miền</Link></li>
              <li><Link to="/bang-gia">Cho thuê Hosting</Link></li>
              <li><Link to="/tin-tuc">Quảng cáo Google Ads</Link></li>
            </ul>
          </div>

          {/* Cột 4: Chính sách */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>CHÍNH SÁCH</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo hành</a></li>
              <li><a href="#">Hình thức thanh toán</a></li>
              <li><a href="#">Quy định đổi trả</a></li>
            </ul>
          </div>
        </div>

        <div style={{ paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
          <p>&copy; 2024 Bản quyền thuộc về Web Hộ Kinh Doanh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
