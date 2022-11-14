import './tests.modules.scss';

import { ButtonLike } from '../components/ButtonLike';
import ButtonLike2 from '../components/ButtonLike/buttonLike2';
import { ButtonLike3 } from '../components/ButtonLike/buttonLike3';

export function Like() {
  return (
    <div className='container'>
      {/* <ButtonLike2 /> */}
      <ButtonLike3 />
    </div>
  )
}
