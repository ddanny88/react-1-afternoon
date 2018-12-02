import React, { Component } from 'react';


class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state = {
        evensArr: [],
        oddArr: [],
        userInput: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.evenOrOdd = this.evenOrOdd.bind(this);

    }

    handleChange(val){
        this.setState({userInput: val});
    }



    // takes in the userInput, splits the sting into an array of substring and stores that inside of the variable arr. The array is then looped through and separeted into thier respective arrays based on even or odd value. The state is then set to eaqual the result. 
    evenOrOdd(userInput){
        let arr = userInput.split(','); 
        let evens = [];
        let odds = [];

        for(let i=0; i< arr.length; i++){
            if(arr[i] % 2 === 0){
                evens.push(arr[i]);
            } else{
                odds.push(arr[i])
            }
        }
        this.setState({evensArr: evens, oddArr: odds})
    }

    


    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>

                <input onChange={ (e)=> this.handleChange(e.target.value) } className='inputLine'/>

                <button onClick={ (e)=> {this.evenOrOdd}} className='confirmationButton'>Split</button>

                <span className='resultsBox' >Evens: {this.state.evensArr}</span>
                <span className='resultsBox' >Odds: {this.state.oddArr}</span>
            </div>
        )
    }
}


export default EvenAndOdd;
