import React, { Component } from 'react'

const Form = ({onSend, onChange}) => {
    return (
        <div className="container">
            <p className="chat">Chat</p>
            <div className="form-container">
                <form onSubmit={onSend}>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required="required"
                               onChange={onChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"  />
                    </div>

                    <div className="form-footer">
                        <i className="fa fa-play" aria-hidden="true" onClick = {onSend}></i>
                        <button type="submit" id="submit">Get Started</button>
                    </div>

                </form>


            </div> 

        </div>
    )
}

export default Form