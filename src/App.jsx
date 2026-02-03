import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingContact from './components/FloatingContact';
import Home from './pages/Home';
import ThemeStore from './pages/ThemeStore';

// Simple placeholder pages for links not yet built to prevent 404s
const PricingPage = () => <div style={{ paddingTop: '100px', textAlign: 'center', height: '60vh' }}><h1>Bảng Giá Chi Tiết</h1><p>Đang cập nhật...</p></div>;
const ProcessPage = () => <div style={{ paddingTop: '100px', textAlign: 'center', height: '60vh' }}><h1>Quy Trình Làm Việc</h1><p>Đang cập nhật...</p></div>;
const NewsPage = () => <div style={{ paddingTop: '100px', textAlign: 'center', height: '60vh' }}><h1>Tin Tức & Blog</h1><p>Đang cập nhật...</p></div>;
const ContactPage = () => <div style={{ paddingTop: '100px', textAlign: 'center', height: '60vh' }}><h1>Liên Hệ Tư Vấn</h1><p>Đang cập nhật...</p></div>;

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kho-giao-dien" element={<ThemeStore />} />
            <Route path="/bang-gia" element={<PricingPage />} />
            <Route path="/quy-trinh" element={<ProcessPage />} />
            <Route path="/tin-tuc" element={<NewsPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
