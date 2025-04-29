import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './comment';
import './comment.css'
import { useDispatch } from "react-redux";
import { addComment } from '../store/actions/actions';
const CommentList = (props) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch comments from the server
        // axios.get('/api/comments')
        //     .then((response) => setComments(response.data))
        //     .catch((error) => console.error('Error fetching comments:', error));
        console.log(props.comments)
        setComments(props.comments)
    }, []);

    const handleAddComment = () => {
        const comment = { id: Math.floor(Math.random() * 999), text: newComment, likes: 0, dislikes: 0, replies: [] };
        // axios.post('/api/comments', comment)
        //     .then((response) => setComments([...comments, response.data]))
        //     .catch((error) => console.error('Error adding comment:', error));
        // setNewComment('');
        dispatch(addComment(comment))
        setNewComment('');
    };

    const handleLike = (id) => {
        const updatedComments = comments.map((comment) =>
            comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
        );
        setComments(updatedComments);
    };

    const handleDislike = (id) => {
        const updatedComments = comments.map((comment) =>
            comment.id === id ? { ...comment, dislikes: comment.dislikes + 1 } : comment
        );
        setComments(updatedComments);
    };

    const handleDelete = (id) => {
        axios.delete(`/api/comments/${id}`)
            .then(() => setComments(comments.filter((comment) => comment.id !== id)))
            .catch((error) => console.error('Error deleting comment:', error));
    };

    const handleReply = (id, replyText) => {
        const reply = { id: Date.now(), text: replyText, likes: 0, dislikes: 0, replies: [] };
        const updatedComments = comments.map((comment) =>
            comment.id === id ? { ...comment, replies: [...comment.replies, reply] } : comment
        );
        setComments(updatedComments);
    };

    return (
        <div className="comment-list">
            <h2>Comments</h2>
            <div>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                />
                <button onClick={handleAddComment}>Submit</button>
            </div>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    onLike={handleLike}
                    onDislike={handleDislike}
                    onDelete={handleDelete}
                    onReply={handleReply}
                />
            ))}
        </div>
    );
};

export default CommentList;