import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {

    dateNow = () => {

        const date = new Date();
    
        const options = {
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
        };
    
        return date.toLocaleString("ru", options).toUpperCase();
    
    }

    render() {

        const date = this.dateNow();

        return(
            <div className="header" id="header">
                <nav className="orange lighten-1">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">
                            WeatherApp
                        </a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li>
                                <a href="/">
                                    <i className="material-icons">more_vert</i>
                                </a>
                            </li>
                        </ul>
                        <ul className="right hide-on-med-and-down">
                            <li className="logo">
                                <a href="/">
                                    {date}
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };

};
