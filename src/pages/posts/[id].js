// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// function Post() {
//   return (
//     <div>
//         {
//             post.map((posts)=> (
//                 <div key={posts.id}>
//                   <a>check</a>
//                 </div>
//             ))
//         }
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: { id: "ar-vr" },
//       },
//       {
//         params: { id: "blockchain" },
//       },
//       {
//         params: { id: "business" },
//       },
//       {
//         params: { id: "data-science" },
//       },
//       {
//         params: { id: "engineering" },
//       },
//     ],
//     fallback: false,
//   };
// }

// export async function getStaticProps({params}) {
//   const response = await fetch(
//     `https://api.gcosoftware.vn/wp-json/wp/v2/categories`
//   );
//   const data = await response.json();
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// export default Post;

const PostInfoPage = (()=>{
    return (
        <div> Post</div>
    )
})
export default PostInfoPage