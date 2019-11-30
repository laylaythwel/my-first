import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'


const FORM_API = 'https://fnipublic.com/blog-llt/api/form.php'

class Form extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        mailSent: false,
        error: null
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        Axios({
            method: 'post',
            url: `${FORM_API}`,
            headers: { 'content-type' : 'application/json' },
            data: this.state
        })
        .then(result => {
            this.setState({
                mailSent: result.data.sent
            })
        })
        .catch(error => this.setState({ error: error.message }))
    }

    render() {
        return (
            <div
                className="col-12 col-lg-6 mx-auto"
            >
                <h3>Contact with us</h3>

                <form
                    action="#"
                    className=""
                >
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea 
                            type="text"
                            rows="6"
                            className="form-control" 
                            id="message" 
                            name="message"
                            value={this.state.message}
                            onChange={e => this.setState({ message: e.target.value })}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={this.handleFormSubmit}
                    >Send</button>

                    {
                        this.state.mailSent && 
                        <>
                            <p>
                                Thank you for submitting, <br />
                                We'll be in touch with you soon.
                            </p>
                        </>
                    }

                    {
                        this.state.error &&
                        <>
                            <div 
                                className="position-fixed"
                                style={{
                                    left: '0',
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    zIndex: '99999999',
                                    background: '#000'
                                }}
                            >   
                                <div className="col-12 col-lg-4 mx-auto h-100">
                                    <div className="d-table w-100 h-100">
                                        <div className="d-table-cell align-middle text-white text-center">
                                            <button className="float-right" onClick={this.resetForm}>Close</button>
                                            <h2>Invalid !</h2>
                                            <p>Fill all of fields</p>
                                            <small>Please try again.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }

                </form>
            </div>
        )   
    }
}

export default withRouter(Form)