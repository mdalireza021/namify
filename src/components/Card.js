import React, { Component } from "react";
class Card extends Component
{
    render()
    {
        const nameCheapURL = "https://www.namecheap.com/domains/registration/results/?domain=";
        return(
            <a className="card-link" href={nameCheapURL+this.props.name} target="_blank" rel="noreferrer">
            <div className="card-name">
                <p className="card-text"> {this.props.name}</p></div>
                </a>
                )   
    }
}

export default Card;