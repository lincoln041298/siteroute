import Link from "next/link";
export default function BlogList({ datas }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {datas.map((data) => (
          <div key={data.id} className="rounded-lg shadow-lg">
            <Link href={`/blog/${data.slug}`}>
              <a className="w-full h-[320px] block">
                <img
                  src={data.acf.avtq}
                  alt="img for blog"
                  className="w-full h-full object-cover"
                ></img>
              </a>
            </Link>
            <Link  href={`/blog/${data.slug}`}>
              <a className="m-5 font-semibold text-lg line-clamp-1">
                {data.title.rendered}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
