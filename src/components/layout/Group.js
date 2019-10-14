import React, { Component } from 'react'
import './css/Group.css'
import Cookies from 'universal-cookie';
import data from '../../languages';


export class Group extends Component {

    makeArray(pathToArray) {
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en";
        return pathToArray[lang].map(item => (
            <p key={Math.random()}>{item}</p>
            
        ))
    }

    render() {
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en";
        return (
            <div>
                <div className="row center">
                    <div className="col-5 group-wrapper governor">
                        <h2>{data.text.governor_title[lang]}</h2>

                        <div className="group-divider"></div>
                        <h4 className="gov-h1">{data.text.governor_header1[lang]}</h4>
                        <div className="group-divider-2"></div>
                        {this.makeArray(data.text.governor_start)}

                        <div className="group-divider"></div>
                        <h4 className="gov-h1">{data.text.governor_header2[lang]}</h4>
                        <div className="group-divider-2"></div>
                        {this.makeArray(data.text.governor_main)}

                        <div className="group-divider"></div>
                        <h4 className="gov-h1">{data.text.governor_header3[lang]}</h4>
                        <div className="group-divider-2"></div>
                        {this.makeArray(data.text.governor_end)}

                        <div className="group-divider"></div>
                        <h4 className="gov-h1">{data.text.governor_summary[lang]}</h4>
                    </div>


                    <div className="col-5 group-wrapper">
                        <h2>{data.text.emperor_title[lang]}</h2>

                        <div className="group-divider"></div>
                        <h4 className="gov-h1">{data.text.emperor_header1[lang]}</h4>
                        <div className="group-divider-2"></div>
                        {this.makeArray(data.text.emperor_start)}

                        <div className="group-divider"></div>
                        <h4 className="gov-h1">{data.text.emperor_header2[lang]}</h4>
                        <div className="group-divider-2"></div>
                        {this.makeArray(data.text.emperor_main)}

                        <div className="group-divider"></div>
                        <h4 className="gov-h1">{data.text.emperor_header3[lang]}</h4>
                        <div className="group-divider-2"></div>
                        {this.makeArray(data.text.emperor_end)}

                        <div className="group-divider"></div>
                        <h4 className="gov-h1">{data.text.emperor_summary[lang]}</h4>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Group
