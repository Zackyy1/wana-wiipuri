import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import "./Herku.css"


export class Herku extends Component {
    render() {
        return (
            <div>
                <h2 className="herku-title">Herku goes here</h2>
            </div>
        )
    }
}

export default withRouter(Herku)
