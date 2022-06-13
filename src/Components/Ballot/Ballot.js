import React from "react";
import BallotCategory from "../BallotCategory/BallotCategory";

const Ballot = ({ ballots, tallySelections }) => {

  const renderBallots = (ballots) => {
    return ballots.map(ballot => {
      return <BallotCategory 
        key={ballot.id}
        ballot={ballot}
        tallySelections={tallySelections}
        />
    })
  }

  return (
    <>
      {renderBallots(ballots)}
    </>
  )

}



export default Ballot