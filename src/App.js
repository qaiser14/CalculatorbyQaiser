import React, {Component} from 'react'
import './App.css';
import CalcButts from './CalcButts';

class App extends Component{
  
  // Setting the state
  state = {
    result: "",
    calc: ""
  }

  handleClick = (value) =>{

    console.log(value)

    console.log("hello function is clicked");

    if(value==="="){

      this.handleEvaluate()

    } else if (value==="AC"){

      this.handleClear()

    } else if (value==="C"){

      this.setState({
      result:this.state.result.slice(0, -1),
       
      })

    } else  

      this.setState({
      result: this.state.result + value
    })
  }

  // Creating the handleEvaluate function
  handleEvaluate = () =>{
      var ans = eval(this.state.result)  
      
        this.setState({
          calc:ans 
        })
  }

  // Creating the clear C function
  handleClear = () =>{
    
    this.setState({
      calc:"",
      result:""
    })
  }

  
  render(){

    console.log(this.state.result, "STATE")
    return(
      <div>

            <p className="calcHdg1">THE CALCULATOR</p> 
          
          <div className="calcBox1">
              <h2 className="resultBox1">{this.state.result}
                  <span>{this.state.calc ? "=" : ""}</span>
                  <span>{this.state.calc}</span>
              </h2>
                
              
              <div className="resultBox2">
                <CalcButts name="Qaiser" clickMe={this.handleClick}/> 
              </div>

          </div>       
      </div>
    )
  }
}

export default App;
