import React, {Component} from 'react';

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

    getTimeUntil(deadLine) {
        const time = Date.parse(deadLine);
    }
    render() {
        return (
            <div className="Clock">
                <div className="Clock-days">{this.state.days} days</div>
                <div className="Clock-hours">{this.state.hours} hours</div>
                <div className="Clock-minutes">{this.state.minutes} minutes</div>
                <div className="Clock-seconds">{this.state.seconds} seconds</div>
            </div>
        );
    }
}

export default Clock;