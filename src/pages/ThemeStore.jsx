import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';

const ThemeStore = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', name: 'Tất cả' },
    { id: 'F&B', name: 'Cafe & Nhà hàng' },
    { id: 'Beauty', name: 'Spa & Làm đẹp' },
    { id: 'Retail', name: 'Bán lẻ & Shop' },
    { id: 'Service', name: 'Dịch vụ' },
    { id: 'Construction', name: 'Xây dựng & Nội thất' }
  ];

  const themes = [
    { id: 1, name: 'Coffee House Luxury', category: 'F&B', image: '#D2691E' },
    { id: 2, name: 'An Nhiên Spa', category: 'Beauty', image: '#4CAF50' },
    { id: 3, name: 'Fashion Modern', category: 'Retail', image: '#E91E63' },
    { id: 4, name: 'Sửa Chữa Nhanh 247', category: 'Service', image: '#005086' },
    { id: 5, name: 'Nhà Đẹp Architects', category: 'Construction', image: '#607D8B' },
    { id: 6, name: 'Tech Store Pro', category: 'Retail', image: '#2196F3' },
    { id: 7, name: 'Healthy Food', category: 'F&B', image: '#8BC34A' },
    { id: 8, name: 'Luật Sư Riêng', category: 'Service', image: '#795548' },
  ];

  const filteredThemes = activeCategory === 'All' 
    ? themes 
    : themes.filter(t => t.category === activeCategory);

  return (
    <div className="page-container" style={{ paddingTop: '80px', paddingBottom: '4rem', backgroundColor: '#f8fafc' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Kho Giao Diện Website Mẫu</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Hơn 500+ mẫu giao diện chuyên nghiệp, chuẩn SEO, tối ưu hiển thị cho mọi ngành nghề kinh doanh.
          </p>
        </div>

        {/* Filter Bar */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '1rem', 
          justifyContent: 'center', 
          marginBottom: '3rem',
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '50px',
                border: activeCategory === cat.id ? 'none' : '1px solid #e2e8f0',
                backgroundColor: activeCategory === cat.id ? 'var(--primary-color)' : 'white',
                color: activeCategory === cat.id ? 'white' : 'var(--text-color)',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Themes Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          {filteredThemes.map(theme => (
            <div key={theme.id} style={{ 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                height: '220px', 
                backgroundColor: '#eee', 
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                 {/* Placeholder for Theme Image */}
                 <div style={{ width: '80%', height: '80%', backgroundColor: theme.image, opacity: 0.2, borderRadius: '8px' }}></div>
                 <div style={{ 
                   position: 'absolute', 
                   bottom: '10px', 
                   right: '10px', 
                   backgroundColor: 'rgba(0,0,0,0.7)', 
                   color: 'white', 
                   padding: '4px 8px', 
                   borderRadius: '4px', 
                   fontSize: '0.8rem' 
                }}>
                   Xem trước
                 </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>{theme.category}</span>
                <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{theme.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>1.490.000đ</span>
                  <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>Chi tiết</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeStore;
