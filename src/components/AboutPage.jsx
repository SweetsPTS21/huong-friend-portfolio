import React from 'react';
import { ChevronRight, Target, Sparkles, GraduationCap } from 'lucide-react';

const AboutPage = () => {
    const skills = [
        {
            title: 'Quản lý và lưu trữ tài liệu khoa học',
            desc: 'Sắp xếp thư mục theo cấu trúc logic, phân loại rõ ràng từng phiên bản tài liệu'
        },
        {
            title: 'Kiểm chứng và đánh giá nguồn thông tin',
            desc: 'Đối chiếu dữ liệu từ nhiều nguồn, xem xét mức độ tin cậy'
        },
        {
            title: 'Khai thác AI có định hướng',
            desc: 'Xây dựng prompt rõ ràng về mục tiêu, phạm vi và yêu cầu cụ thể'
        }
    ];

    const hobbies = [
        { name: 'Chơi cầu lông', icon: '🏸' },
        { name: 'Đọc giáo trình', icon: '📚' },
        { name: 'Xem phim', icon: '🎬' },
        { name: 'Du lịch', icon: '✈️' }
    ];

    const tools = [
        { category: 'Quản lý tệp', items: 'File Explorer, công cụ nén và quản lý phiên bản' },
        { category: 'Nguồn học thuật', items: 'Google Scholar, cơ sở dữ liệu trực tuyến' },
        { category: 'AI hỗ trợ', items: 'ChatGPT, Gemini' },
        { category: 'Thiết kế', items: 'Canva, Midjourney, DALL·E' },
        { category: 'Hợp tác', items: 'Trello, Google Docs, Slack' }
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Header Card */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Nguyễn Thị Lan Hương</h1>
                        <p className="text-blue-100 text-base sm:text-lg mb-2 sm:mb-4">Sinh viên ngành Luật Thương Mại Quốc Tế</p>
                        <p className="text-blue-50 text-sm sm:text-base">Trường Đại học Luật - ĐHQGHN</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 self-start">
                        <p className="text-sm font-medium">Phong cách</p>
                        <p className="text-xs text-blue-100">Gọn • Rõ • Có hệ thống</p>
                    </div>
                </div>
            </div>

            {/* Về Portfolio */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Target className="text-blue-500" />
                    Về Portfolio
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Portfolio được xây dựng theo tiêu chí dễ tiếp cận và dễ nắm bắt nội dung. Mỗi bài đều xác định rõ mục tiêu,
                    trình bày đầy đủ quá trình và kết quả, kèm theo minh chứng để người xem có thể kiểm tra và đối chiếu một cách nhanh chóng.
                </p>
            </div>

            {/* Sở thích */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sở thích</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {hobbies.map((hobby, idx) => (
                        <div key={idx} className="bg-blue-50 rounded-lg p-4 text-center transition-transform hover:scale-105">
                            <div className="text-3xl mb-2">{hobby.icon}</div>
                            <p className="text-sm font-medium text-gray-700">{hobby.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Kỹ năng đang rèn luyện */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <GraduationCap className="text-blue-500" />
                    Kỹ năng đang rèn luyện
                </h2>
                <div className="space-y-4">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                            <h3 className="font-semibold text-gray-800 mb-1">{skill.title}</h3>
                            <p className="text-gray-600 text-sm">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Công cụ sử dụng */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Sparkles className="text-blue-500" />
                    Công cụ và nền tảng
                </h2>
                <div className="grid gap-3">
                    {tools.map((tool, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start">
                            <div className="bg-blue-100 rounded-lg px-3 py-1 text-sm font-semibold text-blue-700 whitespace-nowrap">
                                {tool.category}
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{tool.items}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Nguyên tắc */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Nguyên tắc thực hiện bài tập</h2>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                        <ChevronRight className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                        <span><strong>Ưu tiên trải nghiệm người đọc:</strong> Nội dung mạch lạc, bố cục hợp lý</span>
                    </li>
                    <li className="flex gap-2">
                        <ChevronRight className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                        <span><strong>Minh chứng rõ ràng:</strong> Hình ảnh và tài liệu đảm bảo chất lượng</span>
                    </li>
                    <li className="flex gap-2">
                        <ChevronRight className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                        <span><strong>Sử dụng AI có trách nhiệm:</strong> AI chỉ hỗ trợ tham khảo, không thay thế trách nhiệm</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;
