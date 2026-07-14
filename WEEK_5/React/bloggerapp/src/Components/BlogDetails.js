function BlogDetails(){

const blogs=[
{id:1,title:"React Components",author:"Anand"},
{id:2,title:"Spring Boot REST",author:"Cognizant"}
];

return(

<div className="card">

<h2>📝 Blog Details</h2>

{
blogs.map(blog=>

<div className="item" key={blog.id}>
<h4>{blog.title}</h4>
<p>{blog.author}</p>
</div>

)
}

</div>

);

}

export default BlogDetails;