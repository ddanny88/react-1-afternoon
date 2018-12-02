import React, { Component } from 'react';




class Palindrome extends Component{
    
    constructor(){
    super();
    this.state ={
        userInput: '',
        palindrome: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.upDatePalindrome = this.upDatePalindrome.bind(this);
}

    handleChange(event){
        this.setState({userInput: event.target.value})
    }



    upDatePalindrome(){
        let palindrome="";
        let str = this.state.userInput;
        for(let i = str.length -1; i>=0; i--){
            palindrome += str[i];
        } 
        palindrome = palindrome === str? "true": "false";
        this.setState({ palindrome });        
    }

    render(){
        return(
            <div className='puzzleBox palindromePB'>

                <h4>Palindrome</h4>

                <input onChange={ this.handleChange } className='inputLine'/>

                <button onClick={ this.upDatePalindrome} className='confirmationButton'>Check</button>

                <span className='resultsBox' >Palindrome: {this.state.palindrome}</span>
            </div>
        )         
    }
}

export default Palindrome;