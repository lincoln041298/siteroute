import { useRouter } from "next/router";

export default function HeaderNavber({ posts }) {
  const router = useRouter();
  return (
    <div className="flex overflow-hidden overflow-x-scroll mb-5">
      <button
        className="p-4 text-normal font-semibold text-slate-700 whitespace-nowrap"
        type="button"
        onClick={() => router.push("/blog")}
      >
        Tất Cả
      </button>
      {posts.map((post) => (
        <div key={post.id}>
          <button
            className="p-4 text-normal font-semibold text-slate-700 whitespace-nowrap"
            type="button"
            onClick={() => router.push(`/cat/${post.slug}`)}
          >
            {post.name}
          </button>
        </div>
      ))}
    </div>
  );
}
