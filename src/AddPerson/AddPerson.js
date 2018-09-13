import React from 'react';
import StyleClasses from './AddPerson.css';

class AddPerson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            talent: ''
        }
    }

    changeNameHandler = (event) => {
        this.setState( { name: event.target.value } )
    }

    changeTalentHandler = (event) => {
        this.setState( { talent: event.target.value } )
    }

    addCatHandler = () => {
        this.props.addCat(this.state.name, this.state.talent);
    }

    render() {
        return (
            <div className={StyleClasses.AddPerson}>
                <p>Adopt a new cat! Type a name and a talent.</p>
                <p>Name:
                    <input type="text"
                        onChange={(event) => this.changeNameHandler(event)}/>
                </p>
                <p>Talent:
                    <input type="text"
                        onChange={(event) => this.changeTalentHandler(event)}/>
                </p>
                <button
                    className={StyleClasses.AddPersonButton}
                    onClick={this.addCatHandler}>Adopt!</button>
            </div>
        );
    }
}
export default AddPerson;