import React, { Component } from 'react';

import Square from './Square';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className = "board-row">
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className = "board-row">
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className = "board-row">
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>
        );
    }
}

export default App;