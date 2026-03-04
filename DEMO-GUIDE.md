# 🎨 Hướng Dẫn Tạo Demo Template UI

## 📋 Tổng quan

File này hướng dẫn cách sử dụng các prompts trong `template-prompts.md` để tạo ảnh demo cho các template website.

---

## 🚀 Quy trình tạo demo

### Bước 1: Chọn template cần tạo demo

Mở file `template-prompts.md` và chọn template bạn muốn tạo. Ví dụ:
- Coffee House Luxury
- An Nhiên Spa
- Fashion Modern
- v.v...

### Bước 2: Copy prompt

Copy toàn bộ nội dung trong phần **Prompt** của template đó.

### Bước 3: Generate ảnh bằng Stitch

1. Mở **Stitch** (hoặc công cụ AI image generation khác như Midjourney, DALL-E)
2. Paste prompt vào
3. Click Generate
4. Chờ kết quả (thường 30-60 giây)

### Bước 4: Lưu ảnh

1. Download ảnh đã generate
2. Đổi tên file theo format: `[template-id].jpg` hoặc `.png`
   - Ví dụ: `coffee-house-luxury.jpg`
3. Lưu vào folder: `public/templates/`

### Bước 5: Cập nhật code

Mở file `src/pages/ThemeStore.jsx` và cập nhật đường dẫn ảnh:

```javascript
{
  id: 1,
  name: 'Coffee House Luxury',
  category: 'F&B',
  image: '/templates/coffee-house-luxury.jpg', // ← Cập nhật đường dẫn này
  price: '1.490.000đ',
  demoUrl: 'https://demo.webhokinhdoanh.vn/coffee-house-luxury',
  description: '...'
}
```

### Bước 6: Test

1. Chạy dev server: `npm run dev`
2. Vào trang "Kho Giao Diện"
3. Click vào template vừa cập nhật
4. Kiểm tra ảnh hiển thị đúng trong modal

---

## 📁 Cấu trúc thư mục

```
WebSite/
├── public/
│   └── templates/              ← Lưu ảnh demo vào đây
│       ├── coffee-house-luxury.jpg
│       ├── an-nhien-spa.jpg
│       ├── fashion-modern.jpg
│       └── ...
├── src/
│   ├── components/
│   │   └── PreviewModal.jsx    ← Component hiển thị preview
│   └── pages/
│       └── ThemeStore.jsx      ← Trang danh sách template
└── template-prompts.md         ← File chứa prompts
```

---

## 🎯 Tips để có ảnh đẹp hơn

### 1. Chỉnh sửa prompt nếu cần

Bạn có thể thêm vào cuối prompt:
```
, high quality, 4k, professional web design, modern UI/UX, clean layout
```

### 2. Thử nhiều lần

Nếu kết quả không ưng ý, generate lại với prompt tương tự hoặc điều chỉnh nhẹ.

### 3. Chọn ảnh phù hợp nhất

AI thường generate nhiều variations, chọn cái đẹp và phù hợp nhất.

### 4. Crop/resize nếu cần

- Kích thước khuyến nghị: **1920x1080px** (16:9)
- Format: JPG hoặc PNG
- Dung lượng: < 500KB (để load nhanh)

---

## 🔧 Troubleshooting

### Ảnh không hiển thị?

**Kiểm tra:**
1. ✅ Đường dẫn file đúng chưa? (`/templates/ten-file.jpg`)
2. ✅ File có trong folder `public/templates/` chưa?
3. ✅ Tên file có đúng không? (phân biệt hoa/thường)
4. ✅ Dev server đã restart chưa?

### Ảnh bị vỡ/méo?

**Giải pháp:**
- Resize ảnh về đúng tỷ lệ 16:9
- Dùng tool như Photoshop, Canva, hoặc online image resizer

### Ảnh load chậm?

**Giải pháp:**
- Compress ảnh bằng TinyPNG hoặc Squoosh
- Chuyển sang format WebP (nhẹ hơn)

---

## 📊 Danh sách template cần tạo

- [ ] Coffee House Luxury
- [ ] An Nhiên Spa
- [ ] Fashion Modern
- [ ] Sửa Chữa Nhanh 247
- [ ] Nhà Đẹp Architects
- [ ] Tech Store Pro
- [ ] Healthy Food
- [ ] Luật Sư Riêng
- [ ] Gym & Fitness Center
- [ ] Nhà Hàng Hải Sản
- [ ] Tiệm Bánh Ngọt
- [ ] Trung Tâm Anh Ngữ
- [ ] Cửa Hàng Mỹ Phẩm
- [ ] Garage Ô Tô
- [ ] Studio Chụp Ảnh

**Tổng: 15 templates**

---

## 🎨 Alternative: Dùng ảnh từ internet tạm

Nếu chưa có Stitch, bạn có thể:

1. Tìm ảnh mẫu trên:
   - Dribbble (dribbble.com)
   - Behance (behance.net)
   - Awwwards (awwwards.com)
   - ThemeForest screenshots

2. Download và lưu vào `public/templates/`

3. **Lưu ý:** Chỉ dùng tạm cho demo, cần có ảnh chính thức sau

---

## 📞 Liên hệ

Nếu cần hỗ trợ:
- Email: hotro@webhokinhdoanh.vn
- Hotline: 0343.673.555

---

**Created:** 2026-02-07  
**Last Updated:** 2026-02-07
