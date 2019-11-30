import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from './Loading'

export default class AllPosts extends Component {
    API_URL = `https://fnipublic.com/blog-llt/api/all-custom-posts?_format=json`

    state = {
        posts: []
    }

    fetchData = () => {
        Axios.get(this.API_URL)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        const posts = this.state.posts

        const postLists = posts.length ? (
            <>
                {
                    posts.map((post) => (
                            <div className="post-preview" key={post.uuid}>
                                <Link to={'/post/' + post.nid} >
                                    <h2 
                                        className="post-title"
                                        dangerouslySetInnerHTML={{__html: post.title}}
                                    />
                                    
                                    <h3 
                                        className="post-subtitle"
                                        dangerouslySetInnerHTML={{__html: post.body_1}}
                                    />
                                </Link>
                                <p className="post-meta">Posted by <a href="!#">Admin</a> on {post.created}</p>
                            </div>
                    ))
                }
            </>
        ) : (
            <>
                <Loading />
            </>
        )

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {postLists}
                        
                            {/* <div className="clearfix">
                            <a className="btn btn-primary float-right" href="!#">Older Posts &rarr;</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
