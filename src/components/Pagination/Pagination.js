import Link from "next/link"

export default function Pagination({page, posts}) {
    const items = [1, 2]
    return (
        <div className="flex">
            {items.map((item)=> {
                return (
                    <div key={item} className="m-2 px-2 cursor-pointer rounded-full border border-blue-600">
                        <Link href={`/blog/page/${item}`}>
                            <a>
                                {item}
                            </a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}