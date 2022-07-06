import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
        <div className="max-w-[1230px] mx-auto min-h-[90px]">
          <h1 className="text-5xl mt-20 text-center text-blue-500 capitalize">Nextjs rerender please choose one for Mount to project</h1>
          <div className="flex justify-center mt-20">
          <Link href="/user">
            <button className="p-4 border border-blue-600 rounded-lg">User</button>
          </Link>
          <Link href='/posts'>
            <button className="p-4 border border-blue-600  rounded-lg mx-20">Post</button>
          </Link>
          <Link href='/blog'>
            <button className="p-4 border border-blue-600  rounded-lg">Blog</button>
          </Link>
          </div>
        </div>
  );
}
