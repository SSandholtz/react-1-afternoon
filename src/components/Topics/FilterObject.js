import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            coolPeople: [
                {
                    name: 'Hulk Hogan',
                    age: 65,
                    hairColor: 'Blonde',
                    height: `6'7"`
                },

                {
                    name: 'Barack Obama',
                    age: 57,
                    hairColor: 'Black',
                    height: `6'1"`,
                    title: 'A cool president'
                },

                {
                    name: 'Larry the Cable Guy',
                    age: 56,
                    height: `5'10"`,
                    coolness: 'None of the cool'
                }
            ],
            userInput: '',
            filteredCoolpeople: []
            } 
        }
        handleChange (val) { 
            this.setState({ userInput: val})
        }
        filterCoolPeople (prop) {
            let coolPeople = this.state.coolPeople;
            let filteredCoolPeople = [];

            for (let i = 0; i < coolPeople.length; i++) {
                if (coolPeople[i].hasOwnProperty(prop)) {
                    filteredCoolPeople.push(coolPeople[i])
                }
            }
            this.setState({ filteredCoolPeople: filteredCoolPeople})
        }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> FilterObject </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.coolPeople, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterCoolPeople(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectPB"> Filtered: { JSON.stringify(this.state.filteredCoolPeople, null, 10) } </span>
            </div>
        )
    }
}