import { useRef } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './index.module.scss';
import UseCase01 from './UseCase01';
import UseCase02 from './UseCase02';
import UseCase03 from './UseCase03';
import UseCase04 from './UseCase04';
import UseCase05 from './UseCase05';

const cx = classNames.bind(styles);

const S05 = () => {
  const slickRef = useRef();

  const settings = {
    className: cx('variable'),
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    variableWidth: true,
  };

  const prev = () => {
    slickRef.current.slickPrev();
  };

  const next = () => {
    slickRef.current.slickNext();
  };

  return (
    <div className={cx('container')}>
      <div className={cx('slick')}>
        <div className={cx('controls')}>
          <button onClick={prev} className={cx('button', 'prev')} type="">
            <RiArrowLeftSLine size={48} />
          </button>
          <button onClick={next} className={cx('button', 'next')} type="">
            <RiArrowRightSLine size={48} />
          </button>
        </div>
        <Slider ref={(slider) => (slickRef.current = slider)} {...settings}>
          <div className={cx('swipe')}>
            <UseCase01 />
          </div>
          <div className={cx('swipe')}>
            <UseCase02 />
          </div>
          <div className={cx('swipe')}>
            <UseCase03 />
          </div>
          <div className={cx('swipe')}>
            <UseCase04 />
          </div>
          <div className={cx('swipe')}>
            <UseCase05 />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default S05;
