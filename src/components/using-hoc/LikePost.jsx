import React from 'react';
import withLikeCounter from './Hoc';

function LikePost({ likeCounter, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Post {likeCounter}</button>
    </div>
  );
}

export default withLikeCounter(LikePost);
