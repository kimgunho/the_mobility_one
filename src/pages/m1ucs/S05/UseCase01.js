import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import classNames from 'classnames/bind';

import SURVEY_BG from '@/images/m1ucs/survey_bg.jpg';
import styles from './UseCase01.module.scss';

const cx = classNames.bind(styles);

const UseCase01 = () => {
  const { t } = useTranslation();

  return (
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
            <button className={cx('play')}>PLAY</button>
            <video>{/* <source src={VIDEO} type="video/mp4" /> */}</video>
          </div>
          <div className={cx('right')}>
            <button className={cx('play')}>PLAY</button>
            <video>{/* <source src={VIDEO} type="video/mp4" /> */}</video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase01;
