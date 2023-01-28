import './tests.modules.scss';

import { ButtonLike } from '../components/Button/ButtonLike';
import ButtonLike2 from '../components/Button/ButtonLike/buttonLike2';
import { ButtonLike3 } from '../components/Button/ButtonLike/buttonLike3';
import { ButtonReact } from '../components/Button/ButtonReact';

export function Like() {
  return (
    <div className='container'>
      {/* <ButtonLike /> */}
      <ButtonReact />
      {/* <ButtonLike2 /> */}
      {/* <ButtonLike3 /> */}
    </div>
  )
}
