import React from 'react';

function ShopThoiTrangLinh() {
  return (
    <div className="shop-thoi-trang-linh" style={{ paddingTop: '0' }}>
      <iframe
        src="/templates/shop-thoi-trang-linh/index.html"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          marginTop: '-80px',
          paddingTop: '80px',
          boxSizing: 'border-box'
        }}
        title="Shop Thời Trang Linh"
      />
    </div>
  );
}

export default ShopThoiTrangLinh;
