import React, { Component } from 'react';

import './feed-page.css';
import comment from '../../../assets/comment.svg';
import like from '../../../assets/like.svg';
import more from '../../../assets/more.svg';
import send from '../../../assets/send.svg';
import ApiService from '../../../shared/services/api/ApiService';
import io from 'socket.io-client';

const apiService = new ApiService();
const imageUrlBase = 'http://localhost:3001/images';

class FeedPage extends Component {

    state = {
        posts: []
    };
    
    async componentDidMount() {

        this.realTime();
        
        const posts = await apiService.get('posts');
        this.setState({ posts });
    };

    handleLike = async post => {
        
        await apiService.like('/post/like/', post);
    };
    
    realTime() {
        const socket = io('http://localhost:3001');
        
        socket.on('like-post', postLike => {
    
            this.setState({ 
                posts:  this.state.posts.map(post => 
                    post._id === postLike._id ? postLike : post
                )
            });
        })
    }

    render() {
        const { posts } = this.state;

        return(
            <section>
                {
                    posts.map(post => {
                        return(
                            <article key={ post._id } className="feed">
                                <header className="feed-header">
                                    <p className="feed-header-autor">
                                        { post.author }
                                        <span className="feed-header-local">{ post.place}</span>
                                    </p>
        
                                    <img className="feed-header-more" src={ more } alt="more" title="more" />
                                </header>
        
                                <div className="feed-body">
                                    <figure className="feed-figure">
                                        <img className="feed-body-img" src={ `${ imageUrlBase }/${ post.image }` } alt="imagem destaque" title="Imagem destaque" />
                                    </figure>
                                </div>
        
                                <footer className="feed-footer">
                                    <ul className="feed-footer-list">
                                        <li className="feed-footer-item">
                                            <button className="feed-footer-likeButtom"
                                                type="button"
                                                onClick={ () => this.handleLike(post) }>
                                                <img className="feed-footer-link" src={ like } alt="curtida" title="curtida" />
                                            </button>
                                        </li>
        
                                        <li className="feed-footer-item">
                                            <img className="feed-footer-link" src={ comment } alt="comentário" title="comentário" />
                                        </li>
        
                                        <li className="feed-footer-item">
                                            <img className="feed-footer-link" src={ send } alt="enviar" title="enviar" />
                                        </li>
                                    </ul>
        
                                    <ul className="feed-footer-listInfo">
                                        <li className="feed-footer-listItem feed-footer-listLikes">
                                            { post.like } curtidas
                                        </li>
                                        <li className="feed-footer-listItem feed-footer-listDesc">
                                            { post.description }
                                        </li>
                                        <li className="feed-footer-listItem feed-footer-listHash">
                                            { post.hastag }
                                        </li>
                                    </ul>
                                </footer>
                            </article>
                        )
                    })
                }
            </section>
        )
    }
}
 
export default FeedPage;