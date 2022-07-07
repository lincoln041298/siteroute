import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { useRouter } from "next/router";  
export default function Blog({ posts }) {
  const router = useRouter();
  console.log(posts)
  return (
    <div className=" max-w-[1230px] mx-auto min-h-[90px]">
      <Main></Main>
      <div className="flex items-center">
        <button
          className="p-4 text-normal text-slate-700"
          type="button"
          onClick={() => router.push("/all")}
        >
          Tất cả
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/categories"
  );
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
