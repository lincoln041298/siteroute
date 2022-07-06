function All({ posts }) {
  console.log(posts);
  return (
    <>
            <div>
               Linh nè
            </div>
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

export default All;
