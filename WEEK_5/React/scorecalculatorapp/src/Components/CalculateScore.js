import '../Stylesheets/mystyle.css';

function CalculateScore(props) {

    const score = ((props.Total / props.goal) * 100).toFixed(2);

    return (
        <div className="container">

            <h1>Student Details:</h1>

            <h3>
                <span className="label">Name:</span>
                <span className="blue"> {props.Name}</span>
            </h3>

            <h3>
                <span className="label">School:</span>
                <span className="red"> {props.School}</span>
            </h3>

            <h3>
                <span className="label">Total:</span>
                <span className="red"> {props.Total}Marks</span>
            </h3>

            <h3>
                <span className="label">Score:</span>
                <span className="green">{score}%</span>
            </h3>

        </div>
    );
}

export default CalculateScore;