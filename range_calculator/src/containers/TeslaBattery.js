import React, {Component} from 'react';

import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice.js';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaStats from '../components/TeslaStats/TeslaStats';
import TeslaCounter from '../components/TeslaCounter/TeslaCounter';

import { getModelData } from '../services/BatteryService';


class TeslaBattery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    }

  }

  updateCounterState = (title, newValue) => {
    const config = { ...this.state.config};
    title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;

    this.setState({ config });
  }

  increment = (e, title) => {
    e.preventDefault();
    let currentValue, maxValue, step;

    const { speed, temperature } = this.props.counterDefaultVal;

    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      maxValue = speed.max;
      step = speed.step;
    }else {
      currentValue = this.state.config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }


    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      this.updateCounterState(title, newValue);
    }

  }

  decrement = (e, title) => {
    e.preventDefault();
    let currentValue, maxValue, step;

    const { speed, temperature } = this.props.counterDefaultVal;

    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      maxValue = speed.min;
      step = speed.step;
    }else {
      currentValue = this.state.config.temperature;
      maxValue = temperature.min;
      step = temperature.step;
    }


    if (currentValue > maxValue) {
      const newValue = currentValue - step;
      this.updateCounterState(title, newValue);
    }

  }

  calculateStats = (models,value) => {
    const dataModels = getModelData();

    return models.map(model => {

      const {speed, temperature, climate, wheels} = value;
      const miles = dataModels[model][wheels][climate ? "on" : "off"].speed[speed][temperature];

        return {
          model,
          miles
        };
    })
  }

  statsUpdate = () => {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];

    this.setState({
      carstats: this.calculateStats(carModels, this.state.config)
    })
  }

  componentDidMount() {
    this.statsUpdate();
  }

  render() {
    const { config, carstats } = this.state;
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={config.wheels} />
        <TeslaStats carstats={carstats} />
        <div className="tesla-controls cf">
          <TeslaCounter
            currentValue = {this.state.config.speed}
            initValue = {this.props.counterDefaultVal.speed}
            increment = {this.increment}
            decrement = {this.decrement}
          />
          <div className="tesla-climate-container cf">
            <TeslaCounter
            currentValue = {this.state.config.temperature}
            initValue = {this.props.counterDefaultVal.temperature}
            increment = {this.increment}
            decrement = {this.decrement}
            />
          </div>
        </div>
        <TeslaNotice />
      </form>
    )
  }
}

export default TeslaBattery;
