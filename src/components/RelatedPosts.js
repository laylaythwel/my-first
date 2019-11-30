import React, { Component } from 'react'
import Axios from 'axios'
import Loading from './Loading'
import { withRouter, Link } from 'react-router-dom'

class RelatedPosts extends Component {

    state = {
        posts: []
    }

    fetchData = () => {
        const id = this.props.match.params.id
        Axios.get(`https://fnipublic.com/blog-llt/api/related-posts/${id}?_format=json`)
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
            <div className="row">
                {
                    posts.map((post) => (
                        <div 
                            key={post.uuid[0].value}
                            className="col-12 col-md-6 py-3 py-md-0"
                        >
                            <div
                                className="bg-white h-100"
                            >
                                <Link
                                    to={`/post/${post.nid[0].value}`}
                                >
                                    <img 
                                        src={post.field_posts_image[0].url}
                                        alt={post.title[0].value}
                                        className="img-fluid"
                                    />
                                </Link>
                                <p
                                    className="py-3 px-4"
                                >
                                    <h2
                                    >
                                        <Link
                                            to={`/post/${post.nid[0].value}`}
                                            className="text-decoration-none text-dark"
                                            dangerouslySetInnerHTML={{__html: post.title[0].value}}
                                        />
                                    </h2>
                                </p>
                            </div>









                            
                        </div>
                    ))
                }
            </div>
        ) : (
            <Loading />
        )

        return (
            <div 
                className="bg-light"
                style={{
                    padding: '5rem 0'
                }}
            >
                <div
                    className="container"
                >
                    {postLists}
                </div>
            </div>
        )
    }
}

export default withRouter(RelatedPosts)