import { useRef } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './index.module.scss';
import UseCase01 from './UseCase01';

const cx = classNames.bind(styles);

const S05 = () => {
  const slickRef = useRef();

  const settings = {
    className: cx('variable'),
    centerMode: true,
    arrows: false,
    centerPadding: '100px',
    slidesToShow: 1,
    infinite: false,
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
          <UseCase01 />
        </Slider>
      </div>
    </div>
  );
};

export default S05;
