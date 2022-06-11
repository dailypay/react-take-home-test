import React from "react";
import '../../Styles/Result.css'

const Result = ({ toggleModal, allBallots }) => {
    
    const renderResults = Object.keys(allBallots).map(e => {
        return (
            <div key={e} className='modal__result-ballots'>
                <h4>For {e.split('-').join(' ')}:</h4>
                {allBallots[e] ? 
                <p>{allBallots[e].split('-').join(' ').toUpperCase()}</p> : <p>None</p>}
            </div>
        )
    })

    return (
        <div className="modal">
            <div className='modal__result'>
                <h4>Success! You submitted:</h4>
                <div className="modal__result-ballots-box">
                    {renderResults}
                </div>
                <button className="modal__close-btn" onClick={() => toggleModal()}>X</button>
            </div>
        </div>
    )
}

export default Result