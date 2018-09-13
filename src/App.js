import React, { Component } from 'react';
import styleClasses from './App.css';
import Person from './Person/Person';
import AddPerson from './AddPerson/AddPerson';

class App extends Component {
  state = {
    cats: [
      { id: '1', name: 'Paolo', talent: 'Converts evil into fat.' },
      { id: '2', name: 'Rasputin', talent: 'Still undecided' },
      { id: '3', name: 'Filomeno', talent: 'Visión nocturna' }
    ],
    showCats: false
  }

  talentChangedHandler = ( event, index ) => {
    const cats = [...this.state.cats];
    cats[index].talent = event.target.value;
    this.setState( { cats: cats } );
  }

  deleteCatHandler = (catIndex) => {
    const cats = [...this.state.cats];
    cats.splice(catIndex, 1);
    this.setState( { cats: cats } );
  }

  addCatHandler = (catName, catTalent) => {
    const currentCats = [...this.state.cats];
    let currentId = currentCats[currentCats.length];
    currentCats.push( { id: currentId+1, name: catName, talent: catTalent });
    this.setState( { cats: currentCats } );
  }

  toggleCatsHandler = () => {
    const doesShow = this.state.showCats;
    this.setState( { showCats: !doesShow } );
  }

  render () {
    let cats = null;
    let btnClass = ''
    let pageDescription = 'Just a cat portfolio'

    if ( this.state.showCats ) {
      cats = (
        <div>
          {this.state.cats.map((cat, index) => {
            return <Person
              click={() => this.deleteCatHandler(index)}
              name={cat.name} 
              talent={cat.talent}
              key={cat.id}
              changed={(event) => this.talentChangedHandler(event, index)} />
          })}
        </div>
      );

      btnClass = styleClasses.Red
    }

    const classes = [];
    if ( this.state.cats.length < 3 ) {
      classes.push( styleClasses.red );
      pageDescription = 'Only two cats left'
    }
    if ( this.state.cats.length < 2 ) {
      classes.push( styleClasses.bold )
      pageDescription = 'Stop giving your cats away... or losing them'
    }
    if ( this.state.cats.length < 1 ) {
      classes.splice( 0, 2 );
      pageDescription = 'Well this is hardly a portfolio anymore'
    }

    return (
      <div className={styleClasses.App}>
        <h1>My cats</h1>
        <p className={classes.join(' ')}>{pageDescription}</p>
        <button
          className={btnClass}
          onClick={this.toggleCatsHandler}>Toggle cats</button>
        {cats}
        <AddPerson
          addCat={this.addCatHandler}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
