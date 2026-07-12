import FlightDetails from "./FlightDetails";

function User(props) {

    return (

        <div>

            <h1>Welcome User</h1>

            <FlightDetails />

            <h3>You can now book your tickets.</h3>

            <button>
                Book Ticket
            </button>

            <br /><br />

            <button onClick={props.logout}>
                Logout
            </button>

        </div>

    );

}

export default User;