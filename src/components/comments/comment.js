import React, { useEffect, useState } from 'react';
import axios from 'axios';
import profilePic from '../images/profilePic.jpg'
const Comment = ({ comment, onLike, onDislike, onDelete, onReply, isReply, mainCommenctId }) => {
    const [reply, setReply] = useState('');
    const [showReplyBox, setShowReplyBox] = useState(false);

    const handleReply = () => {
        if (isReply) {
            onReply(mainCommenctId, reply);

        } else {
            onReply(comment.id, reply);
        }
        setReply('');
        setShowReplyBox(false);
    };

    useEffect(() => {
    })
    return (
        <div className="comment">
            <div className='userDetails'>
                <div>
                    <img className='profilePic' src={profilePic} alt='' />
                </div>
                <div>{comment.name}</div>
            </div>
            <div> <p>{comment.text}</p></div>
            <div>
                <button onClick={() => onLike(comment.id)}>Like ({comment.likes})</button>
                <button onClick={() => onDislike(comment.id)}>Dislike ({comment.dislikes})</button>
                <button onClick={() => setShowReplyBox(!showReplyBox)}>Reply</button>
                {comment.isDelete ? <button onClick={() => onDelete(comment.id)}>Delete</button> : ""}
            </div>
            {showReplyBox && (
                <div>
                    <input
                        type="text"
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        placeholder="Write a reply..."
                    />
                    <button onClick={handleReply}>Submit</button>
                </div>
            )}
            {comment.replies && comment.replies.map((reply) => (
                <Comment
                    key={reply.id}
                    comment={reply}
                    onLike={onLike}
                    onDislike={onDislike}
                    onDelete={onDelete}
                    onReply={onReply}
                    isReply={true}
                    mainCommenctId={comment.id}
                />
            ))}
        </div>
    );
};

export default Comment;