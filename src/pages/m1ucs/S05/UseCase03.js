import classNames from 'classnames/bind';
import { useState } from 'react';

import VideoModal from '@/components/global/VideoModal';
import styles from './UseCase03.module.scss';

const cx = classNames.bind(styles);

const UseCase03 = () => {
  const [videoSrc, setVideoSrc] = useState();

  const showVideo = (src) => {
    setVideoSrc(src);
  };

  const hideVideo = () => {
    setVideoSrc(null);
  };

  return (
    <div className={cx('container')}>
      {videoSrc && <VideoModal src={videoSrc} close={hideVideo} />}
      <div className={cx('left')}>
        <div className={cx('top')}>
          <p className={cx('subTitle')}>Use case</p>
          <strong className={cx('title')}>
            Combined Use of Drones and Recovery Robots in case of marine oil spill accidents.
          </strong>
          <p className={cx('desc')}>With Sheco</p>
        </div>
        <div className={cx('bottom')}>
          <ul className={cx('list')}>
            <li>
              <strong>Rapid Response Using Drones</strong>
              <p>
                After deploying to the accident site, drones capture images of the oil spill area and send them to the
                operation center, including location information.
              </p>
            </li>
            <li>
              <strong>Oil Removal Using Recovery Robots</strong>
              <p>
                Based on drone imagery, a work plan is established, and multiple small aquatic robots are deployed
                simultaneously to remove the oil. (Conventional large oil removal ships take significant time to reach
                the scene.)
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('right')}>
        <button
          onClick={() => {
            showVideo('https://www.youtube.com/embed/DjlIhI7F_fw?si=DzsnUYXymtnheso9');
          }}
          className={cx('play')}>
          PLAY
        </button>
        <video autoPlay muted loop>
          <source src={'./assets/videos/use_case_04_low.mp4'} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default UseCase03;
