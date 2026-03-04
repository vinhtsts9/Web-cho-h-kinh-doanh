# Hướng Dẫn Quản Lý Template Demo

## 📋 Cấu Trúc Hiện Tại

Hệ thống demo template đã được tích hợp hoàn toàn từ `template_stitch`. Dưới đây là cách nó hoạt động:

### 📂 Thư Mục Chính
```
template_stitch/                    # Nơi bạn tạo template bằng Stitch
├── cafe_nhà hương/
│   ├── code.html                   # Mã HTML của template
│   └── screen.png                  # Ảnh preview

public/templates/                   # Nơi serve file cho web
├── cafe_nhà hương/
│   ├── index.html                  # Copy từ code.html
│   └── screen.png                  # Copy từ template_stitch
```

---

## 🚀 Quy Trình Thêm Template Mới

### Bước 1: Tạo Template Bằng Stitch
1. Vào Stitch UI tạo template mới
2. Export HTML + ảnh preview (`.png`)
3. Tạo thư mục mới trong `template_stitch/` với tên template (VD: `shop-thoi-trang`)

### Bước 2: Đặt File Vào `template_stitch`
```
template_stitch/
└── shop-thoi-trang/
    ├── code.html
    └── screen.png
```

### Bước 3: Copy Vào `public/templates`
Chạy các lệnh này từ terminal:

```powershell
# Tạo thư mục
mkdir "public\templates\shop-thoi-trang"

# Copy ảnh
cp "template_stitch\shop-thoi-trang\screen.png" "public\templates\shop-thoi-trang\screen.png"

# Copy HTML và rename thành index.html
cp "template_stitch\shop-thoi-trang\code.html" "public\templates\shop-thoi-trang\index.html"
```

### Bước 4: Cập Nhật `public/templates.json`

Thêm entry mới vào mảng JSON:

```json
{
  "id": "shop-thoi-trang",
  "name": "Shop Thời Trang",
  "category": "Bán Lẻ",
  "description": "Thiết kế hiện đại cho cửa hàng thời trang, quần áo...",
  "image": "/templates/shop-thoi-trang/screen.png",
  "color": "#E91E63",
  "price": "1.490.000đ",
  "demoUrl": "https://webhokinhdoanh.vn/templates/shop-thoi-trang/index.html",
  "codePath": "template_stitch/shop-thoi-trang/code.html"
}
```

### Bước 5: Kiểm Tra Trên Web
- Trang chủ sẽ tự động load template mới vào section "Kho Giao Diện Mẫu"
- Click vào template để xem preview modal

---

## 📚 Chi Tiết Các Trường Trong `templates.json`

| Trường | Kiểu | Mô Tả |
|--------|------|-------|
| `id` | string | ID duy nhất (dùng `kebab-case`) |
| `name` | string | Tên hiển thị template |
| `category` | string | Danh mục (F&B, Dịch Vụ, Bán Lẻ, v.v.) |
| `description` | string | Mô tả chi tiết (hiển thị trong modal) |
| `image` | string | Đường dẫn ảnh hoặc mã màu hex (VD: `#E91E63`) |
| `color` | string | Mã màu hex cho theme |
| `price` | string | Giá trọn gói (VD: `1.490.000đ`) |
| `demoUrl` | string | URL demo đầy đủ (có thể là external URL hoặc path) |
| `codePath` | string | Đường dẫn đến code.html (nếu có) |

---

## ⚠️ Lưu Ý Quan Trọng

### Đặt Tên Thư Mục
- Sử dụng khoảng trắng hoặc ký tự đặc biệt **trong** `template_stitch` (VD: `cafe_nhà hương`)
- **KHÔNG** sử dụng khoảng trắng hoặc ký tự đặc biệt trong URL (thay bằng dấu gạch dưới hoặc gạch ngang)

### Ảnh Preview
- Nếu muốn dùng **ảnh thực**, upload file `.png` hoặc `.jpg`
- Nếu chưa có ảnh, dùng **mã màu hex** (VD: `"#E91E63"`)
- Kích thước ảnh khuyến nghị: **1200x800px**

### Demo URL
- Nếu template đã có **live demo**, dùng URL đầy đủ (VD: `https://demo.mysite.com`)
- Nếu serve từ **công ty**, dùng relative path (VD: `/templates/shop-thoi-trang/index.html`)

---

## 🎨 Component Code

### DemoCards.jsx
- **Tác dụng**: Hiển thị grid template từ `templates.json`
- **Tự động load**: Không cần chỉnh sửa khi thêm template mới
- **State**: `selectedTemplate` để mở modal

### PreviewModal.jsx
- **Tác dụng**: Hiển thị chi tiết template, ảnh preview
- **Hỗ trợ**: Ảnh (PNG, JPG) hoặc màu hex
- **Nút hành động**: "Xem Demo Trực Tiếp" (mở URL demo)

---

## ✅ Checklist Thêm Template Mới

- [ ] Tạo template bằng Stitch
- [ ] Lưu vào `template_stitch/<tên-template>/` với file `code.html` + `screen.png`
- [ ] Copy vào `public/templates/<tên-template>/`
- [ ] Rename `code.html` → `index.html`
- [ ] Thêm entry vào `public/templates.json`
- [ ] Test trên trang chủ (section "Kho Giao Diện Mẫu")

---

## 🔗 Liên Kết Nhanh

- **Kho template**: `public/templates.json`
- **Component chính**: `src/components/DemoCards.jsx`
- **Modal preview**: `src/components/PreviewModal.jsx`
- **Template source**: `template_stitch/` (tạo bằng Stitch)
- **Template public**: `public/templates/` (serve cho web)

---

## 📞 Hỗ Trợ

Nếu có vấn đề:
1. Kiểm tra lại tên thư mục (không dấu cách, ký tự đặc biệt)
2. So sánh structure với template đã có (`cafe_nhà hương`)
3. Xem console browser để kiểm tra lỗi load JSON
