# Package 2 Ecommerce - Integration Guide

## 🎯 Mục Đích

Hướng dẫn tích hợp nền tảng ecommerce Package 2 cho Shop Thời Trang Linh vào hệ thống chính của WebHộKinhDoanh.vn

## 📐 Kiến Trúc Hệ Thống

```
WebHộKinhDoanh.vn (Main Site)
├── / (Home)
├── /kho-giao-dien (Package 1 - Demo Landing Pages)
├── /goi-2-shop-thoi-trang-linh (Package 2 - Full Ecommerce) ← NEW
├── /bang-gia (Pricing)
├── /quy-trinh (Process)
├── /tin-tuc (News)
└── /lien-he (Contact)
```

## 🔗 Cách Truy Cập Package 2

### Từ Trang Chủ
Thêm button trong DemoCards hoặc menu:
```jsx
<a href="/goi-2-shop-thoi-trang-linh" className="btn btn-primary">
  Xem Gói 2 - Shop Thời Trang Linh
</a>
```

### URL Trực Tiếp
`http://localhost:5173/goi-2-shop-thoi-trang-linh`

## 📱 Các Component Chính

### 1. **ShopThoiTrangLinh** (`src/pages/ShopThoiTrangLinh/index.jsx`)
- **Chức năng:** Main container quản lý toàn bộ logic
- **State management:** Cart, filters, selectedProduct, checkout
- **Render:** Header + SearchAndFilter + ProductGrid + Footer

```jsx
import ShopThoiTrangLinh from './pages/ShopThoiTrangLinh';

// Trong App.jsx Router
<Route path="/goi-2-shop-thoi-trang-linh" element={<ShopThoiTrangLinh />} />
```

### 2. **ProductCard** (`components/ProductCard.jsx`)
- **Props:** `product`, `onAddToCart`, `onViewDetail`
- **Events:** Click để xem chi tiết, thêm vào giỏ
- **Render:** Card 1 sản phẩm với giá giảm, rating, colors preview

### 3. **ProductDetail** (`components/ProductDetail.jsx`)
- **Props:** `product`, `onClose`, `onAddToCart`
- **Features:** Chọn màu, size, số lượng, xem lợi ích sản phẩm
- **Return:** Product object + customization data

### 4. **SearchAndFilter** (`components/SearchAndFilter.jsx`)
- **Props:** `onFilterChange`, `onSearch`
- **Filters:** Category, PriceRange, SortBy
- **Responsive:** Desktop sidebar + Mobile toggle

### 5. **Cart** (`components/Cart.jsx`)
- **Props:** `items`, `onRemove`, `onUpdateQuantity`, `onCheckout`, `isOpen`, `onClose`
- **Storage:** localStorage auto-sync
- **Calc:** Tạm tính + Vận chuyển + Tổng

### 6. **Checkout** (`components/Checkout.jsx`)
- **Props:** `items`, `total`, `onClose`, `onConfirm`
- **Form:** Tên, email, phone, address, shipping info
- **Success:** Confirmation page sau khi submit

## 🧠 State Flow

```
ShopThoiTrangLinh (main component)
├─ selectedProduct (ProductDetail modal)
├─ cartItems (Cart drawer + localStorage)
├─ isCartOpen (Cart visibility)
├─ isCheckoutOpen (Checkout modal visibility)
├─ searchTerm (Search input)
└─ filters (Category, Price, Sort)

Derived State:
├─ filteredProducts (useMemo từ products + filters + searchTerm)
├─ cartTotal (sum của tất cả items)
└─ shippingCost (based on cartTotal)
```

## 💾 localStorage Integration

**Key:** `cart_thoitranglinh`  
**Usage:** Auto-save/load cart items giữa page refreshes

```javascript
// Automatic save (useEffect)
useEffect(() => {
  localStorage.setItem('cart_thoitranglinh', JSON.stringify(cartItems));
}, [cartItems]);

// Get existing cart on mount
const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem('cart_thoitranglinh');
  return saved ? JSON.parse(saved) : [];
});
```

