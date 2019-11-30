import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
import Loading from './Loading'
import RelatedPosts from './RelatedPosts'

class PostDetail extends Component {

    state = {
        post: null
    }

    fetchData = () => {
        const id = this.props.match.params.id
        Axios.get('https://fnipublic.com/blog-llt/api/all-custom-posts/' + id + '?_format=json')
            .then(res => {
                this.setState({
                    post: res.data[0]
                })
            })
    }

    componentDidMount() {
        this.fetchData()
        window.scrollTo(0,0)
    }

    componentDidUpdate() {
        this.fetchData()
    }

    componentWillReceiveProps() {
        window.scrollTo(0,0)
    }

    render() {
        const post = this.state.post

        return (
            <div>
                {
                    post ? (
                        <div key={post.uuid}>
                            <header 
                                className="masthead" 
                                style={{
                                    backgroundImage: "url("+ post.field_posts_image +")",
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
                                                <h1>{post.title}</h1>
                                                <h3 
                                                    className="post-subtitle"
                                                    dangerouslySetInnerHTML={{__html: post.body_1}}
                                                />
                                                <p className="post-meta">Posted by <a href="!#">Admin</a> on {post.created}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </header>
                            <article
                                style={{
                                    marginBottom: '50px'
                                }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-10 mx-auto">
                                            <p
                                                dangerouslySetInnerHTML={{__html: post.body}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <RelatedPosts />
                        </div>
                    ) : (
                        <Loading />
                    )
                }
            </div>
        )
    }
}

export default withRouter(PostDetail)