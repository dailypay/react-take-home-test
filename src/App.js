import { useEffect, useState } from 'react';
import api from './Api/Api';
import './App.css';
import Ballot from './Components/Ballot/Ballot';

function App() {
  const [ballots, setBallots] = useState([])

  useEffect(() => {
    api.getBallotData().then(data => {
      setBallots(data.items)
    })
  }, [])

  const renderBallots = (ballots) => {
    return ballots.map(ballot => {
      // console.log(ballot)
      return <Ballot 
        key={ballot.id}
        ballot={ballot}
        />
    })
  }

  // console.log(ballots)
  return (
    <div className="App">
     
      {renderBallots(ballots)}
    </div>
  );
}

export default App;
