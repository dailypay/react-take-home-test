import React, { useState } from 'react';
import '../../Styles/Ballot.css'
import Nominee from '../Nominee/Nominee';

const Ballot = ({ ballot, tallySelections }) => {
  const [selection, setSelection] = useState('')

    const renderNominees = (nominees) => {
      return nominees.map(nom => {
        let highlight = '';
        if (nom.id === selection) {
          highlight = 'highlight'
        }
        return <Nominee
            key={nom.id}
            id={nom.id} 
            title={nom.title}
            photo={nom.photoUrL}
            highlight={highlight}
            />
      })
    }

  const toggleHighlight = (event) => {
    if (event.target.id) {
      setSelection(event.target.id)
      tallySelections(event.target.id, ballot.id)
    }
  }

  return (
    <>
    <div className='ballot' >
      <h2>{ballot.title}</h2>
    </div>
    <div className='nominees' onClick={event => toggleHighlight(event)}>
      {renderNominees(ballot.items)}
    </div>
    </>
  )
}

export default Ballot;