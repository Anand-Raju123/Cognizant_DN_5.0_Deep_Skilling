import officeImage from "./Office.jpg";

function App() {

  const office = {
    name: "DBS Business Center",
    rent: 55000,
    address: "Madhapur, Hyderabad"
  };

  const officeList = [
    {
      name: "Tech Park",
      rent: 45000,
      address: "Hyderabad"
    },
    {
      name: "Cyber Towers",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Infosys Campus",
      rent: 90000,
      address: "Chennai"
    }
  ];

  return (

    <div>

      <h1>Office Space Rental App</h1>

      <img
  src={officeImage}
  alt="Office"
  width="500"
/>

      <h2>Featured Office</h2>

      <h3>Name : {office.name}</h3>

      <h3
      style={{
        color: office.rent < 60000 ? "red" : "green"
      }}
      >
        Rent : Rs. {office.rent}
      </h3>

      <h3>Address : {office.address}</h3>

      <hr />

      <h2>Available Office Spaces</h2>

      {

      officeList.map((item,index)=>(

      <div key={index}>

      <h3>{item.name}</h3>

      <p
      style={{
      color:item.rent<60000?"red":"green"
      }}
      >

      Rent : Rs. {item.rent}

      </p>

      <p>

      Address : {item.address}

      </p>

      <hr/>

      </div>

      ))

      }

    </div>

  );

}

export default App;