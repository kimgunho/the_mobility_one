import classNames from 'classnames/bind';
import { RiCloseFill } from 'react-icons/ri';

import styles from './VideoModal.module.scss';

const cx = classNames.bind(styles);

const VideoModal = ({ src, close }) => {
  return (
    <div className={cx('container')}>
      <button onClick={close} type="button" className={cx('close')}>
        <RiCloseFill size={48} />
      </button>
      <div className={cx('video')}>
        <iframe
          src={src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
