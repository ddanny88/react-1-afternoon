import React, { Component } from 'react';







class FilterString extends Component{

    constructor(){
        super();
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.upDateFilteredArray = this.upDateFilteredArray.bind(this);
        this.display = this.display.bind(this);
    }


    handleChange(e){
        this.setState({userInput: e.target.value });
    }


    upDateFilteredArray(){
       let filteredArray = this.state.unFilteredArray.filter( (name)=> name.includes(this.state.userInput));
       this.setState({ filteredArray });
    }



    display(filtered){
        let str='';
        let newArr = filtered? this.state.filteredArray: this.state.unFilteredArray;
        newArr.forEach((name, i) =>{
            str += `"${name}"`
            if(i < newArr.length -1){
                str += ", "
            }
        })
        return str;
    }



    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
            
                <span className="puzzleBox">Names: [{ this.display(false) }] </span>

                <input className="inputLine" onChange={this.handleChange}></input>

                <button className="confirmationButton" onClick={this.upDateFilteredArray}>Filter</button>
                
                <span className="resultsBox filterStringRB">Filtered Names: [{ this.display(true) }]</span>
            </div>
        )
    }
}

export default FilterString;