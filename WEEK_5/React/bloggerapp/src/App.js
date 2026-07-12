import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    return (

        <div className="container">

            <h1 className="title">Blogger Dashboard</h1>

            <div className="cardContainer">

                <BookDetails/>

                <BlogDetails/>

                <CourseDetails/>

            </div>

        </div>

    );

}

export default App;