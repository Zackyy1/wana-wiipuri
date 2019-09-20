import React, { Component } from 'react'
import './Home.css'
import ints from '../../images/WW_indrek.png';
import data from '../../languages';
import Cookies from 'universal-cookie'
export class Home extends Component {

// TODO: MAKE THIS PART DYNAMIC
    state = {
        lang: "en"
    }

    // componentDidMount() {
    //     const cookies = new Cookies();
    //     cookies.addChangeListener("lang");
        
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component updated")
    }
    
    
    

    makeStarters() {

        var len = Object.keys(data.starters).length
        console.log("Data.starters has", len, "keys")

        var starters = [];
        for (var i = 0; i < len; i++) {
            starters.push(data.starters[Object.keys(data.starters)[i]])
        }
        console.log(starters)

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


    render() {
        console.log(data)
        return (
            <div id="home">

                <div className="container">

                <div className="row">
                {/* LEFT SIDE OF MENU */}
                
                <div className="col-4 starters">
                    { this.makeStarters() }
                </div>
                {/* PAPA PITCTURE */}
                <div className="col-4 papa">
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
