import React from "react";
import '../../Styles/Result.css'

const Result = ({ toggleModal, userBallot }) => {
    
    const renderResults = Object.keys(userBallot).map(category => {
        return (
            <div key={category} className='modal__result-ballots'>
                <h4>For {category.split('-').join(' ')}:</h4>
                {userBallot[category] ? 
                    <p>{userBallot[category].split('-').join(' ').toUpperCase()}</p> : <p>None</p>}
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