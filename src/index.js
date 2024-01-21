/* 
1. Using create-react-app, create a new React project. 
2. Create a LoginForm component that contains the following:
  * Username and password input fields
  * h3 that says Log In, with a border
  * Style the component using the default generated CSS file
3. Create a Navigation component that contains links styled like a navbar.
 (The links don't have to go anywhere)
4. Put the Navigation component at the top of the page and the LoginForm in the center of the page. */

//These imports below link to all of the React modules and then I also imported my single module "LoginPage" for it to display when opened.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './LoginPage';

//This section below is the entire page that is displayed. The constant "root" is declared and set equal to the result of the create Root method of the React DOM, and referencing the "root" id inside the index.html file. Then the render method of the root is used and the element "LoginPage" is created/rendered.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     React.createElement(LoginPage)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
