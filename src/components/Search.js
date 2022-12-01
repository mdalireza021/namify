import React,{Component} from "react";
export default class Search extends Component
{
    render()
    {
        return(<div className="search-box-container"> 
            <input onChange={(event)=>{this.props.handleChange(event.target.value)}}
            type="text" className="search-box"
            placeholder="Enter Keywords" /></div>)
    }
}
