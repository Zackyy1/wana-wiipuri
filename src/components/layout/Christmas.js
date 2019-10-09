import React, { Component } from 'react';
import './css/Christmas.css';
import Cookies from 'universal-cookie';
import data from '../../languages';

export class Christmas extends Component {

    makeArray(pathToArray) {
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en";
        return pathToArray[lang].map(item => (
            <p key={item.slice(1, 5)}>{item}</p>
            
        ))
    }

    render() {
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en";
        return (
            <div>
                <h2 className="christmas-title">{data.text.feast[lang]}</h2>
                <div className="row">
                    <div className="col-4 christmas-wrap">
                        <h2 className="christmas-header">{data.text.christmas_header_1[lang]}</h2>
                        {this.makeArray(data.text.christmas_starter)}
                    </div>
                    <div className="col-4 christmas-wrap">
                        <h2 className="christmas-header">{data.text.christmas_header_2[lang]}</h2>
                        {this.makeArray(data.text.christmas_main)}
                    </div>
                    <div className="col-4 christmas-wrap">
                        <h2 className="christmas-header">{data.text.christmas_header_3[lang]}</h2>
                        {this.makeArray(data.text.christmas_end)}
                    </div>
                </div>
                <div className="christmas-summary">
                    <h3>{data.text.christmas_summary[lang]}</h3>
                </div>
            </div>
        )
    }
}

export default Christmas
