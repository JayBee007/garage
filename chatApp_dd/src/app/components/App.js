import React, {Component} from 'react'

import ChatApp from './ChatApp'
import Form from './Form'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            submitted:false,
            username:null,
        }

        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
    }

    usernameChangeHandler(event) {
        this.setState({ username: event.target.value });
    }

    usernameSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitted: true, username: this.state.username });
    }


    render(){
        if(this.state.submitted){
            return <ChatApp username = {this.state.username} />
        }

        return(
            <Form onSend = {this.usernameSubmitHandler} onChange = {this.usernameChangeHandler} />
        )
    }
}

export default App