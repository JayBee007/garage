import React,{Component} from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

import Clock from './Clock';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadLine: moment("25th July, 2017", "Do MMMM YYYY"),
            newDeadLine:''
        }
    }

    changeDeadLine() {
        if(!this.state.newDeadLine){
            return;
        }
        this.setState({
            deadLine: this.state.newDeadLine,
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
                <div className = "App-title">Countdown to {this.state.deadLine.format('Do MMMM YYYY')}</div>
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