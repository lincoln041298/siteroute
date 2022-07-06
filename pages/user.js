import { data } from "autoprefixer"
import User from "../components/User"

function user ({ posts }) {
    console.log(posts)
    return (
        <>
            {
                posts.map((post)=> {
                    return (
                        <div key={post.id}>
                            <User post={post}></User>
                        </div>
                    )
                })
            }        
        
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch( "https://api.gcosoftware.vn/wp-json/wp/v2/categories")
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}

export default user