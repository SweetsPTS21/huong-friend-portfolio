import React, { useState } from 'react';
import { Sidebar, AboutPage, ProjectsPage, ConclusionPage } from './components';

// Main App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="lg:ml-64 p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'about' && <AboutPage />}
          {activeTab === 'projects' && <ProjectsPage />}
          {activeTab === 'conclusion' && <ConclusionPage />}
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
