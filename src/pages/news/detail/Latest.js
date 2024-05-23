import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';

import TEMP from '@/images/temp/drone.jpg';

import styles from './Latest.module.scss';

const cx = classNames.bind(styles);

const Latest = () => {
  return (
    <div className={cx('container')}>
      <strong className={cx('title')}>LATEST NEWS</strong>
      <ul className={cx('list')}>
        {Array(4)
          .fill()
          .map((_, i) => (
            <li key={i}>
              <Link href={'/news/detail/aaa'}>
                <div className={cx('info')}>
                  <p className={cx('publishedAt')}>AUG 17, 2024</p>
                  <strong className={cx('title')}>Extensibility & Compatibility</strong>
                </div>
                <Image src={TEMP} alt="" />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Latest;
