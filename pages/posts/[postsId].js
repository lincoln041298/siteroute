import Link from "next/link";
import { useEffect, useState } from "react";

function Post({ post }) {
    console.log(post.yoast_head_json)
  return (
    <>
        {
            // post.map((posts)=> (
            //     <div key={posts.id}>
            //         {posts.yoast_head_json.name}
            //         {posts.yoast_head_json.description}
            //     </div>
            // ))
        }
    </>
  );
}
export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postsId: "ar-vr" },
      },
      {
        params: { postsId: "blockchain" },
      },
      {
        params: { postsId: "business" },
      },
      {
        params: { postsId: "data-science" },
      },
      {
        params: { postsId: "engineering" },
      },

    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://api.gcosoftware.vn/wp-json/wp/v2/categories`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
