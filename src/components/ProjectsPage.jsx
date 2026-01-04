import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Bài tập 1 - Chương 1',
            subtitle: 'Máy tính và các thiết bị ngoại vi',
            description: 'Tổng quan về máy tính, các thành phần cơ bản và thiết bị ngoại vi (bàn phím, chuột, máy in…), kèm minh chứng thực hành.',
            color: 'from-blue-400 to-blue-600'
        },
        {
            id: 2,
            title: 'Bài tập 2 - Chương 2',
            subtitle: 'Khai thác dữ liệu và thông tin',
            description: 'Thực hành tìm kiếm, thu thập và tổ chức thông tin; biết cách đánh giá độ tin cậy của nguồn và trích dẫn phù hợp.',
            color: 'from-indigo-400 to-indigo-600'
        },
        {
            id: 3,
            title: 'Bài tập 2 - Chương 3',
            subtitle: 'Tổng quan về trí tuệ nhân tạo',
            description: 'Tổng quan về AI: khái niệm, ứng dụng phổ biến, lợi ích – rủi ro và ví dụ liên hệ thực tế trong học tập.',
            color: 'from-purple-400 to-purple-600'
        },
        {
            id: 4,
            title: 'Bài tập 3 - Chương 4',
            subtitle: 'Giao tiếp và hợp tác trong môi trường số',
            description: 'Rèn kỹ năng giao tiếp số và làm việc nhóm online: phân công, trao đổi, chia sẻ tài liệu và quy tắc ứng xử.',
            color: 'from-pink-400 to-pink-600',
            detailed: true
        },
        {
            id: 5,
            title: 'Bài tập 2 - Chương 5',
            subtitle: 'Sáng tạo nội dung số',
            description: 'Thực hành sáng tạo nội dung số: lên ý tưởng, lựa chọn công cụ, biên tập/thiết kế và lưu ý bản quyền khi sử dụng tài nguyên.',
            color: 'from-orange-400 to-orange-600'
        },
        {
            id: 6,
            title: 'Bài tập 4 - Chương 6',
            subtitle: 'An toàn và liêm chính học thuật',
            description: 'Tập trung vào an toàn số, bảo mật tài khoản, quyền riêng tư và liêm chính học thuật (tránh đạo văn, trích dẫn đúng, dùng AI minh bạch).',
            color: 'from-teal-400 to-teal-600'
        }
    ];

    const detailedProject = {
        sections: [
            {
                title: '1. Tổng quan',
                content: 'Trong môi trường học tập hiện đại, các công cụ hợp tác trực tuyến ngày càng trở thành yếu tố không thể thiếu khi triển khai bài tập nhóm. Báo cáo này trình bày trải nghiệm thực tế của nhóm tôi trong việc ứng dụng ba công cụ phổ biến gồm Trello, Google Docs và Slack để thực hiện một dự án nhóm kéo dài một tuần.'
            },
            {
                title: '2. Thông tin dự án và cách phối hợp',
                content: 'Nhóm gồm 4 thành viên, thống nhất thực hiện bài thuyết trình với chủ đề Bảo vệ môi trường. Toàn bộ dự án được chia thành các mảng công việc chính: phân công nhiệm vụ, xây dựng nội dung, trao đổi ý tưởng và chia sẻ tài nguyên.'
            },
            {
                title: '3. Công cụ quản lý nhiệm vụ - Trello',
                content: 'Nhóm sử dụng Trello để lập bảng theo dõi tiến độ với ba trạng thái cơ bản: việc cần làm, việc đang thực hiện và việc đã hoàn thành.',
                highlights: [
                    'Tiến độ dự án được kiểm soát rõ ràng',
                    'Hạn chế trùng lặp công việc',
                    'Tăng ý thức trách nhiệm cá nhân',
                    'Dễ nhận biết các nhiệm vụ bị chậm tiến độ'
                ]
            },
            {
                title: '4. Công cụ soạn thảo cộng tác - Google Docs',
                content: 'Google Docs được dùng làm nơi soạn thảo nội dung chung. Tài liệu được chia rõ thành các phần: mở đầu, thực trạng, nguyên nhân và giải pháp.',
                highlights: [
                    'Cho phép làm việc đồng thời theo thời gian thực',
                    'Không cần gửi file qua lại nhiều lần',
                    'Lịch sử chỉnh sửa giúp kiểm soát đóng góp',
                    'Trao đổi nhanh thông qua bình luận'
                ]
            },
            {
                title: '5. Công cụ giao tiếp - Slack',
                content: 'Slack được dùng làm kênh trao đổi chính với các phòng chat theo mục đích: thông báo chung, chia sẻ tài liệu nghiên cứu, thảo luận thiết kế slide.',
                highlights: [
                    'Thông tin không bị trôi, dễ tra cứu lại',
                    'Phân luồng thảo luận rõ ràng',
                    'Họp trực tuyến ổn định, thuận tiện'
                ]
            }
        ],
        table: [
            { tool: 'Trello', strength: 'Quản lý nhiệm vụ trực quan, dễ theo dõi tiến độ', limit: 'Cần thời gian làm quen', rating: 'Hiệu quả cao' },
            { tool: 'Google Docs', strength: 'Cộng tác thời gian thực, lưu phiên bản tự động', limit: 'Có thể xung đột chỉnh sửa', rating: 'Rất hiệu quả' },
            { tool: 'Slack', strength: 'Giao tiếp mạch lạc, phân kênh rõ', limit: 'Phụ thuộc vào kỷ luật người dùng', rating: 'Hiệu quả tốt' }
        ]
    };

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Dự án</h1>
                <p className="text-gray-600 text-sm sm:text-base">Nội dung 6 bài được đưa vào đầy đủ (văn bản + hình ảnh). Có thể click để xem chi tiết.</p>
            </div>

            <div className="grid gap-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => project.detailed ? setSelectedProject(project.id === selectedProject ? null : project.id) : null}
                        className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${project.detailed ? 'cursor-pointer hover:shadow-md' : ''
                            }`}
                    >
                        <div className={`bg-gradient-to-r ${project.color} p-4 sm:p-6 text-white`}>
                            <h3 className="text-lg sm:text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-white/90 text-sm sm:text-base">{project.subtitle}</p>
                        </div>
                        <div className="p-4 sm:p-6">
                            <p className="text-gray-700 text-sm sm:text-base">{project.description}</p>
                            {project.detailed && (
                                <div className="mt-3 flex items-center gap-2 text-blue-600 text-sm font-medium">
                                    <span>Xem báo cáo chi tiết</span>
                                    <ChevronRight size={16} className={`transition-transform ${selectedProject === project.id ? 'rotate-90' : ''}`} />
                                </div>
                            )}
                        </div>

                        {/* Detailed Content for Project 4 */}
                        {project.detailed && selectedProject === project.id && (
                            <div className="border-t border-gray-100 bg-gray-50 p-4 sm:p-6 space-y-4 sm:space-y-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Báo cáo chi tiết</h2>

                                {detailedProject.sections.map((section, idx) => (
                                    <div key={idx} className="bg-white rounded-lg p-5 shadow-sm">
                                        <h3 className="font-bold text-gray-800 mb-3">{section.title}</h3>
                                        <p className="text-gray-700 mb-3">{section.content}</p>
                                        {section.highlights && (
                                            <div className="space-y-2 mt-3">
                                                <p className="font-semibold text-gray-800 text-sm">Hiệu quả:</p>
                                                {section.highlights.map((highlight, i) => (
                                                    <div key={i} className="flex gap-2 items-start text-sm text-gray-700">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Table */}
                                <div className="bg-white rounded-lg p-5 shadow-sm overflow-x-auto">
                                    <h3 className="font-bold text-gray-800 mb-4">Bảng tổng hợp đánh giá công cụ</h3>
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="text-left py-3 px-3 font-semibold text-gray-800">Công cụ</th>
                                                <th className="text-left py-3 px-3 font-semibold text-gray-800">Điểm mạnh</th>
                                                <th className="text-left py-3 px-3 font-semibold text-gray-800">Hạn chế</th>
                                                <th className="text-left py-3 px-3 font-semibold text-gray-800">Nhận xét</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {detailedProject.table.map((row, idx) => (
                                                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-3 px-3 font-medium text-gray-800">{row.tool}</td>
                                                    <td className="py-3 px-3 text-gray-700">{row.strength}</td>
                                                    <td className="py-3 px-3 text-gray-700">{row.limit}</td>
                                                    <td className="py-3 px-3">
                                                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                                                            {row.rating}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                                    <h3 className="font-bold text-gray-800 mb-2">Kết luận</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Qua dự án ngắn hạn này, tôi nhận thấy việc lựa chọn đúng công cụ và thống nhất cách sử dụng ngay từ đầu
                                        có ảnh hưởng lớn đến hiệu quả làm việc nhóm. Các công cụ hợp tác trực tuyến không chỉ hỗ trợ quản lý công việc
                                        mà còn góp phần hình thành phong cách làm việc khoa học, minh bạch.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
