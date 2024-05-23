import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';

import M1UCS from '@/images/main/m1ucs.png';
import SURVEY from '@/images/main/survey.png';
import AEROLENZE from '@/images/main/aero_lenze.png';

import styles from './S03.module.scss';

const cx = classNames.bind(styles);

const S03 = () => {
  return (
    <div className={cx('container')}>
      <strong className={cx('title')}>PRODUCT & SERVICE</strong>
      <div className={cx('wrapper')}>
        <div className={cx('box')}>
          <Link href={'/m1ucs'} className={cx('content')}>
            <p className={cx('label')}>M1UCS</p>
            <Image draggable={false} src={M1UCS} alt="" />
          </Link>
        </div>
        <div className={cx('box')}>
          <Link href={'/service/survey'} className={cx('content')}>
            <p className={cx('label')}>SURVEY</p>
            <Image draggable={false} src={SURVEY} alt="" />
          </Link>
          <Link href={'/service/aerolenze'} className={cx('content')}>
            <p className={cx('label')}>AERO LENZE</p>
            <Image draggable={false} src={AEROLENZE} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default S03;
