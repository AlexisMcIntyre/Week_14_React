import React from 'react';

//this class is accessible outside of this file when webpack bundles everything together, react class that extends to create the components you're creating
//render is where you define what the component will do & how it will appear/what HTML will be rendered to application screen


//I am exporting the class Navbar for use inside other modules. I am rendering this component, which returns the HTML inside the parentheses. I created 2 divs so that I could style the page title and the navigation components seperately with CSS. 

export default class NavBar extends React.Component {
    render () {
        return (
        <div class= "navbar">
            <div class="pagetitle">
                <h1>Book Club</h1>
             </div>
             <div class="links">
                 <p class="navtext">SciFi</p>
                 <p class="navtext">Fantasy</p>
                <p class="navtext">NonFiction</p>
             </div>
        </div>
        )
    }

}