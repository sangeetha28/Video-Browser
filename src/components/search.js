import React, { Component} from 'react';

//extends Component
export default class SearchBar extends Component  {
    //note the syntax render function inside a class component...

    constructor(props){
        super(props); //calling the super class constructor

        //we intialize a new object with this.state

        // object that we pass has a propery that we want to record on the state property

        this.state ={ term: ''};

    }


    render() {
        //where there is a Change Event occurs to the input element, event handler function will be called
        // this.setState({term: event.target.value}) - we set the state term prop with the new input value r
        // Whenever we call this.setstate, it causes our component to re render and render method will PUSH the new values to the DOM
        // whenever you want to update the component think in state
        // controleed 'input' field/componenet is the one whose value is set by the state itself
        // everything should be inside a div
        //JSX value should be either an expression or a quoted JSX text

        // When the user changes the input value, the event changes the input value

        //React is low API sURFACE AREA COMPARED TO BACKBONE OR ANGULAR

        return (
            <div className="search-bar">
            <input placeholder="Search..."
            value = {this.state.term} // no semi colon
            // there should be space between on prop and definition
            onChange = {event => this.onInputChange(event.target.value)}// no semi colon
        //event => this.setState({term: event.target.value})
            />
        </div>
    );
    };


    onInputChange(term){
        console.log(term);
        this.setState({term});
        this.props.onSearchTermChange(term)
    }
    //context of the event....



    // State is a plain javascript object that is used to record and react to events....
    //Whenever a component state is changed, component immediately rerender so the child component will render as well, render method will be caled

    // Functional component will not have a state only class comonent will have a state

    // in class component , state needs to be initialized... using constructor

    //constructor is th only function that gets called automatically when new instance of class is created

    //
}