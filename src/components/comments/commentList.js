import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './comment';
import './comment.css'
import { useDispatch } from "react-redux";
import { addComment, getComment, replyComment } from '../store/actions/actions';
import { useSelector } from 'react-redux';
const CommentList = (props) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const comments1 = useSelector((state) => state.main.comments)
    const filteredComments = useSelector((state) => state.main.filteredComments)
    const fullName = useSelector((state) => state.auth.fullName)
    const email = useSelector((state) => state.auth.email)
    const imageUrl = useSelector((state) => state.auth.imageUrl)
    const userId = useSelector((state) => state.auth.userId)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch comments from the server
        // axios.get('/api/comments')
        //     .then((response) => setComments(response.data))
        //     .catch((error) => console.error('Error fetching comments:', error));
        dispatch(getComment(props.blogId))
        setComments(filteredComments)
    }, [filteredComments]);

    const handleAddComment = () => {
        const comment = {
            blogId: props.blogId,
            id: Math.floor(Math.random() * 999),
            text: newComment,
            likes: 0,
            dislikes: 0,
            replies: [],
            createDate: new Date(),
            name: fullName,
            imageUrl: imageUrl,
            email: email,
            //isDelete: false,
            userId: userId,
        };
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
        // const reply = { id: Date.now(), text: replyText, likes: 0, dislikes: 0, replies: [] };
        const reply = {
            CommmentId: id,
            id: Math.floor(Math.random() * 999),
            text: replyText,
            likes: 0,
            dislikes: 0,
            replies: [],
            createDate: new Date(),
            name: fullName,
            imageUrl: imageUrl,
            email: email,
            //isDelete: false,
            userId: userId,
        };

        const updatedComments = comments.map((comment) =>
            comment.id === id ? { ...comment, replies: [...comment.replies, reply] } : comment
        );
        // axios.post('/api/comments', comment)
        //     .then((response) => setComments([...comments, response.data]))
        //     .catch((error) => console.error('Error adding comment:', error));
        // setNewComment('');
        dispatch(replyComment(reply))
        setComments(filteredComments);
    };

    return (
        <div className="comment-list">
            <h2>Comments</h2>
            {isAuthenticated ?
                <React.Fragment>
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
                            key={comment.Cid}
                            comment={comment}
                            onLike={handleLike}
                            onDislike={handleDislike}
                            onDelete={handleDelete}
                            onReply={handleReply}
                        />

                    ))}
                </React.Fragment>
                : "Please login to add comment"}
        </div>
    );
};

export default CommentList;