import React, {Component} from 'react'
import './App.css';

class CalcButts extends Component{
    render(){

        console.log(this.props.name);
        return(
            <div>
                <button className="oneB" name="1" onClick={(e) => this.props.clickMe(e.target.name)}>1</button>
                <button className="oneB" name="2" onClick={(e) => this.props.clickMe(e.target.name)}>2</button>
                <button className="oneB" name="3" onClick={(e) => this.props.clickMe(e.target.name)}>3</button>
                
                <button className="oneB" name="4" onClick={(e) => this.props.clickMe(e.target.name)}>4</button>
                <button className="oneB" name="5" onClick={(e) => this.props.clickMe(e.target.name)}>5</button>
                <button className="oneB" name="6" onClick={(e) => this.props.clickMe(e.target.name)}>6</button>

                <button className="oneB" name="7" onClick={(e) => this.props.clickMe(e.target.name)}>7</button>
                <button className="oneB" name="8" onClick={(e) => this.props.clickMe(e.target.name)}>8</button>
                <button className="oneB" name="9" onClick={(e) => this.props.clickMe(e.target.name)}>9</button>

                <button className="oneB" name="C" onClick={(e) => this.props.clickMe(e.target.name)}>C</button>
                <button className="oneB" name="0" onClick={(e) => this.props.clickMe(e.target.name)}>0</button>
                <button className="oneB" name="=" onClick={(e) => this.props.clickMe(e.target.name)}>=</button>

                <button className="oneB" name="+" onClick={(e) => this.props.clickMe(e.target.name)}>+</button>
                <button className="oneB" name="-" onClick={(e) => this.props.clickMe(e.target.name)}>-</button>
                <button className="oneB" name="*" onClick={(e) => this.props.clickMe(e.target.name)}>*</button>

                <button className="oneB" name="/" onClick={(e) => this.props.clickMe(e.target.name)}>/</button>
                <button className="oneB" name="%" onClick={(e) => this.props.clickMe(e.target.name)}>%</button>
                <button className="oneB" name="AC" onClick={(e) => this.props.clickMe(e.target.name)}>AC</button>

            </div>
        )
    }
}

export default CalcButts