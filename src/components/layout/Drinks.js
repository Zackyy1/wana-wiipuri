import React, { Component } from 'react'
import './css/Drinks.css'
import Cookies from 'universal-cookie';
import data from '../../languages';
import ints from '../../images/WW_indrek.png';
import Ryypy from "../../images/ryypy.png";

import '../../libraries/corner.js';
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
                <tr key={drinkEntry['key']} className="drink-entry">
                    { drinkEntry['ru'] ? 
                    (<td className="drink-entry-name">{drinkEntry[lang]}</td>) : 
                    (<td className="drink-entry-name">{drinkEntry['name']}</td>) }
                    { drinkEntry['unit'] ? 
                    <td className="drink-entry-units">{drinkEntry['amount']+drinkEntry['unit']} </td> :
                    <td className="drink-entry-units helper">{data.text.drink_info['blank']}</td>}
                    <td className="drink-entry-price">{drinkEntry['price']}</td>
                    {/* <p className="drink-entry-name">{drinkEntry[lang]}</p> */}
                </tr>
            )
        })
    }


    render() {
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en";

        return (
            <div>
                <div className="divider black"></div>
                <div className="row drinks-menu bottom-border">
                    <div className="col-4 soft-drinks">
                        {/* TITLE */}
                        <h2 className="drink-title" >{ data.text.drink_info.soft_drinks[lang] }</h2>
                        <table>
                            <tbody>
                            <tr className="drink-entry"> 
                                {/* HELPERS */}
                                <td className="drink-entry-name helper">{data.text.drink_info['blank']}</td>
                                <td className="drink-entry-unit helper">{data.text.drink_info.size[lang]}</td>
                                <td className="drink-entry-price helper">{data.text.drink_info.price[lang]}</td>
                            </tr>
                            {/* TITLE to DRINK LIST DIVIDER */}
                            <tr>
                                <td className="divider thin black"></td>
                            </tr>
                            {/*  DRINK LIST */}
                            { this.makeDrinks('drinks', 'soft_drinks', lang) }
                            <tr>
                                <td className="divider thin black"></td>
                            </tr>
                            </tbody>
                        </table>
                        {/* Tequila */}
                        <h2 className="drink-title sub-title" >{ data.text.drink_info.tequila[lang] }</h2>
                        <table>
                            <tbody>
                            <tr className="drink-entry"> 
                            </tr>
                            { this.makeDrinks('drinks', 'tequila', lang) }
                            </tbody>
                        </table>
                        {/* GIN */}
                        
                    </div>
                    <div className="col-4">

                        <div className="papa"><img src={ints} className="ints" alt="Professor" /></div>
                        <div className="divider thin black"></div>
                        <h2 className="drink-title sub-title" >{ data.text.drink_info.gin[lang] }</h2>
                        <table>
                            <tbody>
                            <tr className="drink-entry"> 
                                {/* HELPERS */}
                                <td className="drink-entry-name helper">{data.text.drink_info['blank']}</td>
                                <td className="drink-entry-unit helper">{data.text.drink_info.size[lang]}</td>
                                <td className="drink-entry-price helper">{data.text.drink_info.price[lang]}</td>
                            </tr>
                            { this.makeDrinks('drinks', 'gin', lang) }
                            </tbody>
                        </table>
                    </div>


                    <div className="col-4 beers">
                    <h2 className="drink-title" >{ data.text.drink_info.beer[lang] }</h2>
                        <table>
                            <tbody>
                            <tr className="drink-entry"> 
                                {/* HELPERS */}
                                <td className="drink-entry-name helper">{data.text.drink_info['blank']}</td>
                                <td className="drink-entry-unit helper">{data.text.drink_info.size[lang]}</td>
                                <td className="drink-entry-price helper">{data.text.drink_info.price[lang]}</td>
                            </tr>
                            {/* TITLE to DRINK LIST DIVIDER */}
                            <tr>
                                <td className="divider thin black"></td>
                            </tr>
                            {/*  DRINK LIST */}
                            { this.makeDrinks('drinks', 'beer', lang) }
                            </tbody>
                        </table>
                        {/*  CIDERS */}
                        <h2 className="drink-title" >{ data.text.drink_info.cider[lang] }</h2>
                        <table>
                            <tbody>
                            <tr className="drink-entry"></tr>
                            { this.makeDrinks('drinks', 'cider', lang) }
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className="row">
                    <div className="col-8 hot-drinks">
                        <div className="round hot-title" id="hot-title">
                            <div className="round-2">
                                <h2 className="hot-title">{ data.text.drink_info.hot[lang] }</h2>
                            </div>
                            <table  id="hot-table">
                                <tbody>
                                    {/* HELPERS */}
                                    <tr className="drink-entry">
                                        <td className="drink-entry-name helper">{data.text.drink_info['blank']}</td>
                                        <td className="drink-entry-units helper">{data.text.drink_info['blank']}</td>
                                        <td className="drink-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                    </tr>
                                    {this.makeDrinks('drinks', 'hot', lang)}
                                </tbody>
                            </table>
                            <div className="row mtop">
                                <div className="col vodka-section">
                                    {/* VODKA */}
                                    <div className="two-sided">
                                        <div className="">
                                            <h2 className="round-3 vodka-title">{ data.text.drink_info.vodka[lang] }</h2>
                                            <h5>MARSKIN RYYPY</h5>
                                            <h4>4cl 5,5</h4>
                                        </div>
                                        <img className="ryypy-2" src={Ryypy} alt=""/>
                                    </div>
                                <table  id="vodka-table">
                                    <tbody>
                                        {/* HELPERS */}
                                        <tr className="drink-entry">
                                            <td className="drink-entry-name helper">{data.text.drink_info['blank']}</td>
                                            <td className="drink-entry-units helper">{data.text.drink_info.size[lang]}</td>
                                            <td className="drink-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                        </tr>
                                        {/* <tr>
                                            <td className="divider thin black"></td>
                                        </tr> */}
                                        {this.makeDrinks('drinks', 'vodka', lang)}
                                    </tbody>
                                </table>
                                    
                                </div>
                                <div className="col">
                                    {/* COGNAC, LIQUEUR */}
                                    <div className="cognac-brandy-title">
                                        <h2 className="cognac-title-1" >{ data.text.drink_info.cognac_brandy_1[lang] }</h2>
                                        <div className="cognac-title-2-div">
                                            <h2 className="cognac-title-2">{ data.text.drink_info.cognac_brandy_2[lang] }</h2>
                                        </div>
                                        <h2 className="cognac-title-1" >{ data.text.drink_info.cognac_brandy_3[lang] }</h2>
                                    </div>
                                    <table  id="cognac-table">
                                    <tbody>
                                        {/* HELPERS */}
                                        <tr className="drink-entry">
                                            <td className="drink-entry-name helper">{data.text.drink_info['blank']}</td>
                                            <td className="drink-entry-units helper">{data.text.drink_info.size[lang]}</td>
                                            <td className="drink-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                        </tr>
                                        {/* <tr>
                                            <td className="divider thin black"></td>
                                        </tr> */}
                                        {this.makeDrinks('drinks', 'cognac', lang)}
                                    </tbody>
                                </table>
                                        {/* LIQUEUR */}
                                <h2 className="liqueur-title" >{ data.text.drink_info.liqueur[lang] }</h2>
                                <table  id="cognac-table">
                                    <tbody>
                                        <tr className="drink-entry">
                                            <td className="drink-entry-name helper">{data.text.drink_info['blank']}</td>
                                            <td className="drink-entry-units helper">{data.text.drink_info.size[lang]}</td>
                                            <td className="drink-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                        </tr>
                                        {this.makeDrinks('drinks', 'liqueur', lang)}
                                    </tbody>
                                </table>

                                </div>
                            </div>
                        </div>
                    </div>  
                    
                    <div className="col-4">
                        {/* WHISKEY */}
                        <h2 className="whiskey-title">{ data.text.drink_info.whiskey[lang] }</h2>    
                        <table  id="">
                            <tbody>
                                {/* HELPERS */}
                                <tr className="drink-entry">
                                    <td className="drink-entry-name helper">{data.text.drink_info['blank']}</td>
                                    <td className="drink-entry-units helper">{data.text.drink_info.size[lang]}</td>
                                    <td className="drink-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                </tr>
                                {/* <tr>
                                    <td className="divider thin black"></td>
                                </tr> */}
                                {this.makeDrinks('drinks', 'whiskey', lang)}
                            </tbody>
                        </table>
                        {/* ARMAGNAC */}
                        <h2 className="armagnac-title">{ data.text.drink_info.armagnac[lang] }</h2>    
                        <table  id="">
                            <tbody>
                                {/* HELPERS */}
                                <tr className="drink-entry">
                                    <td className="drink-entry-name helper">{data.text.drink_info['blank']}</td>
                                    <td className="drink-entry-units helper">{data.text.drink_info.size[lang]}</td>
                                    <td className="drink-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                </tr>
                                {/* <tr>
                                    <td className="divider thin black"></td>
                                </tr> */}
                                {this.makeDrinks('drinks', 'armagnac', lang)}
                            </tbody>
                        </table>
                        {/* RUM */}
                        <h2 className="whiskey-title">{ data.text.drink_info.rum[lang] }</h2>    
                        <table  id="">
                            <tbody>
                                {/* HELPERS */}
                                <tr className="drink-entry">
                                    <td className="drink-entry-name helper">{data.text.drink_info['blank']}</td>
                                    <td className="drink-entry-units helper">{data.text.drink_info.size[lang]}</td>
                                    <td className="drink-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                </tr>
                                {/* <tr>
                                    <td className="divider thin black"></td>
                                </tr> */}
                                {this.makeDrinks('drinks', 'rum', lang)}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Drinks
