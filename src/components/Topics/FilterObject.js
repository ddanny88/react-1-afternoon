import React, { Component } from 'react';


//using a pre-determined array of objects, filter out objects that do not have a given property. Display a new array populated with the objects tht do have the given property. 

class FilterObject extends Component{
    constructor(){
        super();
        this.state={
           employees:[
            {
              name: 'Jimmy Joe',
              title: 'Hack0r',
              age: 12,
            },
            {
              name: 'Jeremy Schrader',
              age: 24,
              hairColor: 'brown'
            },
            {
              name: 'Carly Armstrong',
              title: 'CEO',
            }
          ],
            userInput: '',
            filterArray: []
        }



        this.handleChange = this.handleChange.bind(this);
        this.upDateFilteredArray = this.upDateFilteredArray.bind(this);
    }


    handleChange(val){
        this.setState({userInput: val});
    }



    upDateFilteredArray(e){
       let filterArray = this.state.employees.filter( (emp)=> emp[this.state.userInput] )
       this.setState({filterArray})
    }










    render(){
        return(
           <div className='puzzleBox filterObjectPB'>
           <h4>Filter Object</h4>
            <span className='puzzleText'>Original: {JSON.stringify(this.state.employees, null, 10)}</span>

            <input className='inputLine' onChange={ (e)=> this.handleChange(e.target.value) } />

            <button className='confirmationButton' onClick={this.upDateFilteredArray} >Filter</button>

            <span className='resultsBox filterObjectRB' >Filtered: {JSON.stringify(this.state.filterArray, null, 10)}</span>

           </div> 


        )
    }
}

export default FilterObject;