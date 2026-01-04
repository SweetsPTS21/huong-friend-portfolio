import React from 'react';
import { BookOpen, Briefcase, FileText, Menu, X } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
    const navItems = [
        { id: 'about', label: 'Giới thiệu', icon: BookOpen },
        { id: 'projects', label: 'Dự án', icon: Briefcase },
        { id: 'conclusion', label: 'Tổng kết', icon: FileText }
    ];

    const handleNavClick = (id) => {
        setActiveTab(id);
        // Close sidebar on mobile after navigation
        if (window.innerWidth < 1024) {
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/30 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed left-0 top-0 h-screen w-64 
                bg-gradient-to-b from-blue-50 to-indigo-50 
                border-r border-blue-100 shadow-sm z-40
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0
            `}>
                <div className="p-6 pt-16 lg:pt-6">
                    <div className="mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-3 shadow-md">
                            <span className="text-white text-2xl font-bold">LH</span>
                        </div>
                        <h1 className="text-xl font-bold text-gray-800">Lan Hương</h1>
                        <p className="text-sm text-gray-600">Digital Portfolio</p>
                    </div>

                    <nav className="space-y-2">
                        {navItems.map(item => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeTab === item.id
                                        ? 'bg-blue-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-white hover:shadow-sm'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>

                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-100 bg-white/50">
                        <p className="text-xs text-gray-500 text-center">© 2026 Nguyễn Thị Lan Hương</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
