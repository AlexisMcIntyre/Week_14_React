import React from 'react';

export default class Clock extends React.Component {
    render () {
        const date = new Date();
        return (
        <div class= "clock">
        <p>It is currently: </p>
        </div>
        )
    }

}