import React, { Component } from 'react'
import './Home.css'
import Logo from "../../images/WW_LOGO_TRNSPRNT.png";
import ints from '../../images/WW_indrek.png';
import data from '../../languages';
export class Home extends Component {

    



    render() {
        console.log(data)
        return (
            <div>


            <div className='logo-section'>

                <div className="logo-section-contact">
                    <h2 style={{fontVariant: "small-caps"}}>+372 6008109<br/>11.00-22.00<br/>info@wanawiipuri.ee</h2>
                    <div className="logo-line-left"></div>
                </div>

                <div className="logo">
                    <h2 className="anno">ANNO<br></br>2014</h2>
                    <img src={Logo} className="logo" alt=""/>
                </div>
                
                <div className="logo-section-languages">
                    <div className="inline">
                        <button>RUS</button>
                        <h2>•</h2>
                        <button>ENG</button>
                        <h2>•</h2>
                        <button>EST</button>
                        <h2>•</h2>
                        <button>FIN</button>
                        </div>
                    <div className="logo-line-right"></div>
                </div>
               
                {/* <div className="logo-line-divider"></div> */}
                
                
                {/*  */}
                {/* <div className="logo-line"></div> */}
            </div>


                {/* <p>Contact</p> */}
                <h1>Wana Wiipuri</h1>

                <div className="container-fluid">

                <div className="row">
                {/* LEFT SIDE OF MENU */}
                <div className="col-4">
                    <div className="menu-entry">
                        <h2 className="item-name"></h2>
                        <h2 className="item-price"></h2>
                        <p className="item-desc"></p>
                    </div>


                </div>
                {/* PAPA PITCTURE */}
                <div className="col-4">
                    <img src={ints} className="ints" alt="Professor" />
                </div>
                {/* RIGHT SIDE OF MENU */}
                <div className="col-4">

                </div>

                </div>
                </div>
                
                </div>
        )
    }
}

export default Home
