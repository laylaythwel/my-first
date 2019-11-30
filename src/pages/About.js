import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Axios from 'axios'
import Loading from '../components/Loading'

class About extends Component {
    API_URL = `https://fnipublic.com/blog-llt/node/1?_format=json`

    state = {
        post: null
    }

    fetchData = () => {
        Axios.get(this.API_URL)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        const post = this.state.post

        return (
            <div>
                {
                    post ? (
                        <div key={post.uuid[0].value}>
                            <header 
                                className="masthead" 
                                style={{
                                    backgroundImage: "url("+ post.field_about_image[0].url +")",
                                    height: '100vh',
                                    minHeight: '600px'
                                }}
                            >
                                <div className="overlay"></div>
                                <div className="container h-100">
                                <div className="row h-100">
                                    <div className="col-lg-8 col-md-10 mx-auto">
                                        <div className="d-table h-100 w-100">
                                            <div className="page-heading p-0 d-table-cell align-middle">
                                                <h1>{post.title[0].value}</h1>
                                                <span className="subheading">{post.field_about_highlights[0].value}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </header>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-10 mx-auto">
                                        <p
                                            dangerouslySetInnerHTML={{__html: post.body[0].value}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Loading />
                    )
                }
            </div>
        )
    }
}

export default withRouter(About)