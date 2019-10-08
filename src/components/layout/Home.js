import React, { Component } from 'react'
import './css/Home.css'
import ints from '../../images/WW_indrek.png';
import data from '../../languages';
import Cookies from 'universal-cookie'
export class Home extends Component {

    state = {
        lang: "en"
    }
    makeStarters() {
        var len = Object.keys(data.starters).length
        var starters = [];
        for (var i = 0; i < len; i++) {
            starters.push(data.starters[Object.keys(data.starters)[i]])
        }
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en"
       return starters.map(item => (
            
                <div className="menu-entry" key={item.key}>
                    <h2 className="item-name">{item[lang].name} {item.price}</h2>
                    {/* <h2 className="item-price">{item.price}</h2> */}
                    <p className="item-desc">{item[lang].desc}</p>
                </div>)
       )
    }

    makeGrill() {
        var len = Object.keys(data.grill).length
        var grill = [];
        for (var i = 0; i < len; i++) {
            grill.push(data.grill[Object.keys(data.grill)[i]])
        }
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en"
       return grill.map(item => (
            
                <div className="menu-entry" key={item.key}>
                    <h2 className="item-name">{item[lang].name} {item.price}</h2>
                    {/* <h2 className="item-price">{item.price}</h2> */}
                    <p className="item-desc">{item[lang].desc}</p>
                </div>)
       )
    }
    makeSoups() {
        var len = Object.keys(data.soups).length
        var soups = [];
        for (var i = 0; i < len; i++) {
            soups.push(data.soups[Object.keys(data.soups)[i]])
        }
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en"
       return soups.map(item => (
            
                <div className="menu-entry" key={item.key}>
                    <h2 className="item-name">{item[lang].name} {item.price}</h2>
                    {/* <h2 className="item-price">{item.price}</h2> */}
                    <p className="item-desc">{item[lang].desc}</p>
                </div>)
       )
    }

    makeDesserts() {
        var len = Object.keys(data.desserts).length
        var desserts = [];
        for (var i = 0; i < len; i++) {
            desserts.push(data.desserts[Object.keys(data.desserts)[i]])
        }
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en"
       return desserts.map(item => (
            
                <div className="menu-entry" key={item.key}>
                    <h2 className="item-name">{item[lang].name} {item.price}</h2>
                    {/* <h2 className="item-price">{item.price}</h2> */}
                    <p className="item-desc">{item[lang].desc}</p>
                </div>)
       )
    }


    render() {
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en"
        return (
            <div id="home">

                <div className="container">

                <div className="row">
                {/* LEFT SIDE OF MENU */}
                
                <div className="col-4 starters menu-col">
                    <h2 className="header">{data.text.starters[lang]}</h2>
                    { this.makeStarters() }
                </div>

                {/* PAPA PITCTURE */}
                <div className="col-4">
                    <div className="papa"><img src={ints} className="ints" alt="Professor" /></div>
                    <div className="soups menu-col">
                    <h2 className="header">{data.text.soups[lang]}</h2>
                    { this.makeSoups() }
                    </div>

                    <div className="desserts menu-col">
                    <h2 className="header">{data.text.desert[lang]}</h2>
                    { this.makeDesserts() }
                    </div>

                </div>
                {/* RIGHT SIDE OF MENU */}
                <div className="col-4 grill menu-col">
                <h2 className="header">{data.text.grill[lang]}</h2>
                    { this.makeGrill() }
                </div>

                </div>
                </div>
                
                </div>
        )
    }
}

export default Home
