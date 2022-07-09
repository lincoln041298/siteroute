import Link from "next/link";
function PostList({ posts }) {
  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <div key={post.id}>{post.id}</div>)}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=5&page=1"
  );
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}

export default PostList;
