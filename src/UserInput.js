import React from 'react';

//Once again exporting the class UserInput which is the login component of the webpage. Being returned from the render, is an HTML form with input blanks for username and password, and a submit button.

export default class UserInput extends React.Component {
    render () {
        return (
            <form class="userinput">
                <h3 id="logintext">Please Log In!</h3>
                <input class="textbox" type="text" name="username" placeholder="Enter Username"></input>
                <input class="textbox" name="password" placeholder="Enter Password"></input>
                <button id="button-login">Submit</button>
            </form>
        )
    }

} 