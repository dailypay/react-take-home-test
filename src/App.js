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
      return <Ballot 
        key={ballot.id}
        ballot={ballot}
        />
    })
  }
  return (
    <>
      <header className='App-header'>
        <h1>Awards 2022</h1>
      </header>
      <div className="App">
        {renderBallots(ballots)}
      </div>
    </>
  );
}

export default App;
