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
                                { this.makeDrinks('drinks', 'red_wines', lang) }
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
                                { this.makeDrinks('drinks', 'white_wines', lang) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wines
