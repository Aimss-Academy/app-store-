import React from "react"

import "./tabitems.css"

const Tabitems = (props) => {
    const {tabData, clickedTab, isActive} = props 
    const {displayText, tabId} = tabData

    const onClickTab = () => {
        clickedTab(tabId)
    }

    const activeTabClassName = isActive ? "atc-btn" : ""

    return(
        <li className="tab-list-container">
            <button className={`display-text ${activeTabClassName}`} onClick={onClickTab}>{displayText}</button>
        </li>
    )
}

export default Tabitems