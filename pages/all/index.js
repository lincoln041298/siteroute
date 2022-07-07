import Link from "next/link";
import Main from "../../components/Main";

function All({ posts, datas }) {
  return (
    <div className="max-w-[1230px] mx-auto">
      <Main></Main>
      <div className="flex">
        {datas.map((data) => (
          <div key={data.id}>
            <Link href={`/all/${data.slug}`}>
              <button className="p-3 ml-3">{data.name}</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg shadow-lg">
            <div>
              <p className="w-[386px] h-[320px] block">
                <img
                  src={post.acf.avtq}
                  alt="img for blog"
                  className="w-full h-full object-cover"
                ></img>
              </p>
              <h2 className="m-5 font-semibold text-lg line-clamp-1">
                {post.title.rendered}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=10&page=1"
  );
  const res = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/categories"
  );
  const data = await response.json();
  const post = await res.json();

  return {
    props: {
      posts: data,
      datas: post,
    },
  };
}

export default All;
