import React, {Component} from 'react';
import moment from 'moment';
class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadLine);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.getTimeUntil(this.props.deadLine),1000);
    }

    componentWillMount() {
        clearInterval(this.timerID);
    } 

    getTimeUntil(deadLine) {
        const time = deadLine-moment();
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor((time/(1000*60*60) % 24));
        const days = Math.floor(time/(1000*60*60*24));
        
        this.setState({
            days,
            hours,
            minutes,
            seconds
        })
    }

    leadZero(num) {
        return num < 10 ? `0${num}` : num;
    }
    render() {
        return (
            <div className="Clock">
                <div className="Clock-days">{this.leadZero(this.state.days)} days</div>
                <div className="Clock-hours">{this.leadZero(this.state.hours)} hours</div>
                <div className="Clock-minutes">{this.leadZero(this.state.minutes)} minutes</div>
                <div className="Clock-seconds">{this.leadZero(this.state.seconds)} seconds</div>
            </div>
        );
    }
}

export default Clock;