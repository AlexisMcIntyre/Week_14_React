//I imported the 2 components I created, the "NavBar" and the "UserInput" for use inside this component.

import React from 'react';
import NavBar from './/NavBar';
import UserInput from './/UserInput';

//I set e to be equal to the createElement method, to cut down on text. Inside the class LoginPage (which is exported for use on the index.js file), a div is created, with the class of container and the child elements are created from the modules I created in the other JS files. 

let e = React.createElement;

export default class LoginPage extends React.Component {
    render(){
        return e('div', {class:'container'},
            e(NavBar, {}, null),
            e(UserInput, {}, null)
            
        );        
    }
}