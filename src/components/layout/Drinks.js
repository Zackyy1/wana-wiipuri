import React, { Component } from 'react'
import './css/Drinks.css'
import Cookies from 'universal-cookie';
import data from '../../languages';
export class Drinks extends Component {

    /**
     * 
     * @param {*} path - data.*
     * @param {string} type - tequila, beer, etc.
     */




    getArrayOfItems(path, type) {
        var array = [];
        var object1 = data[path][type];
        Object.keys(object1).map(drink => {
            array.push(object1[drink]);
        });
        return array;
    }

    makeDrinks(path, type, lang) {
        var array = this.getArrayOfItems(path, type);
        console.log(array);
        return array.map(drinkEntry => {
            return (
                <div key={drinkEntry['key']} className="drink-entry">
                    { drinkEntry['ru'] ? (<p className="drink-entry-name">{drinkEntry[lang]}</p>) : 
                    (<p className="drink-entry-name">{drinkEntry['name']}</p>) }
                    { drinkEntry['unit'] ? <p className="drink-entry-units">
                    {drinkEntry['amount']+drinkEntry['unit']}
                    </p> : null}
                    <p className="drink-entry-price">{drinkEntry['price']}</p>
                    {/* <p className="drink-entry-name">{drinkEntry[lang]}</p> */}
                </div>
            )
        })
    }

    render() {
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en";

        return (
            <div>
                <div className="divider black"></div>
                <div className="row drinks-menu">
                    <div className="col-4 soft-drinks">
                        <h2 className="drink-title" >soft drinks</h2>
                        <span cclassName="drink-entry" style={{'display':'flex'}}>
                            <p className="drink-entry-name">{data.text.drink_info['blank']}</p>
                            <p className="drink-entry-unit">{data.text.drink_info['size']}</p>
                            <p className="drink-entry-price">{data.text.drink_info['price']}</p>
                        </span>
                        <div className="divider thin black"></div>
                        {/* Drinks go here */}
                        { this.makeDrinks('drinks', 'soft_drinks', lang) }
                        { this.makeDrinks('drinks', 'hot', lang) }

                    </div>
                    <div className="col-4">
                    <h2 className="drink-title" >beer</h2>
                    </div>
                    <div className="col-4">
                    <h2 className="drink-title" >cider</h2>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Drinks
