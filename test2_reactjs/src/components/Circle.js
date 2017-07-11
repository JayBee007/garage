import React, { Component } from 'react';

class Circle extends Component {
    constructor(props){
        super(props)
        this.state = {
            opacity:this.props.opacity
        }
    }

    handleInterval() {
        let counter = 4
        this.intervalId = setInterval(() => {
            counter--;
            if (counter <= 0) {
                clearInterval(this.intervalId);
            }
            this.setState({
                opacity: (this.state.opacity) - 0.25
            })
        }, 3000)
    }

    componentDidMount() {
     this.handleInterval();   
    } 

    componentWillReceiveProps(nextProps) {
        clearInterval(this.intervalId);
        
        this.setState({
            opacity:nextProps.opacity
        })
    }
    render() {
        return (
            <div style = {this.state} className="circle">
            </div>
        );
    }
}

export default Circle;