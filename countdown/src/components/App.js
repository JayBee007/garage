import React,{Component} from 'react';
// import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

import Clock from './Clock';
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
            deadLine: this.state.newDeadLine.format('Do MMMM YYYY'),
            newDeadLine: '',
        });
    }

    handleDayChange = newDeadLine => {
        this.setState({ newDeadLine });
    };


    render() {
        
        const value = this.state.newDeadLine ? this.state.newDeadLine.format('Do MMMM YYYY'): '';
      
        return(
            <div className = "App">
                <div className = "App-title">Countdown to {this.state.deadLine}</div>
                <Clock deadLine = {this.state.deadLine}/>
                <div className = "input-date">
                    <DayPickerInput
                        placeholder="Select date"
                        format="DD/MM/YYYY"
                        value={value}
                        onDayChange={this.handleDayChange}
                    />
                    <button onClick = {() => this.changeDeadLine()}>Submit</button>
                </div>
            </div>
        )
    }
}


export default App;