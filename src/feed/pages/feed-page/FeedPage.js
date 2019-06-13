import React, { Component } from 'react';

import './feed-page.css';
import comment from '../../../assets/comment.svg';
import like from '../../../assets/like.svg';
import more from '../../../assets/more.svg';
import send from '../../../assets/send.svg';
class FeedPage extends Component {
    
    render() { 
        return (  
            <article className="feed">
                <header className="feed-header">
                    <p className="feed-header-autor">Genilson Moraes Brasil
                        <span className="feed-header-local">Software Engine Fullstack Pleno</span>
                    </p>

                    <img className="feed-header-more" src={ more } alt="more" title="more" />
                </header>

                <div className="feed-body">
                    <figure className="feed-figure">
                        <img className="feed-body-img" src="" alt="imagem destaque" title="Imagem destaque" />
                    </figure>
                </div>

                <footer className="feed-footer">
                    <ul className="feed-footer-list">
                        <li className="feed-footer-item">
                            <img className="feed-footer-link" src={ like } alt="curtida" title="curtida" />
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
                            69 curtidas
                        </li>
                        <li className="feed-footer-listItem feed-footer-listDesc">
                            descrição da imagem
                        </li>
                        <li className="feed-footer-listItem feed-footer-listHash">
                            #hastag
                        </li>
                    </ul>
                </footer>
            </article>

            
        );
    }
}
 
export default FeedPage;