import Link from "next/link";
import Image from "next/image";
import LogoSVG from "../../public/img/logoGCO/logogco.svg";
import Arowheader from "../../public/img/arrowheader.svg";
import Dropdownsvg from "../../public/img/3linesdrop.svg";
import { useEffect, useState } from "react";
import Styles from "../../scss/Header.module.scss";
import { useRouter } from "next/router";
import Navdrop from "./Navdrop";
import NavdropSide from "./Navdropside";

export default function Headers() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <section>
      <div className={scrollY >= 30 ? Styles.scroll : Styles.navbar}>
        <p onClick={() => router.push("/")}>
          <Image src={LogoSVG} width={150} height={47} alt="logo"></Image>
        </p>
        <button onClick={toggle} className={Styles.dropdown}>
          <p className="w-8">
            <Image src={Dropdownsvg} alt="dropdown"></Image>
          </p>
        </button>
        <div className={showMe ? Styles.displaydrop : Styles.navlist}>
          <ul className="flex items-start lg:items-center cursor-pointer flex-col lg:flex-row z-10 lg:z-0">
            <li className={Styles.major}>
              Ngành
              <p className="flex items-center font-normal text-lg">
                <Image src={Arowheader} alt="arowheader"></Image>
              </p>
              <Navdrop />
            </li>

            <li className={Styles.service}>
              Dịch vụ
              <p className="flex items-center">
                <Image src={Arowheader} alt="arowheader"></Image>
              </p>
              <NavdropSide />
            </li>

            <li className="mr-[41px] font-normal text-lg">Dự án</li>
            <li className="mr-[41px] font-normal text-lg">Về chúng tôi</li>
            <li className="mr-[41px] font-normal text-lg text-blue-600">
              <button type="button" onClick={() => router.push("/blog")}>
                Blog
              </button>
            </li>
            <li className="mr-[41px] font-normal text-lg">Tuyển dụng</li>
          </ul>
          <button>Liên hệ</button>
        </div>
      </div>
    </section>
  );
}
