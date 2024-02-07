import React from 'react';
import withLikeCounter from './Hoc';

function LikeImage({ likeCounter, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Image {likeCounter}</button>
    </div>
  );
}

export default withLikeCounter(LikeImage);
