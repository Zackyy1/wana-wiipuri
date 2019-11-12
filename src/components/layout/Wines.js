import React, { Component } from 'react'
import './css/Wines.css'
import Cookies from 'universal-cookie';
import data from '../../languages';
import Ornament from '../../images/ornaments-vector-3.png';
import { directive } from '@babel/types';
export class Wines extends Component {

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
        return array.map(wineEntry => {
            return (
                <tr key={wineEntry['key']} className="wine-entry">
                    { wineEntry['ru'] ? 
                    (<td className="wine-entry-name">{wineEntry[lang]}</td>) : 
                    (<td className="wine-entry-name">{wineEntry['name']} <span className="wine-entry-country">{wineEntry['country']}</span></td>) }
                    { wineEntry['unit'] ? 
                    <td className="wine-entry-units">{wineEntry['amount']+wineEntry['unit']} </td> :
                    <td className="wine-entry-units helper">{data.text.drink_info['blank']}</td>}
                    <td className="wine-entry-price">{wineEntry['price']}</td>
                    {/* <p className="drink-entry-name">{drinkEntry[lang]}</p> */}
                </tr>
            )
        })
    }

    makeWineDrinks(path, type, lang) {
        var array = this.getArrayOfItems(path, type);
        return array.map(wineEntry => {
            return (
                <tr key={wineEntry['key']} className="wine-entry">
                    { wineEntry['ru'] ? 
                    (<td className="wine-entry-name">{wineEntry[lang]}</td>) : 
                    (<td className="wine-entry-name">{wineEntry['name']}, <span className="wine-entry-country">{wineEntry['country']}</span></td>) }
                    { wineEntry['unit'] ? 
                    <td className="wine-entry-units">{wineEntry['amount']+wineEntry['unit']} </td> :
                    <td className="wine-entry-units helper">{data.text.drink_info['blank']}</td>}
                    <td className="wine-entry-price">{wineEntry['price']}</td>
                    {/* <p className="drink-entry-name">{drinkEntry[lang]}</p> */}
                </tr>
            )
        })
    }

    makeDrinksList(path, type, lang) {
        var array = this.getArrayOfItems(path, type);
        return array.map(champagneEntry => {
            return (
                <div key={champagneEntry['key']} className="champagne-entry">
                    <p className="champagne-entry-info">
                        {champagneEntry['name']}
                        <br></br>
                        {champagneEntry['amount']}{champagneEntry['unit']} - {champagneEntry['price']}€
                    </p>
                </div>
            )
        })
    }

    render() {
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en";

        return (
            <div className="wine_page">
                <div className="wine-headers">
                <div className="row">
                    
                        <div className="col-4 wine-header wine-header-round">{data.text.red_wines[lang]}</div>
                        <div className="col-4 wine-header-main"><h2 className="wine-header-main">{data.text.wines_header[lang]}</h2></div>

                        <div className="col-4 wine-header wine-header-round">{data.text.white_wines[lang]}</div>

                    </div>
                </div>
                <div className="row red-white-row">

                    <div className="col-6 red-wines">
                        {/* RED WINES */}
                        <table className="red-wines-table">
                            <tbody>
                                <tr className="wine-entry"> 
                                    {/* HELPERS */}
                                    <td className="wine-entry-name helper">{data.text.drink_info['blank']}</td>
                                    <td className="wine-entry-unit helper">{data.text.drink_info.size[lang]}</td>
                                    <td className="wine-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                </tr>
                                {/*  DRINK LIST */}
                                { this.makeWineDrinks('drinks', 'red_wines', lang) }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-6 white-wines">
                        {/* WHITE WINES */}
                        <div ><img className="art-placeholder" src={Ornament} alt=""/></div>
                        <table className="white-wines-table">
                            <tbody>
                                <tr className="wine-entry"> 
                                    {/* HELPERS */}
                                    <td className="wine-entry-name helper">{data.text.drink_info['blank']}</td>
                                    <td className="wine-entry-unit helper">{data.text.drink_info.size[lang]}</td>
                                    <td className="wine-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                </tr>
                                {/*  DRINK LIST */}
                                { this.makeWineDrinks('drinks', 'white_wines', lang) }
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-8">
                        {/* House Wines */}
                        <div className="house-wines-round">
                            <div className="house-white house-entry">
                                <h2 className="house-wine-title">white wine</h2>
                                <p className="house-wines-prices">75cl - 27€<br></br>
                                24cl - 8,7€<br></br>
                                16cl - 5,9€</p>
                            </div>
                            <div className="house-red house-entry">
                                <h2 className="house-wine-title">red wine</h2>
                                <p className="house-wines-prices">75cl - 27€<br></br>
                                24cl - 8,7€<br></br>
                                16cl - 5,9€</p>
                            </div>
                            <div className="house-rose house-entry">
                                <h2 className="house-wine-title">rose wine</h2>
                                <p className="house-wines-prices">75cl - 27€<br></br>
                                24cl - 8,7€<br></br>
                                16cl - 5,9€</p>
                            </div>

                            
                        </div>

                        {/* Grappa, vermut, dessert wines */}

                        <div className="other-drinks">
                            <div className="grappa-section">
                                <h2 className="grappa-title">{data.text.grappa[lang]}</h2>
                                <div ><img className="art-placeholder-2" src={Ornament} alt=""/></div>
                                <table className="grappa-table">
                                    <tbody>
                                        <tr className="wine-entry"> 
                                            {/* HELPERS */}
                                            <td className="wine-entry-name helper">{data.text.drink_info['blank']}</td>
                                            <td className="wine-entry-unit helper">{data.text.drink_info.size[lang]}</td>
                                            <td className="wine-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                        </tr>
                                        {/*  DRINK LIST */}
                                        { this.makeDrinks('drinks', 'grappa', lang) }
                                    </tbody>
                                </table>
                            </div>


                            <div className="row other-section">
                                {/*  VERMUT AND DESSERT */}
                                <div className="col-6">
                                    {/* Vermut */}
                                    <h2 className="vermut-title">
                                        {data.text.vermut[lang]}
                                        <span className="and"> & </span>
                                        {data.text.vermut2[lang]}
                                    </h2>

                                    <div className="vermut-list">
                                        <table className="vermut-table">
                                            <tbody>
                                                <tr className="other-drink-entry"> 
                                                    {/* HELPERS */}
                                                    <td className="wine-entry-name helper">{data.text.drink_info['blank']}</td>
                                                    <td className="wine-entry-unit helper">{data.text.drink_info.size[lang]}</td>
                                                    <td className="wine-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                                </tr>
                                                {/*  DRINK LIST */}
                                                { this.makeDrinks('drinks', 'vermut', lang) }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div className="col-6">
                                    {/* Dessert wines */}
                                    <h2 className="vermut-title">
                                        {data.text.dessert_wines[lang]}
                                        
                                    </h2>

                                    <div className="dessertwines-list">
                                        <table className="dessertwines-table">
                                            <tbody>
                                                <tr className="other-drink-entry"> 
                                                    {/* HELPERS */}
                                                    <td className="wine-entry-name helper">{data.text.drink_info['blank']}</td>
                                                    <td className="wine-entry-unit helper">{data.text.drink_info.size[lang]}</td>
                                                    <td className="wine-entry-price helper">{data.text.drink_info.price[lang]}</td>
                                                </tr>
                                                {/*  DRINK LIST */}
                                                { this.makeDrinks('drinks', 'dessert_wines', lang) }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-4">
                        {/* Champagne */}
                        <h2 className="champagne-title">{data.text.champagne[lang]}</h2>
                        
                                {/*  DRINK LIST */}
                                { this.makeDrinksList('drinks', 'champagne', lang) }
                            
                    </div>
                </div>


            </div>
        )
    }
}

export default Wines
