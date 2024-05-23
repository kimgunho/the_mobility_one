import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';

import TEMP from '@/images/temp/drone.jpg';

import RoundButton from '@/components/ui/RoundButton';
import styles from './S05.module.scss';

const cx = classNames.bind(styles);

const S05 = () => {
  return (
    <div className={cx('container')}>
      <strong className={cx('title')}>LATEST NEWS</strong>
      <div className={cx('wrapper')}>
        <ul className={cx('list')}>
          {Array(3)
            .fill()
            .map((_, i) => (
              <li key={i}>
                <Link href="/">
                  <div className={cx('box')}>
                    <p className={cx('date')}>AUG 17, 2024 </p>
                    <strong className={cx('title')}>MOBILITYONE Website Renewal Project</strong>
                  </div>
                  <div className={cx('dimmed')} />
                  <div className={cx('image')}>
                    <Image src={TEMP} alt="" />
                  </div>
                </Link>
              </li>
            ))}
        </ul>
        <div className={cx('box')}>
          <RoundButton text="VIEW ALL" href="/news" />
        </div>
      </div>
    </div>
  );
};

export default S05;
