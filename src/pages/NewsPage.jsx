import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      category: 'AI',
      title: 'ChatGPT 5.0 công bố khả năng xử lý văn bản và hình ảnh siêu nhanh',
      excerpt: 'OpenAI vừa công bố phiên bản mới của ChatGPT với tốc độ xử lý được cải thiện 300%, hỗ trợ xử lý đồng thời cả text và image với độ chính xác cao hơn.',
      image: 'https://via.placeholder.com/600x400?text=ChatGPT+5.0',
      author: 'Nguyễn Tuấn Anh',
      date: '25 Tháng 2, 2026',
      readTime: '5 phút',
      content: 'ChatGPT 5.0 đem lại những cải thiện đối với tốc độ xử lý dữ liệu, giúp các nhà phát triển tích hợp AI vào ứng dụng của họ được dễ dàng hơn. Công nghệ này đã được kiểm nghiệm bởi hàng nghìn công ty công nghệ lớn trên thế giới.'
    },
    {
      id: 2,
      category: 'Công nghệ',
      title: 'Google ra mắt chip Tensor TPU G7 - vượt trội về hiệu năng xử lý AI',
      excerpt: 'Chip mới có hiệu suất gấp 5 lần so với thế hệ trước, giúp giảm chi phí huấn luyện mô hình Machine Learning đến 40%.',
      image: 'https://via.placeholder.com/600x400?text=Google+Tensor+TPU',
      author: 'Trần Minh Khôi',
      date: '24 Tháng 2, 2026',
      readTime: '4 phút',
      content: 'Google đã công bố chip Tensor TPU G7 tại hội nghị kỹ thuật quốc tế, với các cải tiến về kiến trúc xử lý AI. Chip này sẽ giúp các trung tâm dữ liệu giảm chi phí năng lượng một cách đáng kể.'
    },
    {
      id: 3,
      category: 'AI',
      title: 'Microsoft Copilot mở rộng tích hợp vào tất cả ứng dụng Office 365',
      excerpt: 'Hơn 500 triệu người dùng Office sẽ có quyền truy cập vào Copilot, giúp tự động hóa các công việc hàng ngày trong Excel, Word, PowerPoint.',
      image: 'https://via.placeholder.com/600x400?text=Microsoft+Copilot',
      author: 'Lê Hoàng Tú',
      date: '23 Tháng 2, 2026',
      readTime: '6 phút',
      content: 'Microsoft đứng đầu trong cuộc đua cung cấp giải pháp AI cho doanh nghiệp. Copilot sẽ tích hợp sâu trong các ứng dụng văn phòng, giúp công nhân biên chế nâng cao năng suất lao động.'
    },
    {
      id: 4,
      category: 'Công nghệ',
      title: 'Meta công bố dự án Llama 3 - Big Language Model cạnh tranh với GPT',
      excerpt: 'Llama 3 sẽ mã nguồn mở, cho phép các startups xây dựng ứng dụng AI mà không phải trả phí cao cho các nền tảng thương mại.',
      image: 'https://via.placeholder.com/600x400?text=Meta+Llama+3',
      author: 'Phạm Văn Quyền',
      date: '22 Tháng 2, 2026',
      readTime: '7 phút',
      content: 'Meta tiếp tục chiến lược mã nguồn mở với Llama 3, giúp dân chủ hóa công nghệ AI. Dự án này nhận được hỗ trợ từ các nhà phát triển trên toàn thế giới.'
    },
    {
      id: 5,
      category: 'AI',
      title: 'Các công ty Việt tăng 60% đầu tư vào AI trong năm 2026',
      excerpt: 'Báo cáo mới từ Bộ Thông tin và Truyền thông cho thấy doanh nghiệp Việt đang tích cực áp dụng công nghệ AI để nâng cao cạnh tranh.',
      image: 'https://via.placeholder.com/600x400?text=Vietnam+AI+Investment',
      author: 'Hoàng Thu Hương',
      date: '21 Tháng 2, 2026',
      readTime: '5 phút',
      content: 'Việt Nam đang bước vào thời kỳ vàng quan của ứng dụng công nghệ AI. Các công ty khởi nghiệp cũng như doanh nghiệp lớn đều tăng cường đầu tư vào lĩnh vực này.'
    },
    {
      id: 6,
      category: 'Công nghệ',
      title: 'AWS Lambda 2.0 giảm 50% chi phí chạy serverless application',
      excerpt: 'Amazon Web Services công bố bản cập nhật Lambda với hiệu suất cao hơn và giá thành cạnh tranh hơn, hóa giải áp lực chi phí cho startup.',
      image: 'https://via.placeholder.com/600x400?text=AWS+Lambda+2.0',
      author: 'Võ Thế Hùng',
      date: '20 Tháng 2, 2026',
      readTime: '4 phút',
      content: 'AWS cập nhật Lambda runtime với tối ưu hóa hiệu năng. Các nhà phát triển sẽ tiết kiệm chi phí hạ tầng tính toán đáng kể.'
    },
  ];

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'AI', label: 'AI' },
    { id: 'Công nghệ', label: 'Công nghệ' },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <section style={{ 
        backgroundColor: 'var(--primary-color)', 
        color: 'white', 
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Tin Tức & Blog
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Cập nhật những tin tức mới nhất về AI, Công nghệ thông tin và chuyển đổi số doanh nghiệp
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section style={{ padding: '2rem', backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr auto',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            {/* Search Box */}
            <div style={{ position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#999' }} size={20} />
              <input
                type="text"
                placeholder="Tìm kiếm tin tức..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
          </div>

          {/* Categories */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.25rem',
                  border: selectedCategory === cat.id ? 'none' : '2px solid #e0e0e0',
                  backgroundColor: selectedCategory === cat.id ? 'var(--primary-color)' : 'white',
                  color: selectedCategory === cat.id ? 'white' : '#333',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s',
                  fontSize: '0.95rem'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: '3rem 2rem' }}>
        <div className="container">
          {filteredArticles.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {filteredArticles.map(article => (
                <article
                  key={article.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Image */}
                  <div style={{
                    height: '200px',
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: article.category === 'AI' ? 'var(--primary-color)' : '#4CAF50',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      marginBottom: '0.75rem',
                      lineHeight: '1.4',
                      color: '#222'
                    }}>
                      {article.title}
                    </h3>

                    <p style={{
                      fontSize: '0.95rem',
                      color: '#666',
                      marginBottom: '1rem',
                      lineHeight: '1.6'
                    }}>
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div style={{
                      display: 'flex',
                      gap: '1.5rem',
                      fontSize: '0.85rem',
                      color: '#999',
                      marginBottom: '1rem',
                      borderTop: '1px solid #eee',
                      paddingTop: '1rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <span>{article.readTime} đọc</span>
                    </div>

                    {/* Read More Button */}
                    <button style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d63384'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
                    >
                      Đọc tiếp
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              backgroundColor: 'white',
              borderRadius: '12px'
            }}>
              <p style={{ fontSize: '1.1rem', color: '#999' }}>
                Không tìm thấy bài viết nào phù hợp.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>
            Nhận tin mới nhất
          </h2>
          <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
            Đăng ký để nhận những bài viết, tin tức mới nhất về AI và công nghệ thông tin
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#FF9800',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'backgroundColor 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FB8C00'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF9800'}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
