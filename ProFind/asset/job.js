const danhSachCongViec = [
    {
        ma: 1,
        tenCongViec: "Kế toán nội bộ",
        tenCongTy: "Công ty TNHH Minh Phát",
        mucLuong: "10.000.000 - 15.000.000 đ/tháng",
        diaDiem: "Quận 10, TP. Hồ Chí Minh",
        nganhNghe: "Kế toán",
        loaiCongViec: "Toàn thời gian",
        moTa: "Theo dõi thu chi, quản lý hóa đơn chứng từ, nhập liệu và lập báo cáo kế toán.",
        yeuCau: "Tốt nghiệp chuyên ngành kế toán, có kinh nghiệm từ 1 năm, thành thạo Excel."
    },
    {
        ma: 2,
        tenCongViec: "Kế toán kho",
        tenCongTy: "Công ty CP Gia Đoàn",
        mucLuong: "8.000.000 - 13.000.000 đ/tháng",
        diaDiem: "Hóc Môn, TP. Hồ Chí Minh",
        nganhNghe: "Kế toán",
        loaiCongViec: "Toàn thời gian",
        moTa: "Theo dõi nhập xuất tồn, kiểm kê hàng hóa, đối chiếu công nợ và quản lý chứng từ.",
        yeuCau: "Cẩn thận, trung thực, có kinh nghiệm kế toán kho là lợi thế."
    },
    {
        ma: 3,
        tenCongViec: "Kế toán tổng hợp",
        tenCongTy: "Công ty Sunwell",
        mucLuong: "12.000.000 - 18.000.000 đ/tháng",
        diaDiem: "Quận 3, TP. Hồ Chí Minh",
        nganhNghe: "Kế toán",
        loaiCongViec: "Toàn thời gian",
        moTa: "Thực hiện nghiệp vụ kế toán tổng hợp, báo cáo tài chính và theo dõi công nợ.",
        yeuCau: "Tốt nghiệp đại học, có từ 2 năm kinh nghiệm."
    },
    {
        ma: 4,
        tenCongViec: "Kế toán công nợ",
        tenCongTy: "Công ty Đại Việt",
        mucLuong: "9.000.000 - 14.000.000 đ/tháng",
        diaDiem: "Tân Bình, TP. Hồ Chí Minh",
        nganhNghe: "Kế toán",
        loaiCongViec: "Toàn thời gian",
        moTa: "Theo dõi công nợ khách hàng, nhà cung cấp và lập báo cáo định kỳ.",
        yeuCau: "Biết Excel, cẩn thận và có tinh thần trách nhiệm."
    },
    {
        ma: 5,
        tenCongViec: "Kế toán bán hàng",
        tenCongTy: "Nội Thất Việt",
        mucLuong: "8.000.000 - 12.000.000 đ/tháng",
        diaDiem: "Quận 7, TP. Hồ Chí Minh",
        nganhNghe: "Kế toán",
        loaiCongViec: "Toàn thời gian",
        moTa: "Theo dõi doanh thu, hóa đơn bán hàng và hỗ trợ khách hàng.",
        yeuCau: "Có kỹ năng giao tiếp, biết sử dụng phần mềm bán hàng."
    },

    {
        ma: 6,
        tenCongViec: "Nhân viên phục vụ",
        tenCongTy: "Passio Coffee",
        mucLuong: "3.000.000 - 6.000.000 đ/tháng",
        diaDiem: "Thủ Đức, TP. Hồ Chí Minh",
        nganhNghe: "Phục Vụ",
        loaiCongViec: "Bán thời gian",
        moTa: "Phục vụ khách hàng, nhận order, chuẩn bị khu vực và vệ sinh cửa hàng.",
        yeuCau: "Từ 18 tuổi, năng động, không yêu cầu kinh nghiệm."
    },
    {
        ma: 7,
        tenCongViec: "Nhân viên phục vụ Part-time",
        tenCongTy: "BBQ Garden",
        mucLuong: "26.000 - 35.000 đ/giờ",
        diaDiem: "Gò Vấp, TP. Hồ Chí Minh",
        nganhNghe: "Phục Vụ",
        loaiCongViec: "Bán thời gian",
        moTa: "Phục vụ khách hàng, bưng bê món ăn và dọn dẹp khu vực làm việc.",
        yeuCau: "Nhanh nhẹn, chăm chỉ, có thể làm ca tối."
    },
    {
        ma: 8,
        tenCongViec: "Nhân viên phục vụ nhà hàng",
        tenCongTy: "Bún Thịt Nướng Kiều Bảo",
        mucLuong: "4.500.000 - 6.000.000 đ/tháng",
        diaDiem: "Quận 11, TP. Hồ Chí Minh",
        nganhNghe: "Phục Vụ",
        loaiCongViec: "Bán thời gian",
        moTa: "Nhận order, phục vụ món ăn và chăm sóc khách hàng.",
        yeuCau: "Không yêu cầu kinh nghiệm, được hướng dẫn khi nhận việc."
    },
    {
        ma: 9,
        tenCongViec: "Nhân viên phục vụ cafe",
        tenCongTy: "The Coffee House",
        mucLuong: "5.000.000 - 8.000.000 đ/tháng",
        diaDiem: "Bình Thạnh, TP. Hồ Chí Minh",
        nganhNghe: "Phục Vụ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Đón tiếp khách, phục vụ đồ uống và đảm bảo vệ sinh cửa hàng.",
        yeuCau: "Giao tiếp tốt, thái độ tích cực."
    },
    {
        ma: 10,
        tenCongViec: "Nhân viên phục vụ tiệc cưới",
        tenCongTy: "Trung tâm Hội nghị ABC",
        mucLuong: "25.000 - 40.000 đ/giờ",
        diaDiem: "Quận 1, TP. Hồ Chí Minh",
        nganhNghe: "Phục Vụ",
        loaiCongViec: "Bán thời gian",
        moTa: "Phục vụ tiệc, sắp xếp bàn ghế và hỗ trợ khách hàng.",
        yeuCau: "Có thể làm việc cuối tuần, nhanh nhẹn."
    },

    {
        ma: 11,
        tenCongViec: "Nhân viên Marketing",
        tenCongTy: "Media Plus",
        mucLuong: "10.000.000 - 15.000.000 đ/tháng",
        diaDiem: "Quận 1, TP. Hồ Chí Minh",
        nganhNghe: "Marketing",
        loaiCongViec: "Toàn thời gian",
        moTa: "Lên kế hoạch nội dung, quản lý fanpage và triển khai chiến dịch marketing.",
        yeuCau: "Có kỹ năng viết content, biết sử dụng mạng xã hội."
    },
    {
        ma: 12,
        tenCongViec: "Nhân viên Content Marketing",
        tenCongTy: "Digital Star",
        mucLuong: "8.000.000 - 14.000.000 đ/tháng",
        diaDiem: "Quận 3, TP. Hồ Chí Minh",
        nganhNghe: "Marketing",
        loaiCongViec: "Toàn thời gian",
        moTa: "Sáng tạo nội dung cho website, Facebook và TikTok.",
        yeuCau: "Có khả năng viết tốt, sáng tạo và bắt trend."
    },
    {
        ma: 13,
        tenCongViec: "Nhân viên Digital Marketing",
        tenCongTy: "Ecom Việt",
        mucLuong: "12.000.000 - 20.000.000 đ/tháng",
        diaDiem: "Tân Bình, TP. Hồ Chí Minh",
        nganhNghe: "Marketing",
        loaiCongViec: "Toàn thời gian",
        moTa: "Chạy quảng cáo Facebook, Google và phân tích hiệu quả chiến dịch.",
        yeuCau: "Có kinh nghiệm chạy quảng cáo từ 1 năm."
    },
    {
        ma: 14,
        tenCongViec: "Nhân viên Social Media",
        tenCongTy: "Brand House",
        mucLuong: "10.000.000 - 16.000.000 đ/tháng",
        diaDiem: "Phú Nhuận, TP. Hồ Chí Minh",
        nganhNghe: "Marketing",
        loaiCongViec: "Toàn thời gian",
        moTa: "Quản lý nội dung và hình ảnh thương hiệu trên các nền tảng mạng xã hội.",
        yeuCau: "Năng động, sáng tạo, hiểu về mạng xã hội."
    },
    {
        ma: 15,
        tenCongViec: "Thực tập sinh Marketing",
        tenCongTy: "Future Tech",
        mucLuong: "3.000.000 - 5.000.000 đ/tháng",
        diaDiem: "Quận 7, TP. Hồ Chí Minh",
        nganhNghe: "Marketing",
        loaiCongViec: "Thực tập",
        moTa: "Hỗ trợ đội ngũ marketing thực hiện nội dung và các chiến dịch truyền thông.",
        yeuCau: "Sinh viên ngành marketing, chịu khó học hỏi."
    },

    {
        ma: 16,
        tenCongViec: "Lập trình viên Frontend",
        tenCongTy: "FPT Software",
        mucLuong: "15.000.000 - 25.000.000 đ/tháng",
        diaDiem: "Thủ Đức, TP. Hồ Chí Minh",
        nganhNghe: "Công nghệ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Phát triển giao diện website bằng HTML, CSS, JavaScript và React.",
        yeuCau: "Có kiến thức frontend, tư duy logic tốt."
    },
    {
        ma: 17,
        tenCongViec: "Lập trình viên Backend",
        tenCongTy: "Shopee",
        mucLuong: "20.000.000 - 35.000.000 đ/tháng",
        diaDiem: "Quận 1, TP. Hồ Chí Minh",
        nganhNghe: "Công nghệ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Xây dựng API, xử lý dữ liệu và phát triển hệ thống backend.",
        yeuCau: "Biết Java, Node.js hoặc Python là lợi thế."
    },
    {
        ma: 18,
        tenCongViec: "Nhân viên hỗ trợ IT",
        tenCongTy: "Viettel",
        mucLuong: "10.000.000 - 16.000.000 đ/tháng",
        diaDiem: "Tân Bình, TP. Hồ Chí Minh",
        nganhNghe: "Công nghệ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Hỗ trợ người dùng, cài đặt phần mềm và xử lý sự cố máy tính.",
        yeuCau: "Có kiến thức phần cứng và phần mềm."
    },
    {
        ma: 19,
        tenCongViec: "Nhân viên kiểm thử phần mềm",
        tenCongTy: "VNG Corporation",
        mucLuong: "12.000.000 - 20.000.000 đ/tháng",
        diaDiem: "Quận 7, TP. Hồ Chí Minh",
        nganhNghe: "Công nghệ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Kiểm thử phần mềm, phát hiện lỗi và viết báo cáo kiểm thử.",
        yeuCau: "Tư duy logic, cẩn thận, biết kiểm thử phần mềm."
    },
    {
        ma: 20,
        tenCongViec: "Nhà thiết kế UI/UX",
        tenCongTy: "MoMo",
        mucLuong: "15.000.000 - 25.000.000 đ/tháng",
        diaDiem: "Quận 4, TP. Hồ Chí Minh",
        nganhNghe: "Công nghệ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Thiết kế giao diện và trải nghiệm người dùng cho ứng dụng.",
        yeuCau: "Biết Figma, có tư duy thiết kế tốt."
    },

    {
        ma: 21,
        tenCongViec: "Nhân viên pha chế",
        tenCongTy: "Highlands Coffee",
        mucLuong: "5.000.000 - 8.000.000 đ/tháng",
        diaDiem: "Quận 1, TP. Hồ Chí Minh",
        nganhNghe: "Pha chế",
        loaiCongViec: "Toàn thời gian",
        moTa: "Chuẩn bị cà phê, trà và các loại đồ uống theo công thức.",
        yeuCau: "Không yêu cầu kinh nghiệm, được đào tạo."
    },
    {
        ma: 22,
        tenCongViec: "Nhân viên Barista Part-time",
        tenCongTy: "The Coffee Bean",
        mucLuong: "25.000 - 35.000 đ/giờ",
        diaDiem: "Quận 3, TP. Hồ Chí Minh",
        nganhNghe: "Pha chế",
        loaiCongViec: "Bán thời gian",
        moTa: "Pha chế đồ uống và hỗ trợ phục vụ khách hàng.",
        yeuCau: "Có thể làm ca linh hoạt, yêu thích ngành F&B."
    },
    {
        ma: 23,
        tenCongViec: "Nhân viên pha chế trà sữa",
        tenCongTy: "Che MsHoa",
        mucLuong: "6.000.000 - 9.000.000 đ/tháng",
        diaDiem: "Tân Bình, TP. Hồ Chí Minh",
        nganhNghe: "Pha chế",
        loaiCongViec: "Toàn thời gian",
        moTa: "Pha chế trà sữa, chè và các loại đồ uống theo công thức.",
        yeuCau: "Nhanh nhẹn, trung thực, không yêu cầu kinh nghiệm."
    },
    {
        ma: 24,
        tenCongViec: "Trưởng ca pha chế",
        tenCongTy: "Coffee House",
        mucLuong: "9.000.000 - 13.000.000 đ/tháng",
        diaDiem: "Bình Thạnh, TP. Hồ Chí Minh",
        nganhNghe: "Pha chế",
        loaiCongViec: "Toàn thời gian",
        moTa: "Quản lý ca làm việc và đảm bảo chất lượng đồ uống.",
        yeuCau: "Có kinh nghiệm pha chế từ 1 năm."
    },
    {
        ma: 25,
        tenCongViec: "Nhân viên pha chế nhà hàng",
        tenCongTy: "Golden Restaurant",
        mucLuong: "7.000.000 - 12.000.000 đ/tháng",
        diaDiem: "Quận 10, TP. Hồ Chí Minh",
        nganhNghe: "Pha chế",
        loaiCongViec: "Toàn thời gian",
        moTa: "Chuẩn bị nước uống và hỗ trợ vận hành quầy bar.",
        yeuCau: "Chăm chỉ, chịu được áp lực công việc."
    },

    {
        ma: 26,
        tenCongViec: "Nhân viên tạp vụ văn phòng",
        tenCongTy: "Công ty Minh Long",
        mucLuong: "6.000.000 - 8.000.000 đ/tháng",
        diaDiem: "Quận 1, TP. Hồ Chí Minh",
        nganhNghe: "Tạp Vụ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Vệ sinh văn phòng, khu vực chung và đảm bảo môi trường sạch sẽ.",
        yeuCau: "Chăm chỉ, trung thực, có sức khỏe tốt."
    },
    {
        ma: 27,
        tenCongViec: "Nhân viên vệ sinh nhà hàng",
        tenCongTy: "ABC Restaurant",
        mucLuong: "6.000.000 - 8.000.000 đ/tháng",
        diaDiem: "Quận 5, TP. Hồ Chí Minh",
        nganhNghe: "Tạp Vụ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Vệ sinh khu vực nhà hàng, bếp và các khu vực được phân công.",
        yeuCau: "Siêng năng, có trách nhiệm."
    },
    {
        ma: 28,
        tenCongViec: "Nhạp vụ khách sạn",
        tenCongTy: "Sun Hotel",
        mucLuong: "7.000.000 - 10.000.000 đ/tháng",
        diaDiem: "Quận 3, TP. Hồ Chí Minh",
        nganhNghe: "Tạp Vụ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Vệ sinh khu vực khách sạn và hỗ trợ các công việc chung.",
        yeuCau: "Có sức khỏe tốt, chăm chỉ."
    },
    {
        ma: 29,
        tenCongViec: "Nhân viên vệ sinh chung cư",
        tenCongTy: "Green Home",
        mucLuong: "7.000.000 - 9.000.000 đ/tháng",
        diaDiem: "Thủ Đức, TP. Hồ Chí Minh",
        nganhNghe: "Tạp Vụ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Vệ sinh hành lang, sảnh và khu vực sinh hoạt chung.",
        yeuCau: "Làm việc nghiêm túc, đúng giờ."
    },
    {
        ma: 30,
        tenCongViec: "Nhân viên tạp vụ trường học",
        tenCongTy: "Trường Quốc tế ABC",
        mucLuong: "6.500.000 - 9.000.000 đ/tháng",
        diaDiem: "Quận 7, TP. Hồ Chí Minh",
        nganhNghe: "Tạp Vụ",
        loaiCongViec: "Toàn thời gian",
        moTa: "Đảm bảo vệ sinh lớp học, hành lang và khuôn viên trường.",
        yeuCau: "Cẩn thận, sạch sẽ, trung thực."
    },

    {
        ma: 31,
        tenCongViec: "Nhân viên chăm sóc khách hàng",
        tenCongTy: "Telecom Việt",
        mucLuong: "8.000.000 - 13.000.000 đ/tháng",
        diaDiem: "Quận 10, TP. Hồ Chí Minh",
        nganhNghe: "Chăm sóc khách hàng",
        loaiCongViec: "Toàn thời gian",
        moTa: "Tiếp nhận cuộc gọi, giải đáp thắc mắc và hỗ trợ khách hàng.",
        yeuCau: "Giao tiếp tốt, kiên nhẫn, sử dụng máy tính tốt."
    },
    {
        ma: 32,
        tenCongViec: "Nhân viên dịch vụ khách hàng",
        tenCongTy: "E-commerce Việt",
        mucLuong: "9.000.000 - 15.000.000 đ/tháng",
        diaDiem: "Bình Thạnh, TP. Hồ Chí Minh",
        nganhNghe: "Chăm sóc khách hàng",
        loaiCongViec: "Toàn thời gian",
        moTa: "Tư vấn sản phẩm, xử lý phản hồi và hỗ trợ khách hàng sau bán hàng.",
        yeuCau: "Có kỹ năng giao tiếp và xử lý tình huống."
    },
    {
        ma: 33,
        tenCongViec: "Tư vấn viên khách hàng",
        tenCongTy: "Công ty Tài Chính ABC",
        mucLuong: "8.000.000 - 18.000.000 đ/tháng",
        diaDiem: "Quận 4, TP. Hồ Chí Minh",
        nganhNghe: "Chăm sóc khách hàng",
        loaiCongViec: "Toàn thời gian",
        moTa: "Tư vấn sản phẩm và hỗ trợ khách hàng qua điện thoại.",
        yeuCau: "Không ngại giao tiếp, có khả năng thuyết phục."
    },
    {
        ma: 34,
        tenCongViec: "Nhân viên hỗ trợ khách hàng online",
        tenCongTy: "Shop Online 24H",
        mucLuong: "7.000.000 - 12.000.000 đ/tháng",
        diaDiem: "Gò Vấp, TP. Hồ Chí Minh",
        nganhNghe: "Chăm sóc khách hàng",
        loaiCongViec: "Toàn thời gian",
        moTa: "Tư vấn và giải đáp khách hàng qua Facebook, Zalo và website.",
        yeuCau: "Biết sử dụng mạng xã hội, phản hồi nhanh."
    },
    {
        ma: 35,
        tenCongViec: "Chuyên viên chăm sóc khách hàng",
        tenCongTy: "Vina Service",
        mucLuong: "12.000.000 - 18.000.000 đ/tháng",
        diaDiem: "Phú Nhuận, TP. Hồ Chí Minh",
        nganhNghe: "Chăm sóc khách hàng",
        loaiCongViec: "Toàn thời gian",
        moTa: "Theo dõi trải nghiệm khách hàng và xử lý các vấn đề phát sinh.",
        yeuCau: "Có kinh nghiệm chăm sóc khách hàng từ 1 năm."
    }

];

