import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import "./css/Herku.css";
import Ryypy from "../../images/ryypy.png";
import data from '../../languages';
import Cookies from 'universal-cookie'


export class Herku extends Component {

    componentDidMount() {
        const cookies = new Cookies();
        this.setState({lang: cookies.get("lang") || "en"})
    }

    render() {
        const cookies = new Cookies();
        var lang = cookies.get("lang") || "en";

        return (
            <div>
                <div className="row">
                    <div className="col-8"><h2 className="herku-title">{data.text.special[lang]}</h2>
                        <span className="chief-rec">
                            <h4>{data.text.chiefRec[lang]}</h4>
                        </span>
                        <div className="herku-wrap">
                            <span className="item">
                                <h4 className="item-title">{data.text.marskinpickles[lang].name}</h4>
                                <p className="item-desc">{data.text.marskinpickles[lang].desc}</p>
                            </span>
                            {/*  MAKE THESE DYNAMIC */}
                            <span className="item">
                                <h4 className="item-title">{data.starters.caviar[lang].name}</h4>
                                <p className="item-desc">{data.starters.caviar[lang].desc}</p>
                            </span>
                            <span className="item">
                                <h4 className="item-title">{data.grill.steak[lang].name}</h4>
                                <p className="item-desc">{data.grill.steak[lang].desc}</p>
                            </span>
                            <h2>33,9</h2>
                        </div>
                    </div>
                    <div className="col-2 ryypy-wrap">
                            <img src={Ryypy} alt="" className="ryypy"/>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(Herku)
