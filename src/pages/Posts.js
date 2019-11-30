import React, { Component } from 'react'
import { withRouter } from 'react-router'
import AllPosts from '../components/AllPosts'
import BG from '../vendor/img/post-bg.jpg'

class Posts extends Component {
    render() {
        return (
            <div>
                <header 
                    className="masthead" 
                    style={{
                        backgroundImage: "url("+ BG +")",
                        height: '100vh',
                        minHeight: '600px'
                    }}
                >
                    <div className="overlay"></div>
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="w-100 h-100 d-table">
                                    <div className="post-heading p-0 d-table-cell align-middle">
                                        <h1 className="text-center">Our Posts</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <AllPosts />
            </div>
        )
    }
}

export default withRouter(Posts)