function luuCongViec(ma) {

    const congViec = danhSachCongViec.find(
        job => job.ma === ma
    );

    if (!congViec) return;

    localStorage.setItem(
        "congViecDangXem",
        JSON.stringify(congViec)
    );

    window.location.href = "detail.html";
}

function hienThiCongViec(danhSach = danhSachCongViec) {
    const khuVucHienThi = document.querySelector("#danh-sach-cong-viec");

    if (!khuVucHienThi) return;

    khuVucHienThi.innerHTML = danhSach.map((congViec, index) => `
    <div class="col-lg-4 col-md-6 mb-4"
     data-aos="zoom-in-up"
     data-aos-delay="0">
        <div class="card shadow h-100">
             <div class="card-body">
                <h4>${congViec.tenCongViec}</h4>
                <p><b>🏢 ${congViec.tenCongTy}</b></p>
                <p>💰 ${congViec.mucLuong}</p>
                <p>📍 ${congViec.diaDiem}</p>
                <p>📌 ${congViec.nganhNghe}</p>
                <button class="btn btn-success"
                onclick="xemChiTiet(${congViec.ma})">
                Xem chi tiết
            </button>
        </div>
    </div>
</div>
`).join("");
    AOS.refresh();
}
function chuanHoaQuan(text) {
    return text
        .toLowerCase()
        .replace("quận", "")
        .replace("quan", "")
        .replace("q.", "")
        .replace("q", "")
        .replace(/\s+/g, "")
        .trim();
}
function locCongViec() {

    const tuKhoa = document.getElementById("search").value.toLowerCase().trim();
    const quan = document.getElementById("district").value;
    const nganh = document.getElementById("category").value;
    const hinhThuc = document.getElementById("jobType").value;

    const cacTu = tuKhoa.split(" ").filter(t => t !== "");

    const ketQua = danhSachCongViec.filter(cv => {

        const ten = cv.tenCongViec.toLowerCase();
        const congTy = cv.tenCongTy.toLowerCase();
        const diaDiem = cv.diaDiem.toLowerCase();
        const loai = cv.loaiCongViec.toLowerCase();
        const nganhNghe = cv.nganhNghe.toLowerCase();

        const quanCV = chuanHoaQuan(cv.diaDiem.split(",")[0]);

        // ===== Ô tìm kiếm =====
        const dkTuKhoa = cacTu.every(tu => {

            const tuQuan = chuanHoaQuan(tu);

            return (
                ten.includes(tu) ||
                congTy.includes(tu) ||
                nganhNghe.includes(tu) ||
                loai.includes(tu) ||
                diaDiem.includes(tu) ||
                quanCV === tuQuan
            );

        });

        // ===== Dropdown =====
        const dkQuan =
            quan === "" ||
            cv.diaDiem.split(",")[0].trim() === quan;

        const dkNganh =
            nganh === "" ||
            cv.nganhNghe === nganh;

        const dkHinhThuc =
            hinhThuc === "" ||
            cv.loaiCongViec === hinhThuc;

        return dkTuKhoa && dkQuan && dkNganh && dkHinhThuc;

    });

    document.getElementById("ketQua").style.display = "block";

    if (ketQua.length === 0) {

        document.getElementById("danh-sach-cong-viec").innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning text-center">
                    Rất tiếc, công việc bạn tìm kiếm hiện chưa có trên hệ thống.
                </div>
            </div>
        `;

        return;
    }

    hienThiCongViec(ketQua);

}
function xemChiTiet(maCongViec) {
    const congViec = danhSachCongViec.find(
        congViec => congViec.ma === maCongViec
    );

    if (!congViec) return;

    localStorage.setItem(
        "congViecDangXem",
        JSON.stringify(congViec)
    );

    window.location.href = "detail.html";

}



/*const applyPopup = document.querySelector("#applyPopup");
if (applyPopup) {
    applyPopup.style.display = "flex";
}*/

function dongFormUngTuyen() {
    const applyPopup = document.querySelector("#applyPopup");

    if (applyPopup) {
        applyPopup.style.display = "none";
    }

}

function kiemTraBieuMau(bieuMau) {
    let hopLe = true;

    const cacTruong = [
        ["name", "Vui lòng nhập họ và tên."],
        ["email", "Vui lòng nhập email."],
        ["phone", "Vui lòng nhập số điện thoại."],
        ["job", "Vui lòng nhập vị trí ứng tuyển."],
        ["note", "Vui lòng giới thiệu bản thân."]
    ];

    cacTruong.forEach(([id, thongBao]) => {

        const oNhap = bieuMau.querySelector(`#${id}`);
        const oLoi = bieuMau.querySelector(`#${id}Error`);

        if (!oNhap || !oLoi) return;

        if (oNhap.value.trim() === "") {
            oLoi.textContent = thongBao;
            hopLe = false;
        } else {
            oLoi.textContent = "";
        }

    });

    return hopLe;

}

