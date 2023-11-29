import React from "react";

import "./appdata.css"

const Appcard = (props) => {
    const {appData} = props 
    const {name, imageUrl} = appData 
    return(
        <div className="app-card-container">
            <p>{name}</p>
            <img src={imageUrl} alt="app-card" className="image-logo "/>
        </div>
    )
}

export default Appcard