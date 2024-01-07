import Link from "next/link";

//for static site genaration SSG 
export async function generateStaticParams() {
  const data = await fetch(`http://localhost:3004/posts`);
  const posts = await data.json();
  const ids = posts.map(post => ({
    id : post.id + ''
  })).slice(0, 3)
//   console.log(ids)
  return ids;
}

const DynamicPage = async ({ params }) => {
  // console.log(params.postid)
  const data = await fetch(`http://localhost:3004/posts/${params.postid}`);
  const post = await data.json();
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.description}</p>
          <p>Likes : {post.likes}</p>
        </div>
        <Link href={`/posts`}>
          {" "}
          <button className="btn-primary btn">Back</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default DynamicPage;