function closePopup() {
    const successPopup =
        document.querySelector("#successPopup");

    if (successPopup) {
        successPopup.style.display = "none";
    }

}

document.addEventListener("DOMContentLoaded", () => {

    // HIỂN THỊ DANH SÁCH CÔNG VIỆC
    document.addEventListener("DOMContentLoaded", () => {

        document.getElementById("search")?.addEventListener("keyup", locCongViec);

    });

    // TÌM KIẾM
    document.getElementById("searchBtn")?.addEventListener("click", locCongViec);

    document.getElementById("search")?.addEventListener("keyup", locCongViec);

    document.getElementById("district")?.addEventListener("change", locCongViec);

    document.getElementById("category")?.addEventListener("change", locCongViec);

    document.getElementById("jobType")?.addEventListener("change", locCongViec);
    // HIỂN THỊ CHI TIẾT CÔNG VIỆC
    if (document.querySelector("#title")) {
        hienThiChiTiet();
    }

    // FORM ỨNG TUYỂN
    const applyForm =
        document.querySelector("#applyForm");

    if (applyForm) {

        applyForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Kiểm tra form
            if (!kiemTraBieuMau(applyForm)) {
                return;
            }

            // Nếu nhập đủ thông tin thì hiện thông báo thành công
            const successPopup =
                document.querySelector("#successPopup");

            if (successPopup) {
                successPopup.style.display = "flex";
            }

            // Xóa dữ liệu trong form
            applyForm.reset();

            // Đóng form ứng tuyển
            dongFormUngTuyen();

        });

    }

});

