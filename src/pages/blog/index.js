import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import Main from "src/components/Main";
import BlogList from "src/components/Bloglist";
import HeaderNavbar from "src/components/Headernavbar";
import Pagination from "src/components/Pagination/Pagination";

export default function Blog({ posts, datas, page }) {
  const router = useRouter();
  return (
    <div className="px-5 sm:px-0 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1230px] mx-auto min-h-[90px]">
      <Main />
      <div className="mb-10">
        <HeaderNavbar posts={posts} />
        <BlogList datas={datas} />
      </div>
      <Pagination posts={posts} page={page}/>  
    </div>
  );
}

export async function getStaticProps(ctx) {
  const page = ctx.params?.page || 1;
  const response = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/categories?lang=vi"
  );
  const res = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=10&page=1"
  );
  const data = await response.json();
  const posts = await res.json();
  return {
    props: {
      posts: data,
      datas: posts,
      page
    },
  };
}
