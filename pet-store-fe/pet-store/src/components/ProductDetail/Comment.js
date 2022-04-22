import React from 'react';
import './Comment.css';

function Comment(props) {
    return (
        <div className="row">
            <div className="col-md comment-container">
                <div className="user-avt__img">
                    <img className="user-avt" src={props.avt} alt="user-avt"></img>
                </div>
                <div className="user-comment">
                    <div className="user-cmt">
                        <p className="user-name">{props.name}
                            <span className='user-rate'><i className="product-item__star--gold fas fa-star"></i>({props.rate})</span>
                        </p>
                        <p className="user-comment__content">{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;