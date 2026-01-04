import React from 'react';
import { ChevronRight, GraduationCap, Target, Sparkles } from 'lucide-react';

const ConclusionPage = () => {
    const changes = [
        {
            title: 'Cách làm việc trở nên có kế hoạch hơn',
            desc: 'Trước khi bắt tay vào làm, em dành thời gian xác định mục tiêu, chuẩn bị cấu trúc và lựa chọn công cụ phù hợp thay vì làm theo cảm tính.'
        },
        {
            title: 'Chủ động hơn trong việc xử lý thông tin',
            desc: 'Em chú ý đến độ phù hợp của tài liệu, không sử dụng nguồn một cách máy móc và luôn cân nhắc bối cảnh khi đưa thông tin vào bài.'
        },
        {
            title: 'Nhận thức rõ hơn vai trò của AI',
            desc: 'AI được sử dụng như một công cụ hỗ trợ tư duy và kiểm tra lại nội dung, không thay thế quá trình suy nghĩ và viết của bản thân.'
        }
    ];

    const lessons = [
        'Chuẩn bị trước giúp tiết kiệm thời gian: Khi xác định rõ cần làm gì và làm theo hướng nào, quá trình thực hiện diễn ra mạch lạc và ít phải chỉnh sửa lại.',
        'Tiêu chí rõ ràng giúp tự đánh giá hiệu quả: Việc đặt ra yêu cầu cụ thể cho từng sản phẩm giúp em dễ nhận ra điểm đạt và điểm cần cải thiện.',
        'Minh chứng là một phần của nội dung: Việc lưu lại quá trình làm bài giúp người xem hiểu cách tiếp cận, đồng thời giúp bản thân dễ rà soát và rút kinh nghiệm.'
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-lg">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Tổng kết</h1>
                <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                    Hoàn thành portfolio gồm 6 bài tập giúp em nhìn lại toàn bộ quá trình học theo một góc nhìn có hệ thống hơn.
                    Thay vì chỉ tập trung hoàn thành yêu cầu từng bài, em bắt đầu chú ý đến cách tổ chức thông tin, cách ra quyết định
                    trong quá trình làm và mức độ hiệu quả của các công cụ hỗ trợ, đặc biệt là AI.
                </p>
            </div>

            {/* Những thay đổi */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                    <Sparkles className="text-blue-500" />
                    Những thay đổi em nhận thấy
                </h2>
                <div className="space-y-4">
                    {changes.map((change, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-100">
                            <h3 className="font-bold text-gray-800 mb-2">{change.title}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{change.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Kinh nghiệm rút ra */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                    <Target className="text-blue-500" />
                    Những kinh nghiệm quan trọng rút ra
                </h2>
                <div className="space-y-3">
                    {lessons.map((lesson, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                                {idx + 1}
                            </div>
                            <p className="text-gray-700 leading-relaxed">{lesson}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Đánh giá chung */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Đánh giá chung về portfolio</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    Portfolio được xây dựng theo hướng ưu tiên sự rõ ràng và khả năng theo dõi. Người xem có thể nhanh chóng
                    nắm được mỗi bài đang giải quyết vấn đề gì, cách triển khai ra sao và kết quả đạt được.
                </p>
                <div className="space-y-2 text-gray-700">
                    <div className="flex gap-2">
                        <ChevronRight className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                        <span>Bố cục được giữ nhất quán giữa các bài. Nội dung không quá dài nhưng đủ để theo dõi mạch làm việc</span>
                    </div>
                    <div className="flex gap-2">
                        <ChevronRight className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                        <span>Minh chứng được lựa chọn có chủ đích, tránh dàn trải</span>
                    </div>
                    <div className="flex gap-2">
                        <ChevronRight className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                        <span>Khả năng ứng dụng trong học tập</span>
                    </div>
                </div>
            </div>

            {/* Ứng dụng */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Khả năng ứng dụng trong học tập</h2>
                <p className="text-gray-700 leading-relaxed">
                    Những kỹ năng rèn luyện trong quá trình làm portfolio có thể áp dụng trực tiếp vào việc học Luật,
                    đặc biệt trong các hoạt động như đọc văn bản, phân tích tình huống và viết bài học thuật.
                    Việc tổ chức tài liệu, đặt câu hỏi đúng trọng tâm và sử dụng AI có kiểm soát giúp quá trình học
                    trở nên chủ động và hiệu quả hơn.
                </p>
            </div>

            {/* Hướng phát triển */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <GraduationCap className="text-blue-500" />
                    Hướng phát triển trong tương lai
                </h2>
                <p className="text-gray-700 mb-3">Trong các phiên bản tiếp theo, em dự định tiếp tục điều chỉnh cấu trúc portfolio để:</p>
                <div className="space-y-2">
                    <div className="flex gap-2 items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">Trình bày ngắn gọn hơn nhưng rõ trọng tâm</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">Làm nổi bật bài học rút ra từ từng bài</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">Mở rộng nội dung theo hướng gắn với định hướng học tập và nghề nghiệp</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConclusionPage;
