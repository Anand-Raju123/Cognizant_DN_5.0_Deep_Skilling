import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {

  return (

    <div>

      <CalculateScore
        Name="P Anand Raju"
        School="Prasad V Potluri Siddhartha Institute Of Technology"
        Total={544}
        goal={600}
      />

    </div>

  );

}

export default App;