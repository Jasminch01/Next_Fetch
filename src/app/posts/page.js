import Link from "next/link";

const page = async () => {
  const res = await fetch("http://localhost:3004/posts", {
    // cache: "force-cache", for static site genaration ssg
    cache : 'no-store'
    //for SSR server site randering
  });
  const posts = await res.json();
//   console.log(posts);
  return (
    <div className="">
      <h1 className="text-xl">Total Postssss : {posts.length}</h1>
      <div className="grid-cols-3 grid space-y-3 space-x-3">
        {posts.map((post) => (
          <div key={post.id}>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <p>Likes : {post.likes}</p>
              </div>
              <Link href={`/posts/${post.id}`}> <button className="btn-primary btn">See more</button> </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
