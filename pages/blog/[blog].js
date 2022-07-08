export default function blog({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          dangerouslySetInnerHTML={{
            __html: (post.content.rendered),
          }}
        ></div>
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
