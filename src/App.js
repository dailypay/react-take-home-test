import { useEffect, useState } from 'react';
import api from './Api/Api';
import './App.css';
import Ballot from './Components/Ballot/Ballot'
import Result from './Components/Result/Result';

function App() {
  const [ballots, setBallots] = useState([])
  const [userBallot, setUserBallot] = useState({})
  const [modal, setModal] = useState(false)

  useEffect(() => {
    api.getBallotData().then(data => {
      setBallots(data.items)
      initializeUserBallot(data.items)
    })
  }, [])

  const initializeUserBallot = (ballots) => {
    let emptyBallot = {}
    ballots.forEach(category => emptyBallot[category.id] = '')
    setUserBallot(emptyBallot)
  }

  const tallySelections = (selection, ballot) => {
    let newAllBallots = {...userBallot}
    newAllBallots[ballot] = selection
    setUserBallot(newAllBallots)
  }

  const toggleModal = () => {
    modal ? setModal(false) : setModal(true)
  }

  return (
    <>
      <header className='App-header'>
        <h1>Awards 2022</h1>
      </header>
      <div className="App">
        <Ballot ballots={ballots} tallySelections={tallySelections}/>
      </div>
      <button onClick={() => toggleModal()}>Submit All Ballots</button>
      {modal && <Result toggleModal={toggleModal} userBallot={userBallot}/>}
    </>
  )
}

export default App;
