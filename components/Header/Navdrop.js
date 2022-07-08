import NavdropStyle from "../../scss/Header.module.scss" 

export default function Navdrop() {
    return (
        <div className={NavdropStyle.navdrop}>
            <a className="pb-3 animate-changed">Công nghệ</a>
            <a className="pb-3 animate-changed1">Tiếp thị &#38; Quảng cáo</a>
            <a className="pb-3 animate-changed2">Truyền thông &#38; Giải trí</a>
            <a className="pb-3 animate-changed3">Logicstics &#38; Vận tải</a>
            <a className="pb-3 animate-changed4">Giáo dục &#38; Đào tạo trực tuyến</a>
            <a className="pb-3 animate-changed5">Bán lẻ &#38; Thương mại điện tử</a>
            <a className="pb-3 animate-changed6">Công ty Product</a>
            <a className="animate-changed7">Doanh nghiệp vừa và nhỏ (SME)</a>
        </div>
    )
}