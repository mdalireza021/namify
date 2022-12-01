import React,{Component} from "react";
import Card from "./Card";
export default class Result extends Component
{
    render()
    {
        const showResult=this.props.result.map((res)=>{
                return(<Card key={res} name={res} />)
            })
    return(<div className="result-container">{showResult}</div>)
    }
}

