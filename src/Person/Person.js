import React from 'react';

import styleClasses from './Person.css';

const person = ( props ) => {
    return (
        <div className={styleClasses.Person}>
            <p onClick={props.click}>Name: {props.name}!</p>
            <p>Talent: {props.talent}</p>
            <p>{props.children}</p>
            <p><input type="text" onChange={props.changed} value={props.talent} /></p>
            <button className={styleClasses.PersonButton} onClick={props.click}>Delete :C</button>
        </div>
    )
};

export default person;