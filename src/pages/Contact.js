import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BG from '../vendor/img/contact-bg.jpg'
import Form from '../components/Form'

class Contact extends Component {
    render() {
        return (
            <div>
                <header 
                    className="masthead"
                    style={{
                        backgroundImage: "url("+ BG +")"
                    }}
                >
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="page-heading">
                                    <h1>Contact Me</h1>
                                    <span className="subheading">Have questions? I have answers.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            
                        </div>
                    </div>
                    <div style={{ margin: '6rem 0' }}>
                        <Form />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Contact)