## 📊 Data Flow

```
User Input (search/filter)
↓
SearchAndFilter Component
↓
onFilterChange callback
↓
setFilters in ShopThoiTrangLinh
↓
useMemo recalculates filteredProducts
↓
Re-render ProductGrid with filtered data
```

```
User clicks "Thêm Vào Giỏ"
↓
ProductCard → onAddToCart callback
↓
handleAddToCart in ShopThoiTrangLinh
↓
setCartItems (new/updated item)
↓
useEffect syncs to localStorage
↓
Cart component auto-updates badge count
```

```
User clicks "Tiến Hành Thanh Toán"
↓
Cart drawer closes, Checkout modal opens
↓
User fills form + selects payment method
↓
"Xác Nhận Đặt Hàng" button
↓
handleCheckout callback
↓
Show success page
↓
cartItems cleared
```

## 🎨 Styling & Customization

### Tailwind Classes Used
- Grid layouts (grid-cols-1, sm:grid-cols-2, lg:grid-cols-3, xl:grid-cols-4)
- Responsive padding (p-4, md:p-6)
- Hover effects (hover:scale-110, hover:bg-gray-100)
- Conditional classes for active states

### Colors
```css
Primary Blue: bg-blue-600, border-blue-600, text-blue-600
Success Green: bg-green-600, text-green-600
Alert Red: bg-red-500, text-red-600
Neutral Gray: bg-gray-50/100/300/400, text-gray-600
```

### Fonts & Typography
- Headings: font-bold, text-xl/2xl/3xl
- Body: text-sm/base
- Emphasis: font-semibold (heavy weight)

## 🚀 Deployment

### Build
```bash
npm run build
```
Output → `dist/` folder

### Environment Variables
Không cần thiết cho demo, nhưng prepare cho future:
- `VITE_API_URL` (future backend)
- `VITE_PAYMENT_KEY` (future payment gateway)

## 🔄 Mock Data → Real Backend

**Current:** `src/pages/ShopThoiTrangLinh/data.js`

**To convert to API:**
```javascript
// Replace in index.jsx
import { products } from './data'; // Current

// With API call
useEffect(() => {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);
```

## 🐛 Common Issues & Fixes

### Cart not persisting
**Issue:** localStorage disabled  
**Fix:** Check browser localStorage is enabled

### Products not showing
**Issue:** Import path wrong  
**Fix:** Verify path → `./data` or `../data` based on file location

### Modal not showing
**Issue:** z-index conflict  
**Fix:** All modals use z-50, check CSS hierarchy

### Tailwind classes not applied
**Issue:** PurgeCSS excluded files  
**Fix:** Ensure `src/pages/**/*.jsx` in tailwind.config.js

## 📈 Performance Optimization

### Already Implemented
- [x] useMemo for filtered products
- [x] localhost storage (no API calls)
- [x] Lazy component rendering
- [x] Event delegation on lists

### Future Improvements
- [ ] Image lazy loading
- [ ] Pagination for product list
- [ ] API caching strategy
- [ ] Virtual scrolling for large lists

## 🔐 Security Considerations

### Current
- No authentication needed (demo)
- No sensitive data stored
- localStorage is public (demo only)

### Production Checklist
- [ ] Add user authentication
- [ ] Encrypt payment data
- [ ] Validate form input server-side
- [ ] Protect API endpoints
- [ ] HTTPS everywhere

## 📝 To-Do tracking

**Implemented ✅**
- Cart system with localStorage
- Product filtering + search
- Checkout form
- Responsive design
- Success confirmation

**Ready for Future ⏳**
- Admin dashboard
- Payment gateway integration
- Email confirmations
- User accounts
- Product reviews

## 📞 Support

For issues or questions:
1. Check this guide first
2. Review `SHOP-THOI-TRANG-LINH-README.md`
3. Debug using React DevTools
4. Check console for errors
5. Contact: dev@webhokinhdoanh.vn

---

**Last Updated:** 2024  
**Status:** Production Ready  
**Package:** 2.0 - Ecommerce
