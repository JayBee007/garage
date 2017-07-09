import React,{Component} from 'react';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadLine: 'December 25, 2017',
            newDeadLine:''
        }
    }

    changeDeadLine() {
        this.setState({
            deadLine: this.state.newDeadLine,
            newDeadLine:''
        });
    }

    handleOnChange(e){
        this.setState({
            newDeadLine: e.target.value
        });
    }


    render() {
        return(
            <div className = "App">
                <div className = "App-title">Countdown to {this.state.deadLine}</div>
                <div className = "Clock">
                    <div className = "Clock-days">14 days</div>
                    <div className = "Clock-hours">30 hours</div>
                    <div className = "Clock-minutes">15 minutes</div>
                    <div className = "Clock-seconds">20 seconds</div>
                </div>
                <div className = "input-date">
                    <input value = {this.state.newDeadLine} onChange = {e => this.handleOnChange(e)} placeholder = "new date" />
                    <button onClick = {() => this.changeDeadLine()}>Submit</button>
                </div>
            </div>
        )
    }
}


export default App;