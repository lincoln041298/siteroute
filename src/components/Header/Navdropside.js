import NavdropStyle from "scss/Header.module.scss" 

export default function NavdropSide() {
    return (
        <div className={NavdropStyle.navdropside}>
            <a className="pb-3 animate-changed">Bảo trì và nâng cấp</a>
            <a className="pb-3 animate-changed1">Tư vấn  &#38; Phát triển phần mềm</a>
            <a className="pb-3 animate-changed2">Phát triển ứng dụng di động</a>
            <a className="pb-3 animate-changed3">Tư vấn &#38; Thiết kế website</a>
            <a className="pb-3 animate-changed4">Dịch vụ kiểm thử phần mềm</a>
            <a className="pb-3 animate-changed5">Nhóm phát triển có chuyên môn cao</a>
            <a className="pb-3 animate-changed6">Dịch vụ IT Offshore &#38; Out Sourcing</a>
            <a className="animate-changed7">Phát triển phần mềm tùy chỉnh</a>
        </div>
    )
}