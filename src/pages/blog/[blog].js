import { useEffect, useState } from "react";

export default function blog({ posts }) {
  return (
    <div className="prose lg:prose-xl  sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1230px] mx-auto">
      {posts.map((post) => (
        <div key={post.id} className="mx-48 my-8">
          <h1>{post.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.gcosoftware.vn/wp-json/wp/v2/posts?slug=${params.blog}`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/posts?slug=xay-dung-ung-dung-web-tien-bo-voi-kien-truc-jamstack"
  );
  const posts = await res.json();
  const paths = posts.map((post) => {
    return {
      params: { blog: post.slug },
    };
  });
  return { paths, fallback: "blocking" };
}
