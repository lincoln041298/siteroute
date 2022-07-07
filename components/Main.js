import Image from "next/image";
import Animation from "../public/img/animation.svg";
import Searchblog from "../public/img/searchblog.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Main({ posts }) {
  const router = useRouter();
  return (
    <main className="">
      <div className="flex items-center justify-between">
        <div className="flex flex-col flex-[0_0_50%]">
          <h1 className="text-6xl font-bold text-slate-800 mb-6">Blog</h1>
          <p className="text-lg">
            Chúng tôi muốn chia sẻ cái nhìn sâu sắc và kinh nghiệm của mình để
            giúp bạn tìm hiểu thêm về các chuyển đổi kỹ thuật số tuyệt vời. Để
            có thông tin, ý tưởng và thông điệp mạnh mẽ, hãy đọc các bài đăng
            trên blog của chúng tôi.
          </p>
        </div>

        <p>
          <Image
            src={Animation}
            alt="anition img"
            width={500}
            height={500}
          ></Image>
        </p>
      </div>
      <div className="mb-10 flex justify-between gap-5">
        <form className="flex items-center  flex-[0_0_70%]">
          <input
            className="px-[15px] py-[20px] border border-r-0 rounded-xl rounded-r-none w-full focus:outline-none"
            placeholder="Tìm kiếm bài viết..."
            type="text"
          ></input>
          <div className="p-[10px] border border-l-0 rounded-lg rounded-l-none">
            <button className="bg-blue-600 py-[10px] px-[30px] rounded-xl">
              <p className="flex items-center">
                <Image
                  src={Searchblog}
                  alt="search"
                  width={37.5}
                  height={37.5}
                ></Image>
              </p>
            </button>
          </div>
        </form>
        <form className="flex items-center">
          <input
            className="px-[15px] py-[20px] border border-r-0 rounded-xl rounded-r-none w-full focus:outline-none"
            placeholder="Đăng ký nhận tin"
            type="text"
          ></input>
          <div className="p-[10px] border border-l-0 rounded-lg rounded-l-none">
            <button className="bg-blue-600 py-[10px] px-[30px] rounded-xl">
              O
            </button>
          </div>
        </form>
      </div>
     
    </main>
  );
}
