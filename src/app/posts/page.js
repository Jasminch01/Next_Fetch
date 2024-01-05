
const page = async() => {
    const res = await fetch('http://localhost:3004/posts', {
        cache : 'force-cache'
    });
    const  posts =  await res.json();
    console.log(posts)
    return (
        <div>
            <h1 className="text-xl">Total Posts : {posts.length}</h1>
        </div>
    );
};

export default page;