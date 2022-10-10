import { useState } from 'react';
import './styles.modules.scss';

export function ButtonLike() {
  const [count, setCount] = useState(100)
  const [isActive, setIsActive] = useState(false)

  function pressButton() {
    setIsActive(!isActive)
    if (!isActive) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div className='container'>
      <div className='sub-container'>
        <button className={!isActive ? 'like-button' : 'liked'} onClick={pressButton}>
          <span>Like</span>
          <span>|</span>
          <span className='likes-counter'>{count}</span>
        </button>
      </div>
    </div>
  )
}


// function pressButton(event: any) {
//    event.currentTarget.classList.toggle('bg-salmon');
// }