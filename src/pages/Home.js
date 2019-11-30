import React, { Component } from 'react'
import { withRouter } from 'react-router'
import BGIMG from '../vendor/img/home-bg.jpg'
import AllPosts from '../components/AllPosts'

class Home extends Component {
    render() {
        return (
            <div>
                <header 
                    className="masthead" 
                    style={{
                        backgroundImage: "url("+ BGIMG +")",
                        height: '100vh',
                        minHeight: '600px'
                    }}
                >
                    <div className="overlay"></div>
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="d-table h-100 w-100">
                                    <div className="site-heading p-0 d-table-cell align-middle">
                                        <h1>Clean Blog</h1>
                                        <span className="subheading">A Blog Theme by Start Bootstrap</span>
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

export default withRouter(Home)