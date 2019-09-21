import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Home.css'
import Logo from "../../images/WW_LOGO_TRNSPRNT.png";
import Cookies from 'universal-cookie'
import Home from './Home'


export class Navbar extends Component {

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

        Parent.forceUpdate()    
    }
    

    


    render() {
        return (
            <div>
            <div className='logo-section'>

<div className="logo-section-contact">
    {/* <h2 style={{fontVariant: "small-caps"}}>+372 6008109<br/>11.00-22.00<br/>info@wanawiipuri.ee</h2> */}
        <h2 style={{fontVariant: "small-caps"}}>+000 0000000<br/>11.00-22.00<br/>abcd@abcdefghijk.ee</h2>

    <div className="logo-line-left"></div>
</div>

<div className="logo">
    <h2 className="anno">ANNO<br></br>2014</h2>
    <img src={Logo} className="logo" alt=""/>
</div>

<div className="logo-section-languages">
    <div className="inline">
        <button onClick={(e) => this.changeLang(e)} id="ru">RUS</button>
        <h2>•</h2>
        <button onClick={(e) => this.changeLang(e)} id="en">ENG</button>
        <h2>•</h2>
        <button onClick={(e) => this.changeLang(e)} id="et">EST</button>
        <h2>•</h2>
        <button onClick={(e) => this.changeLang(e)} id="fi">FIN</button>
        </div>
    <div className="logo-line-right"> {/*<p>RESTAURANT WANA WIIPURI • PIKK 33 • TALINN  </p> */ }</div>
</div>

{/* <div className="logo-line-divider"></div> */}


{/*  */}
{/* <div className="logo-line"></div> */}
</div>


{/* <p>Contact</p> */}
<h1>Wana Wiipuri</h1>
            </div>
        )
    }
}

export default Navbar
