import React from "react";
import { Check, X } from "lucide-react";

const PricingCard = ({ title, price, features, isPopular, delay }) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "1.2rem",
      boxShadow: isPopular
        ? "0 20px 40px rgba(0,78,146,0.15)"
        : "0 10px 20px rgba(0,0,0,0.05)",
      border: isPopular ? "2px solid var(--primary-color)" : "1px solid #eee",
      position: "relative",
      transform: isPopular ? "scale(1.05)" : "scale(1)",
      zIndex: isPopular ? 2 : 1,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      transition: "transform 0.3s ease",
    }}
    className="pricing-card"
  >
    {isPopular && (
      <div
        style={{
          position: "absolute",
          top: "-12px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#FF9800",
          color: "white",
          padding: "0.25rem 1rem",
          borderRadius: "20px",
          fontSize: "0.8rem",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        ĐƯỢC CHỌN NHIỀU NHẤT
      </div>
    )}

    <h3
      style={{
        fontSize: "1.1rem",
        marginBottom: "0.3rem",
        color: isPopular ? "var(--primary-color)" : "inherit",
        fontWeight: "600",
      }}
    >
      {title}
    </h3>
    <div style={{ marginBottom: "1.2rem" }}>
      <span
        style={{
          fontSize: "1.6rem",
          fontWeight: "800",
          color: "var(--secondary-color)",
        }}
      >
        {price}
      </span>
      <span style={{ color: "var(--text-light)" }}></span>
    </div>

    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        marginBottom: "1.2rem",
      }}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          {feature.included ? (
            <div
              style={{
                backgroundColor: "#e6f0fa",
                padding: "2px",
                borderRadius: "50%",
                color: "var(--primary-color)",
                minWidth: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Check size={12} strokeWidth={3} />
            </div>
          ) : (
            <div
              style={{
                padding: "2px",
                color: "#ccc",
                minWidth: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={12} />
            </div>
          )}
          <span
            style={{
              fontSize: "0.80rem",
              color: feature.included ? "inherit" : "#ccc",
              textDecoration: feature.included ? "none" : "line-through",
              lineHeight: "1.3",
            }}
          >
            {feature.text}
          </span>
        </div>
      ))}
    </div>

    <a
      href="#contact"
      className={isPopular ? "btn btn-primary" : "btn btn-outline"}
      style={{ width: "100%", textAlign: "center" }}
    >
      Chọn Gói Này
    </a>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Landing Page",
      price: "1.490k - 2.490k",
      features: [
        { text: "Giao diện đẹp sẵn có", included: true },
        { text: "Tặng Tên miền (1 năm)", included: true },
        { text: "SSL Bảo mật miễn phí", included: true },
        { text: "Tối ưu hiển thị di động", included: true },
        { text: "Hỗ trợ nhập sản phẩm/bài viết", included: true },
        { text: "Tối ưu SEO", included: true },
        { text: "Tích hợp Google Map, Zalo,Facebook", included: true },
        { text: "Hosting tốc độ cao", included: false },
        { text: "Tính năng quản trị trang web", included: false },
        {
          text: "Tính năng xem sản phẩm, giỏ hàng, thanh toán",
          included: false,
        },
        { text: "Tính năng nâng cao (Booking, CRM..)", included: false },
        { text: "Tích hợp AI (chat bot ,luồng tự động,...)", included: false },
      ],
    },
    {
      title: "Website/App Bán hàng,Quản lý",
      price: "3.490k-8.990k",
      isPopular: true,
      features: [
        { text: "Giao diện đẹp sẵn có", included: true },
        { text: "Tặng Tên miền (1 năm)", included: true },
        { text: "SSL Bảo mật miễn phí", included: true },
        { text: "Tối ưu hiển thị di động", included: true },
        { text: "Hỗ trợ nhập sản phẩm/bài viết", included: true },
        { text: "Tối ưu SEO", included: true },
        { text: "Tích hợp Google Map, Zalo,Facebook", included: true },
        { text: "Hosting tốc độ cao(1 năm)", included: true },
        { text: "Tính năng quản trị trang web", included: true },
        {
          text: "Tính năng xem sản phẩm, giỏ hàng, thanh toán",
          included: true,
        },
        { text: "Tính năng nâng cao (Booking, CRM..)", included: false },
        { text: "Tích hợp AI (chat bot ,luồng tự động,...)", included: false },
      ],
    },
    {
      title: "Thiết Kế Riêng",
      price: "Liên hệ",
      features: [
        { text: "Giao diện đẹp sẵn có", included: true },
        { text: "Tặng Tên miền (1 năm)", included: true },
        { text: "SSL Bảo mật miễn phí", included: true },
        { text: "Tối ưu hiển thị di động", included: true },
        { text: "Hỗ trợ nhập sản phẩm/bài viết", included: true },
        { text: "Tối ưu SEO", included: true },
        { text: "Tích hợp Google Map, Zalo,Facebook", included: true },
        { text: "Hosting tốc độ cao", included: true },
        { text: "Tính năng quản trị trang web", included: true },
        {
          text: "Tính năng xem sản phẩm, giỏ hàng, thanh toán",
          included: true,
        },
        { text: "Tính năng nâng cao (Booking, CRM..)", included: true },
        { text: "Tích hợp AI (chat bot ,luồng tự động,...)", included: true },
      ],
    },
    {
      title: "Tool tự động hóa",
      price: "Liên hệ",
      features: [
        { text: "Chạy tự động theo giờ cài đặt", included: true },
        {
          text: "Kết nối đa nền tảng(Fb, Zalo, Google Sheet,...)",
          included: true,
        },
        { text: "Ứng dụng AI thông minh", included: true },
        { text: "Theo dõi & ghi nhận toàn bộ hoạt động", included: true },
        { text: "Linh hoạt mở rộng", included: true },
        { text: "Tiết kiệm chi phí", included: true },
        { text: "Kiểm soát & bảo mật dữ liệu", included: true },
      ],
    },
  ];

  return (
    <section
      id="bang-gia"
      className="section"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="container">
        <h2 className="section-title">Bảng Giá Dịch Vụ Trọn Gói</h2>
        <p className="section-subtitle">
          Chi phí minh bạch, không phát sinh. Phù hợp cho mọi quy mô kinh doanh
          từ nhỏ đến lớn.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            alignItems: "stretch",
            marginTop: "3rem",
            paddingBottom: "2rem",
          }}
        >
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "#e6f0fa",
            borderRadius: "12px",
            color: "var(--primary-color)",
          }}
        >
          <p style={{ margin: 0, fontWeight: "600", color: "inherit" }}>
            🎉 Cam kết hoàn tiền 100% nếu không hài lòng với bản thiết kế Demo
            đầu tiên!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