// =========================
// XỬ LÝ FORM LIÊN HỆ
// =========================

const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popup");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let job = document.getElementById("job").value.trim();
        let note = document.getElementById("note").value.trim();

        let isValid = true;

        if (name === "") {
            document.getElementById("nameError").textContent = "Vui lòng nhập họ và tên";
            isValid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        if (email === "") {
            document.getElementById("emailError").textContent = "Vui lòng nhập email";
            isValid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        if (phone === "") {
            document.getElementById("phoneError").textContent = "Vui lòng nhập số điện thoại";
            isValid = false;
        } else {
            document.getElementById("phoneError").textContent = "";
        }

        if (job === "") {
            document.getElementById("jobError").textContent = "Vui lòng nhập chủ đề";
            isValid = false;
        } else {
            document.getElementById("jobError").textContent = "";
        }

        if (note === "") {
            document.getElementById("noteError").textContent = "Vui lòng nhập nội dung liên hệ";
            isValid = false;
        } else {
            document.getElementById("noteError").textContent = "";
        }

        // Nếu nhập đầy đủ thông tin
        if (isValid) {

            // Hiển thị thông báo thành công
            popup.style.display = "flex";

            // Xóa dữ liệu trong form
            contactForm.reset();
        }

    });
}

// Đóng popup thông báo
// function closePopup() {
//     popup.style.display = "none";
// }

// ===============================
// HIỂN THỊ CHI TIẾT CÔNG VIỆC
// ===============================

function hienThiChiTiet() {

    const congViec = JSON.parse(
        localStorage.getItem("congViecDangXem")
    );

    if (!congViec) return;


    document.querySelector("#title").textContent =
        congViec.tenCongViec;

    document.querySelector("#company").textContent =
        congViec.tenCongTy;

    document.querySelector("#salary").textContent =
        congViec.mucLuong;

    document.querySelector("#location").textContent =
        congViec.diaDiem;

    document.querySelector("#type").textContent =
        congViec.loaiCongViec;

    document.querySelector("#category").textContent =
        congViec.nganhNghe;

    document.querySelector("#description").textContent =
        congViec.moTa;

    document.querySelector("#requirement").textContent =
        congViec.yeuCau;


    // tự điền vị trí ứng tuyển
    const jobInput = document.querySelector("#job");

    if (jobInput) {
        jobInput.value = congViec.tenCongViec;
    }

}


// ===============================
// MỞ / ĐÓNG FORM ỨNG TUYỂN
// ===============================

function moFormUngTuyen() {

    const applyPopup =
        document.querySelector("#applyPopup");

    if (applyPopup) {
        applyPopup.style.display = "flex";
    }

}


