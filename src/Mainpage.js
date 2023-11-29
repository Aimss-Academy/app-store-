import React,  {Component} from "react"

import Tabitems from "./Tabitems"

import "./mainpage.css"
import Appcard from "./Appcard"


const tabDetails = [
    {tabId:"APP", displayText:"Apps"},
    {tabId:"GAME", displayText:"Games"},
    {tabId:"BOOK", displayText:"Books"},
]

const appDetails = [
    {
        id:0,
        name:"whatsapp",
        category:"APP",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    },

    {
        id:1,
        name:"facebook",
        category:"APP",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",
    },

    {
        id:2,
        name:"instagram",
        category:"APP",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    },

    {
        id:3,
        name:"pubge",
        category:"GAME",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },

    {
        id:4,
        name:"cod",
        category:"GAME",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },

    {
        id:5,
        name:"candy crush",
        category:"GAME",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },

    {
        id:6,
        name:"the secrate",
        category:"BOOK",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },

    {
        id:7,
        name:"revolution 2020",
        category:"BOOK",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },

    {
        id:8,
        name:"half girl friend",
        category:"BOOK",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },
]


class Mainpage extends Component{
    state = {
        activeTabId:tabDetails[0].tabId,
        searchInput : ""
    }

    clickedTab = (tabId) => {
        this.setState({activeTabId:tabId})
    }

    onChangeSearch = (event) => {
        this.setState({searchInput: event.target.value})
    }

    getfilteredApps = () => {
        const {activeTabId, searchInput} = this.state 
        const searchResults = appDetails.filter((eachItem) => eachItem.name.includes(searchInput))
        const filteredApps = searchResults.filter(eachApp => eachApp.category === activeTabId)

        return filteredApps
    }

    render(){
        const {activeTabId} = this.state 
        const filteredApps = this.getfilteredApps()
        return(
            <div className="app-container">
                <h1>play store</h1>
                <input type="search" onChange={this.onChangeSearch}/>
                <ul className="tab-list">
                    {
                        tabDetails.map((eachItem) => (
                            <Tabitems tabData={eachItem}
                                clickedTab={this.clickedTab}
                                isActive = {activeTabId === eachItem.tabId}
                            />
                        ))
                    }
                </ul>

                <ul className="app-list">
                    {
                        filteredApps.map((eachApp) => (
                            <Appcard appData={eachApp}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}


export default Mainpage