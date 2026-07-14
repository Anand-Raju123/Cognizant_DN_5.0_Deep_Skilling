function BookDetails(){

const books=[
{id:1,name:"React Guide",author:"Jordan Walke"},
{id:2,name:"Java Programming",author:"James Gosling"},
{id:3,name:"Spring Boot",author:"Rod Johnson"}
];

return(

<div className="card">

<h2>📚 Book Details</h2>

{
books.map(book=>

<div className="item" key={book.id}>
<h4>{book.name}</h4>
<p>{book.author}</p>
</div>

)
}

</div>

);

}

export default BookDetails;