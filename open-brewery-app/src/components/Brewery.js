import React from 'react'
import {useState} from 'react'
import './Brewery.css';
import { useParams } from 'react-router-dom';
export const Brewery = () => {
    const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(0);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = {
      text: newComment,
      rating: newRating,
    };
    setComments([...comments, comment]);
    setNewComment('');
    setNewRating(0);
  };

  const handleRating = (rating) => {
    setNewRating(rating);
  };
  return (
   
      
   <div>
          <h3>Leave a Comment</h3>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here"
            />
            <div>
              <label>
                Rating:
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${newRating >= star ? 'filled' : ''}`}
                      onClick={() => handleRating(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>

          <h3>Comments</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <p>{comment.text}</p>
                <p>Rating: {comment.rating}</p>
              </li>
            ))}
          </ul>
       
     
    </div>
  );
};

export default Brewery;