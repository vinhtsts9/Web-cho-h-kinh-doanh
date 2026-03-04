import React, { useState, useEffect } from 'react';

function ThemeStore() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    // Load templates list from public/templates.json
    fetch('/templates.json')
      .then(res => res.json())
      .then(data => setTemplates(data.templates || []))
      .catch(err => console.error('Error loading templates:', err));
  }, []);

  return (
    <div className="theme-store" style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Kho Giao Diện Website</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.length > 0 ? (
            templates.map((template, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
                  <img 
                    src={template.thumbnail || 'https://via.placeholder.com/400x300'} 
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{template.name}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{template.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={template.preview || `/templates/${template.id}/index.html`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-white py-2 rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                    >
                      Xem Demo
                    </a>
                    <button className="flex-1 border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary/5 transition-all">
                      Chọn
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500">Đang tải danh sách giao diện...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThemeStore;
