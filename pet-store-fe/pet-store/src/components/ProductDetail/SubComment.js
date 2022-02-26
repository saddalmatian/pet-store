import './SubComment.css';

function SubComment(props) {
    return (
        <div className="row">
            <div className="col-md sub-comment__container">
                <div className="user-avt__img">
                    <img className="user-avt" src={props.avt} alt="user-avt"></img>
                </div>
                <div className="user-comment">
                    <div className="user-cmt">
                        <p className="user-name">{props.name}</p>
                        <p className="user-comment__content">{props.content}</p>
                    </div>
                    <div className="user-reaction">
                        <p className="user-action">Reply</p>
                        <p className="user-comment__time">8 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubComment;