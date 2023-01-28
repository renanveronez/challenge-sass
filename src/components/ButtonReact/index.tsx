import { useState } from 'react';
import './buttonlikedislike.modules.scss';

export function ButtonLike() {
  const [like, setLike] = useState(100)
  const [dislike, setDislike] = useState(25)
  const [hasLiked, setHasLiked] = useState(false)
  const [hasDisliked, setHasDisliked] = useState(false)

  function handleLike() {
    if (!hasLiked) {
      setHasLiked(true);
      setHasDisliked(false)
      setLike(like + 1)
      setDislike(25)
    } else {
      setHasLiked(false)
      setHasDisliked(false)
      setLike(100)
      setDislike(25)

    }
  }

  function handleDislike() {
    if (!hasDisliked) {
      setHasDisliked(true);
      setHasLiked(false)
      setDislike(dislike + 1)
      setLike(100)

    } else {
      setHasDisliked(false)
      setHasLiked(false)
      setLike(100)
      setDislike(25)
    }
  }

  return (
    <div className='container'>
      <div className='sub-container'>
        <button className={!hasLiked ? 'like-off' : 'like-on'} onClick={handleLike}>
          <span className='counter'>Like</span>
          <span className='counter'>|</span>
          <span className='counter'>{like}</span>
        </button>
      </div>
      <div className='sub-container'>
        <button className={!hasDisliked ? 'like-off' : 'dislike-on'} onClick={handleDislike}>
          <span className='counter'>Dislike</span>
          <span className='counter'>|</span>
          <span className='counter'>{dislike}</span>
        </button>
      </div>
    </div>
  )
}