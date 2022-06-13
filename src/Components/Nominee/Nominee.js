import React from "react";
import '../../Styles/Nominee.css'

const Nominee = ({title, photo, id, highlight}) => {
    
    return (
        <div className={`nominee__card ${highlight}`} >
            <h3>{title}</h3>
            <div>
                <img className="nominee__img" src={photo} alt={`poster for film titled ${title}`}/>
            </div>
            {highlight ? 
                <button id={id}>Selected!</button> :
                <button id={id}>Nominate!</button>}
        </div>
    )
}

export default Nominee