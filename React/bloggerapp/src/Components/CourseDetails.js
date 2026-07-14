function CourseDetails(){

const courses=[
{id:1,name:"React",duration:"30 Days"},
{id:2,name:"Java FSE",duration:"45 Days"}
];

return(

<div className="card">

<h2>🎓 Course Details</h2>

{
courses.map(course=>

<div className="item" key={course.id}>
<h4>{course.name}</h4>
<p>{course.duration}</p>
</div>

)
}

</div>

);

}

export default CourseDetails;