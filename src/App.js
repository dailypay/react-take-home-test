import { useEffect, useState } from 'react';
import api from './Api/Api';
import './App.css';
import Ballot from './Components/Ballot/Ballot'

function App() {
  const [ballots, setBallots] = useState([])
  const [allBallots, setAllBallots] = useState({})

  useEffect(() => {
    api.getBallotData().then(data => {
      setBallots(data.items)
      formatAllBallots(data.items)
    })
  }, [])

  const formatAllBallots = (ballots) => {
    let ballotObj = {}
    ballots.forEach(ballot => {
      if (!ballotObj[ballot.id]) {
        ballotObj[ballot.id] = ''
      }
    })
    setAllBallots(ballotObj)

  }

  const tallySelections = (selection, ballot) => {
    let newAllBallots = {...allBallots}
    newAllBallots[ballot] = selection
    setAllBallots(newAllBallots)
  }

  const renderBallots = (ballots) => {
    return ballots.map(ballot => {
      return <Ballot 
        key={ballot.id}
        ballot={ballot}
        tallySelections={tallySelections}
        />
    })
  }


  const submitAllBallots = () => {
    console.log(allBallots)
  }

  return (
    <>
      <header className='App-header'>
        <h1>Awards 2022</h1>
      </header>
      <div className="App">
        {renderBallots(ballots)}
      </div>
      <button onClick={() => submitAllBallots()}>Submit All Ballots</button>
    </>
  )
}

export default App;
