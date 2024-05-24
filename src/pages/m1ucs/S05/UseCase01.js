import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';

import SURVEY_BG from '@/images/m1ucs/use_case01/top.jpg';
import THUMBNAIL01 from '@/images/m1ucs/use_case01/thumbnail01.jpg';
import THUMBNAIL02 from '@/images/m1ucs/use_case01/thumbnail02.jpg';
import VideoModal from '@/components/global/VideoModal';
import styles from './UseCase01.module.scss';

const cx = classNames.bind(styles);

const UseCase01 = () => {
  const [videoSrc, setVideoSrc] = useState();
  const { t } = useTranslation();

  const showVideo = (src) => {
    setVideoSrc(src);
  };

  const hideVideo = () => {
    setVideoSrc(null);
  };

  return (
    <>
      <div className={cx('container')}>
        <div className={cx('left')}>
          <div className={cx('top')}>
            <p className={cx('subTitle')}>Use case</p>
            <strong className={cx('title')}>{t('m1ucs.S05_swipe01_title')}</strong>
          </div>
          <div className={cx('bottom')}>
            <ul className={cx('list')}>
              <li>
                <strong>{t('m1ucs.S05_swipe01_list01_title')}</strong>
                <p>{t('m1ucs.S05_swipe01_list01_desc')}</p>
              </li>
              <li>
                <strong>{t('m1ucs.S05_swipe01_list02_title')}</strong>
                <p>{t('m1ucs.S05_swipe01_list02_desc')}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('top')}>
            <div className={cx('image')}>
              <Image src={SURVEY_BG} alt="" />
            </div>
          </div>
          <div className={cx('bottom')}>
            <div className={cx('left')}>
              <button
                onClick={() => {
                  showVideo('https://www.youtube.com/embed/KldtFOrzbXk?si=YOdsvUWK0j6ezVqI');
                }}
                className={cx('play')}>
                PLAY
              </button>
              <Image src={THUMBNAIL01} alt="" />
            </div>
            <div className={cx('right')}>
              <button
                onClick={() => {
                  showVideo('https://www.youtube.com/embed/aDuXFb8NeQc?si=Fq4mR2am9t6B58mZ');
                }}
                className={cx('play')}>
                PLAY
              </button>
              <Image src={THUMBNAIL02} alt="" />
            </div>
          </div>
        </div>
      </div>
      {videoSrc && <VideoModal src={videoSrc} close={hideVideo} />}
    </>
  );
};

export default UseCase01;
