import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => {
        console.log(post.yoast_head_json.og_title)
        return (
          <>
            <div key={post.id}>
              <Link href={`/posts/${post.slug}`} passHref>
                 Linh nè
              </Link>
            </div>
          </>
        );
      })}
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
