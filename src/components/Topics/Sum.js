import React, { Component } from 'react';

export default class Sum extends Component {
    constructor () {
        super ()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange = (number1) => {
        this.setState({number1: parseInt(number1)})
    }
    
    handleChange2 = (number2) => {
        this.setState({number2: parseInt(number2)})
    }

    handleClick = () => {
        const {number1, number2} = this.state
        let sum = number1 + number2
        this.setState({sum})
    }

    render () {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" type="number" onChange={(e) => {this.handleChange(e.target.value)}} value={this.state.number1} />
                <input className="inputLine" type="number" onChange={(e) => {this.handleChange2(e.target.value)}} value={this.state.number2} />
                <button className="confirmationButton" onClick={(e) => {this.handleClick()}}> Quick Maths </button>
                <span className="resultsBox"> {`Sum: ${this.state.sum}`} </span>
            </div>
        )
    }
}