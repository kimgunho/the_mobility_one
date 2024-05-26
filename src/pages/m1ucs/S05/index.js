import { useRef } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

import styles from './index.module.scss';
import UseCase01 from './UseCase01';
import UseCase02 from './UseCase02';
import UseCase03 from './UseCase03';
import UseCase04 from './UseCase04';
import UseCase05 from './UseCase05';

const cx = classNames.bind(styles);

const S05 = () => {
  const [activeIndex, setIndex] = useState(0);
  const flickingRef = useRef();

  const prev = () => {
    flickingRef.current.prev().catch(() => {});
  };

  const next = () => {
    flickingRef.current.next().catch(() => {});
  };

  const handleChange = (e) => {
    setIndex(e.index);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx('controls')}>
          <button onClick={prev} className={cx('button', 'prev')} type="">
            <RiArrowLeftSLine size={48} />
          </button>
          <button onClick={next} className={cx('button', 'next')} type="">
            <RiArrowRightSLine size={48} />
          </button>
        </div>
        <Flicking ref={flickingRef} onChanged={handleChange} className={cx('flicking')} align={'center'}>
          <div className={cx('panel', { active: activeIndex === 0 })}>
            <UseCase01 />
          </div>
          <div className={cx('panel', { active: activeIndex === 1 })}>
            <UseCase02 />
          </div>
          <div className={cx('panel', { active: activeIndex === 2 })}>
            <UseCase03 />
          </div>
          <div className={cx('panel', { active: activeIndex === 3 })}>
            <UseCase04 />
          </div>
          <div className={cx('panel', { active: activeIndex === 4 })}>
            <UseCase05 />
          </div>
        </Flicking>
      </div>
    </div>
  );
};

export default S05;
