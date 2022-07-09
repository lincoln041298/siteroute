import Main from "../../components/Main";
import HeaderNavber from "../../components/Headernavbar";
import BlogList from "../../components/Bloglist";

export default function Cat( {posts} ) {

  return (
    <div>
      <div className=" max-w-[1230px] mx-auto min-h-[90px]">
        <Main />
        <div>
          <HeaderNavber posts={posts}/>
        </div>
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
