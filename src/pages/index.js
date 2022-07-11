import Link from "next/link";
import Main from "src/components/Main";

function All({ posts, datas }) {
  return (
    <div className="text-center min-h-screen my-20">
      <h1 className="mb-10 text-blue-600">You can Click in here and click on navbar. Thank you!!!</h1>
      <Link href="/blog"><a className="text-center p-5 border border-blue-600 rounded-xl">Blog</a></Link>
    </div>
  );
}

export default All;
