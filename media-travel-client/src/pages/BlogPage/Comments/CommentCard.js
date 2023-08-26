import React from 'react';
import '../BlogStyle.css'

const CommentCard = (commentData) => {
    const { user, image,  comment } = commentData.commentData;

    return (
        <div className="commentCard">
            <div className="d-flex align-items-center">
                <img src={image} height='50px' width="30px" className="commentCardImg" alt=""/>
                <h5 className="userName ms-2">{user}</h5>
            </div>
            <p><i>{comment}</i></p>
        </div>
    );
};

export default CommentCard;