function dongFormUngTuyen() {

    const applyPopup =
        document.querySelector("#applyPopup");

    if (applyPopup) {
        applyPopup.style.display = "none";
    }

}

// ===============================
// KIỂM TRA FORM ỨNG TUYỂN
// ===============================

function kiemTraBieuMau(form) {

    let hopLe = true;


    const name =
        document.querySelector("#name");

    const email =
        document.querySelector("#email");

    const phone =
        document.querySelector("#phone");

    const job =
        document.querySelector("#job");

    const note =
        document.querySelector("#note");



    document.querySelector("#nameError").textContent = "";
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#phoneError").textContent = "";
    document.querySelector("#jobError").textContent = "";
    document.querySelector("#noteError").textContent = "";



    if (name.value.trim() == "") {

        document.querySelector("#nameError")
            .textContent = "Vui lòng nhập họ và tên";

        hopLe = false;
    }



    let emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email.value.trim() == "") {

        document.querySelector("#emailError")
            .textContent = "Vui lòng nhập email";

        hopLe = false;

    }
    else if (!emailRegex.test(email.value)) {

        document.querySelector("#emailError")
            .textContent = "Email không hợp lệ";

        hopLe = false;

    }




    let phoneRegex =
        /^[0-9]{10}$/;


    if (phone.value.trim() == "") {

        document.querySelector("#phoneError")
            .textContent = "Vui lòng nhập số điện thoại";

        hopLe = false;

    }
    else if (!phoneRegex.test(phone.value)) {

        document.querySelector("#phoneError")
            .textContent = "Số điện thoại phải có 10 số";

        hopLe = false;

    }



    if (job.value.trim() == "") {

        document.querySelector("#jobError")
            .textContent = "Vui lòng nhập vị trí ứng tuyển";

        hopLe = false;

    }



    if (note.value.trim() == "") {

        document.querySelector("#noteError")
            .textContent = "Vui lòng giới thiệu bản thân";

        hopLe = false;

    }



    return hopLe;

}


// ===============================
// LOAD TRANG
// ===============================

document.addEventListener("DOMContentLoaded", () => {


    // trang danh sách
    if (document.querySelector("#danh-sach-cong-viec")) {

        hienThiCongViec();

    }



    // trang chi tiết
    if (document.querySelector("#title")) {

        hienThiChiTiet();

    }




    // form ứng tuyển

    const applyForm =
        document.querySelector("#applyForm");



    if (applyForm) {


        applyForm.addEventListener(
            "submit",
            function (e) {


                e.preventDefault();



                if (!kiemTraBieuMau(applyForm)) {
                    return;
                }



                const successPopup =
                    document.querySelector("#successPopup");



                if (successPopup) {

                    successPopup.style.display = "flex";

                }



                applyForm.reset();


                dongFormUngTuyen();


            }
        );


    }



});

function closePopup() {

    const popup = document.getElementById("popup");
    const successPopup = document.getElementById("successPopup");

    if (popup) {
        popup.style.display = "none";
    }

    if (successPopup) {
        successPopup.style.display = "none";
    }

}
