export default function Footer() {
  return (
    <footer className="layout-fooer py-[30px] text-white bg-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-x-5 px-5 sm:px-0 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1230px] mx-auto">
        <ul className="col-span-3 lg:col-span-1">
          <li className="font-medium">Địa chỉ</li>
          <li className="mt-5">
            <p></p>
            <h4 className="text-sm mb-2">Hà Nội</h4>
            <p className="font-extralight text-sm mb-3">
              Tầng 8 tòa nhà Ford, 311 - 313 Trường Chinh, quận Thanh Xuân, Hà
              Nội
            </p>
          </li>
          <li>
            <p></p>
            <h4 className="text-sm mb-2">Đà Nẵng</h4>
            <p className="font-extralight text-sm">
              Tầng 12, Vĩnh Trung Plaza, 255 - 257 Hùng Vương, Phường Vĩnh
              Trung, Quận Thanh Khê, TP Đà Nẵng
            </p>
          </li>
          <li>
            <h4 className="text-sm mb-2">Điện thoại</h4>
            <p className="font-extralight text-sm">1900 2013</p>
          </li>
        </ul>
        <ul className="col-span-3 lg:col-span-1 mt-11">
          <li>
            <h4 className="text-sm mb-2">Thanh Hoá</h4>
            <p className="font-extralight text-sm mb-3">
              Lô số MG 202, Khu đô thị Vincom, 27 Trần Phú, Phường Điện Biên, TP
              Thanh Hóa
            </p>
          </li>
          <li>
            <h4 className="text-sm mb-2">TP. Hồ Chí Minh</h4>
            <p className="font-extralight text-sm">
              Tầng 7, toà nhà Citilight, 45 Võ Thị Sáu, Phường Đa Kao, Quận 1,
              TPHCM
            </p>
          </li>
          <li>
            <h4 className="text-sm mb-2">Email</h4>
            <p className="font-extralight text-sm">info@gcosoftware.vn</p>
          </li>
          <li></li>
        </ul>
        <ul className="col-span-2 lg:col-span-1 mt-5 lg:mt-0">
          <li>Các ngành</li>
          <ul className="font-extralight text-sm mt-2 lg:mt-5">
            <li className="mb-[7px]">Công nghệ</li>
            <li className="mb-[7px]">Tiếp thị &#38; Quảng cáo</li>
            <li className="mb-[7px]">Logicstics &#38; Vận tải</li>
            <li className="mb-[7px]">Giáo dục &#38; Đào tạo trực tuyến</li>
            <li className="mb-[7px]">Bán lẻ &#38; Thương mại điện tử</li>
            <li className="mb-[7px]">Công ty Product</li>
            <li className="mb-[7px]">Doanh nghiệp vừa và nhỏ (SME)</li>
          </ul>
        </ul>
        <ul className="col-span-2 lg:col-span-1  mt-5 lg:mt-0">
          <li>Dịch vụ</li>
          <ul  className="font-extralight text-sm mt-2 lg:mt-5">
            <li className="mb-[7px]">Bảo trì và nâng cấp</li>
            <li className="mb-[7px]">Tư vấn &#38; Phát triển phần mềm</li>
            <li className="mb-[7px]">Phát triển ứng dụng di động</li>
            <li className="mb-[7px]">Tư vấn &#38; Thiết kế website</li>
            <li className="mb-[7px]">Dịch vụ kiểm thử phần mềm</li>
            <li className="mb-[7px]">Nhóm phát triển có chuyên môn cao</li>
            <li className="mb-[7px]">Dịch vụ IT Offshore &#38; Out Sourcing</li>
            <li className="mb-[7px]">Phát triển phần mềm tùy chỉnh</li>
          </ul>
        </ul>
        <ul className="col-span-2 lg:col-span-1  mt-5 lg:mt-0">
          <li>Tài nguyên</li>
          <ul className="font-extralight text-sm mt-5">
            <li className="mb-[7px]">Về chúng tôi</li>
            <li className="mb-[7px]">Tuyển dụng</li>
            <li className="mb-[7px]">Quy định chung</li>
            <li className="mb-[7px]">Chính sách bảo mật</li>
            <li className="mb-[7px]">Hình thức thanh toán</li>
            <li className="mb-[7px]">Giao nhận - Cài đặt</li>
            <li className="mb-[7px]">Chính sách bảo trì</li>
            <li className="mb-[7px]">Chính sách hoàn tiền</li>
            <li className="mb-[7px]">Liên kết</li>
          </ul>
          <li>
            <p></p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
