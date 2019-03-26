import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }

    }

    handleChange = (userInput) => {
        this.setState({ userInput })
    }

    handleClick = () => {
        // Solve toy problem
        const { userInput } = this.state
        const userInputReversed = userInput.split('').reverse().join('')
        const palindrome = userInput === userInputReversed

        // set the state with the solution from the toy problem so it re-renders
        this.setState({ palindrome: palindrome })
    }

    render () {
        return (
            <div className="puzzleBox palindromePB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value)}} value={this.state.userInput}></input>
                <button className="confirmationButton" onClick={ (e) => {this.handleClick()}}> Check </button>
                <span className="resultsBox"> Palindrome: {`${this.state.palindrome}`} </span>
            </div>
        )
    }
}

