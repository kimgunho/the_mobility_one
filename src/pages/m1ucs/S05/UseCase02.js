import classNames from 'classnames/bind';

import styles from './UseCase02.module.scss';

const cx = classNames.bind(styles);

const UseCase02 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('left')}>
        <div className={cx('top')}>
          <p className={cx('subTitle')}>Use case</p>
          <strong className={cx('title')}>Remote Operation of Leisure Boats</strong>
          <p className={cx('desc')}>With Global Korea</p>
        </div>
        <div className={cx('bottom')}>
          <ul className={cx('list')}>
            <li>
              <strong>Restricted Area Control&Safety Enhancement</strong>
              <p>Automatically moves to a safe zone when entering a hazardous or controlled area.</p>
            </li>
            <li>
              <strong>Expansion of services using autonomous navigation</strong>
              <p>
                Autonomous services for the disabled; available for external viewing during restricted nighttime
                boarding.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('right')}>
        <video autoPlay muted loop>
          <source src={'./assets/videos/use_case_03_low.mp4'} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default UseCase02;
