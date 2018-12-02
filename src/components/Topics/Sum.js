import React, { Component } from 'react';





class Sum extends Component{
    constructor(){
        super();
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
        // this.handlechange = this.handlechange.bind(this);
        this.sum = this.sum.bind(this)
    }

    sum(num1, num2){
        let sum = parseInt(this.state.number1, 10) + parseInt(this.state.number2, 10);
        this.setState({sum, number1: 0, number2: 0})
    }

    render(){
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>            
                <input className='inputLine' value={!this.state.number1? "": this.state.number1} onChange={ (e)=> this.setState({ number1: e.target.value }) } ></input>

                <input className='inputLine' value={!this.state.number2? "": this.state.number2} onChange={ (e)=> this.setState({ number2: e.target.value })}  ></input>

                <button onClick={ (e)=> this.sum(this.state.number1, this.state.number2) }  className='confirmationButton'>Add</button>

                <span className='resultsBox'>Sum: { this.state.sum }</span>
            
            </div>
        )
    }
}

export default Sum;