import React, { Component } from 'react';

import Circle from './Circle';

class Square extends Component {
    constructor(props){
        super(props)
        this.state = {
            isVisible:false,
            opacity:1
        }
    }

    handleClick = () => {
        this.setState({
            isVisible: true,
            opacity:1
        })
    }
    render() {
        if(this.state.isVisible) {
            return (
                <div className="square" onClick = {this.handleClick}>
                   <Circle opacity = {this.state.opacity} />
                </div>    
            )
        }
        return (
            <div className = "square" onClick = {this.handleClick}>
                
            </div>
        );
    }
}

export default Square;