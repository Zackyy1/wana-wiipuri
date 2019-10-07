import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import "./css/Herku.css"


export class Herku extends Component {
    render() {
        return (
            <div>
                <h2 className="herku-title">Wiipuri Relish</h2>
                <span className="chief-rec">
                    <h4>chief recommends</h4>
                </span>
                <div className="herku-wrap">
                    <span className="item">
                        <h4 className="item-title">salted pickles</h4>
                        <p className="item-desc">ramsons / sour cream / honey-mustard sauce / vodka shot</p>
                    </span>
                    {/*  MAKE THESE DYNAMIC */}
                    <span className="item">
                        <h4 className="item-title">red caviar and mushroom salad</h4>
                        <p className="item-desc">onion / sour cream / toast bread</p>
                    </span>

                </div>
            </div>
        )
    }
}

export default withRouter(Herku)
