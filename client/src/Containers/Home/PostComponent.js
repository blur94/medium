import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../../Helpers/Nav';
import AHomeSidebar from './AHomeSidebar';

export default function PostComponent() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/post/' + id)
            .then(res => {
                setPost(res.data);
                console.log(post);
            });
    }, [id]);

    return (
        <div>
            <div className="split-home">
                <div className="home1">
                    <Nav />
                </div>
                <div className="home2">
                    {post && (
                        <div key={post.id}>
                            <div className="border-bottom">
                                <p>Published in {post.category}</p>
                            </div>
                            <div className='post-profile'>
                                <div className="post-profile-left">
                                    <div className="post-profile-left-left">
                                        <img src={post.author_img} alt="" />
                                    </div>
                                    <div className="post-profile-left-right">
                                        <ul>
                                            <li>{post.author}</li>
                                            <li>{post.created_at}.{post.read_time} min read</li>
                                        </ul>
                                    </div>
                                    <post-profile-right></post-profile-right>
                                </div>
                            </div>
                            <div>
                            <h3>{post.title}</h3>
                            </div>
                            <div className="post-image">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="post-content">
                                <p>{post.content}</p>
                            </div>

                        </div>
                    )}
                </div>
                <div className="home3">
                    <AHomeSidebar />
                </div>
            </div>
        </div>
    );
}
