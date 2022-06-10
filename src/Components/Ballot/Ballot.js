import React from 'react';
import '../../Styles/Ballot.css'
import Nominee from '../Nominee/Nominee';

const Ballot = ({ ballot }) => {
    const renderNominees = (nominees) => {
      return nominees.map(nom => {
        return <Nominee
            key={nom.id} 
            title={nom.title}
            photo={nom.photoUrL}
            />
      })
    }

  return (
    <>
    <div className='ballot'>
      <h2>{ballot.title}</h2>
    </div>
    <div className='nominees'>
      {renderNominees(ballot.items)}
    </div>
    </>
  )
}

export default Ballot;