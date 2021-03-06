import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            query:''
        }
    }

    search() {
        console.log(this.state);
    }

    handleSearchChange(e) {
        this.setState({
            query: e.target.value
        })
    }
    render() {
        return(
            <div className="App">
                <div className="App-title">
                    Music Master
                </div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                        type="text"
                        placeholder="Search for an Artist"
                        value={this.state.query}
                        onChange={(e) => this.handleSearchChange(e)}
                        onKeyPress={(e) => {
                            if(e.key === 'Enter') {
                                this.search();
                            }
                        }} />     
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                    
                    
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;