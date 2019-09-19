import React, { Component } from 'react'
import './Home.css'
import Logo from "../../images/WW_LOGO_TRNSPRNT.png"

export class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="anno">ANNO<br></br>2014</h2>
            <img src={Logo} className="logo" alt=""/>
            <div className='logo-section'>
                <div className="logo-line"></div>
                <div className="logo-line-divider"></div>
                <div className="logo-line"></div>
            </div>


                {/* <p>Contact</p> */}
                <h1>Wana Wiipuri</h1>
                
            </div>
        )
    }
}

export default Home
