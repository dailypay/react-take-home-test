import React from "react";
import '../../Styles/Nominee.css'

const Nominee = ({title, photo}) => {
    // console.log(title)
    return (
        <div className="nominee__card">
            <h3>{title}</h3>
            <img className="nominee__img" src={photo} alt={`poster for film titled ${title}`}/>
            <button>Nominate!</button>
        </div>
    )
}

export default Nominee