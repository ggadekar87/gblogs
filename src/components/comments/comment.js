import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comment = ({ comment, onLike, onDislike, onDelete, onReply }) => {
    const [reply, setReply] = useState('');
    const [showReplyBox, setShowReplyBox] = useState(false);

    const handleReply = () => {
        onReply(comment.id, reply);
        setReply('');
        setShowReplyBox(false);
    };

    useEffect(() => {
    })
    return (
        <div className="comment">
            <p>{comment.text}</p>
            <div>
                <button onClick={() => onLike(comment.id)}>Like ({comment.likes})</button>
                <button onClick={() => onDislike(comment.id)}>Dislike ({comment.dislikes})</button>
                <button onClick={() => setShowReplyBox(!showReplyBox)}>Reply</button>
                <button onClick={() => onDelete(comment.id)}>Delete</button>
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
                />
            ))}
        </div>
    );
};

export default Comment;