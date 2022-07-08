import { useEffect, useState } from "react";
import Main from "../../components/Main";
import { useRouter } from "next/router";  
import BlogList from "../../components/Bloglist";
import HeaderNavbar from "../../components/Headernavbar";

export default function Blog({ posts, datas }) {
  const router = useRouter();
  console.log(posts.name)
  return (
    <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1230px] mx-auto min-h-[90px]">
      <Main/>
      <div className="mb-10">
        <HeaderNavbar posts={posts}/>
        <BlogList datas={datas}/>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/categories?lang=vi"
  );
  const res = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=10&page=1"
  )
  const data = await response.json();
  const posts = await res.json()
  return {
    props: {
      posts: data,
      datas: posts
    },
  };
}
