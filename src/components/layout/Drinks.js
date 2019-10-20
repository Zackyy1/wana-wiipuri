import React, { Component } from 'react'
import './css/Drinks.css'
import Cookies from 'universal-cookie';
import data from '../../languages';
import ints from '../../images/WW_indrek.png';

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
                    null}
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
                            {/* { this.makeDrinks('drinks', 'hot', lang) } */}
                            </tbody>
                        </table>
                        {/* Tequila */}
                        <h2 className="drink-title sub-title" >{ data.text.drink_info.tequila[lang] }</h2>
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
                            { this.makeDrinks('drinks', 'tequila', lang) }
                            {/* { this.makeDrinks('drinks', 'hot', lang) } */}
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
                            {/* TITLE to DRINK LIST DIVIDER */}
                            <tr>
                                <td className="divider thin black"></td>
                            </tr>
                            {/*  DRINK LIST */}
                            { this.makeDrinks('drinks', 'gin', lang) }
                            {/* { this.makeDrinks('drinks', 'hot', lang) } */}
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
                            {/* { this.makeDrinks('drinks', 'hot', lang) } */}
                            </tbody>
                        </table>
                        {/*  CIDERS */}
                        <h2 className="drink-title" >{ data.text.drink_info.cider[lang] }</h2>
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
                            { this.makeDrinks('drinks', 'cider', lang) }
                            {/* { this.makeDrinks('drinks', 'hot', lang) } */}
                            </tbody>
                        </table>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Drinks
