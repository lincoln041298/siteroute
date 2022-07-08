import BlogList from "../../components/Bloglist";
import Main from "../../components/Main";
import HeaderNavbar from "../../components/Headernavbar";

export default function Slug({ categories, posts }) {
  return (
    <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1230px] mx-auto min-h-[90px]">
      <Main />
      <div>
        <HeaderNavbar posts={categories} />
        <BlogList datas={posts} />
      </div>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://api.gcosoftware.vn/wp-json/wp/v2/categories?lang=vi`
  );

  const categories = await response.json();
  const categoriesId = categories.find((item) => item.slug === params.slug);
  const res = await fetch(
    `https://api.gcosoftware.vn/wp-json/wp/v2/posts?lang=vi&per_page=12&page=1&categories=${categoriesId.id}`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/categories?lang=vi"
  );

  const posts = await res.json();
  const paths = posts.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });
  console.log(paths);

  return { paths, fallback: "blocking" };
}
