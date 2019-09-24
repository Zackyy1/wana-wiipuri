import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Home.css'
import Logo from "../../images/WW_LOGO_TRNSPRNT.png";
import Cookies from 'universal-cookie'
import Home from './Home'
import data from '../../languages';


export class Navbar extends Component {

        state = {
            lang: "en",
        }


    componentDidMount() {
        const cookies = new Cookies();
        this.setState({lang: cookies.get("lang") || "en"})
    }


    changeLang = (e) => {
        console.log("User tried changing language to", e.target.id)
        const cookies = new Cookies();
        cookies.set("lang", e.target.id);
        console.log(cookies.get("lang"))
        const Parent = ReactDOM.render(<Home />, document.getElementById('home'));
        this.forceUpdate();
        Parent.forceUpdate();    
    }
    

    


    render() {
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en";
        return (
            <div>
            <div className='logo-section container'>

                <div className="row">

<div className="col-5">
    <div className="logo-section-contact ">
        <h2 className="fixed" style={{fontVariant: "small-caps"}}>+372 6008109<br/>11.00-22.00<br/>info@wanawiipuri.ee</h2>
        <div className="logo-line-left"></div>
    </div>
</div>

<div className="col-2">
    <div className="logo">
        <h2 className="anno">ANNO<br />2014</h2>
        <img src={Logo} className="logo-img" alt=""/>
    </div>
</div>


<div className="col-5">
    <div className="logo-section-languages fixed">
        <div className="inline">
            <button onClick={(e) => this.changeLang(e)} id="ru">RUS</button>
            <h2>•</h2>
            <button onClick={(e) => this.changeLang(e)} id="en">ENG</button>
            <h2>•</h2>
            <button onClick={(e) => this.changeLang(e)} id="et">EST</button>
            <h2>•</h2>
            <button onClick={(e) => this.changeLang(e)} id="fi">FIN</button>
            </div>
        <div className="logo-line-right"> <p>RESTAURANT WANA WIIPURI • PIKK 33 • TALINN</p></div>
    </div>
</div>
</div>

</div>


<h1>Wana Wiipuri</h1>

    <div className="nav-panel">
            {/* Drinks, Special offers, Group menu, The Christmas feast */}
            <button className="nav-button">{data.text.drinks[lang]}</button>
            <div className="dropdown">
                <button className="nav-button dropdown-toggle" id="menuDropdownButton" data-toggle="dropdown-disabled" aria-haspopup="true" aria-expanded="true">{data.text.menu[lang]}</button>
                <div className="dropdown-menu" aria-labelledby="menuDropdownButton" id="menu-dropdown">
                    <button className="nav-button-dropdown dropdown-item">{data.text.special[lang]}</button>
                    <button className="nav-button-dropdown dropdown-item">{data.text.feast[lang]}</button>
                    <button className="nav-button-dropdown dropdown-item">{data.text.group[lang]}</button>


                </div>
            </div>
            
            <button className="nav-button">{data.text.gallery[lang]}</button>
            {/* <button className="nav-button">{data.text.special[lang]}</button> */}

    </div>


            </div>
        )
    }
}

export default Navbar
