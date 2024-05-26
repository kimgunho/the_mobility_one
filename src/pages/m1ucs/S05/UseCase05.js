import classNames from 'classnames/bind';
import Image from 'next/image';

import IMG01 from '@/images/m1ucs/use_case05/task_assignment.jpg';
import IMG02 from '@/images/m1ucs/use_case05/task_execution.jpg';
import styles from './UseCase05.module.scss';

const cx = classNames.bind(styles);

const UseCase05 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('top')}>
        <p className={cx('subTitle')}>Use case</p>
        <strong className={cx('title')}>Indoor Service Robot{'\n'} Operation</strong>
      </div>
      <div className={cx('bottom')}>
        <div className={cx('item')}>
          <div className={cx('image')}>
            <Image src={IMG01} alt="" />
          </div>
          <p className={cx('desc')}>Task Assignment to Robots</p>
        </div>
        <div className={cx('item')}>
          <div className={cx('image')}>
            <Image src={IMG02} alt="" />
          </div>
          <p className={cx('desc')}>Task Execution</p>
        </div>
      </div>
    </div>
  );
};

export default UseCase05;
