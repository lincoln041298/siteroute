import Link from "next/link";
import Image from "next/image";
import LogoSVG from "../public/img/logoGCO/logogco.svg";
import Arowheader from "../public/img/arrowheader.svg";
import { useEffect, useState } from "react";
import Styles from "../scss/Header.module.scss";
import { useRouter } from 'next/router'

export default function Headers() {
  const router = useRouter()
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
  return (
    <section>
      <div className={scrollY >= 30 ? Styles.scroll : Styles.navbar}>
        <p onClick={() => router.push('/')}>
          <Image src={LogoSVG} width={150} height={47} alt="logo"></Image>
        </p>
        <div className="flex">
          <ul className="flex items-center cursor-pointer">
            <li className="flex mr-[41px] font-normal text-lg">
              Ngành
              <p className="flex items-center font-normal text-lg">
                <Image src={Arowheader} alt="arowheader"></Image>
              </p>
            </li>
            <li className="flex mr-[41px] font-normal text-lg">
              Dịch vụ
              <p className="flex items-center">
                <Image src={Arowheader} alt="arowheader"></Image>
              </p>
            </li>
            <li className="mr-[41px] font-normal text-lg">Dự án</li>
            <li className="mr-[41px] font-normal text-lg">Về chúng tôi</li>
            <li className="mr-[41px] font-normal text-lg text-blue-600">
              Blog
            </li>
            <li className="mr-[41px] font-normal text-lg">Tuyển dụng</li>
          </ul>
          <button>Liên hệ</button>
        </div>
      </div>
    </section>
  );
}
