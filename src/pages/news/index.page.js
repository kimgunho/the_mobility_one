import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';

import TEMP from '@/images/temp/drone.jpg';
import GlobalLayout from '@/components/layout/GlobalLayout';
import RoundButton from '@/components/ui/RoundButton';
import SubTop from '@/components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <SubTop title="NEWS" subTitle="MOBILITIYONE" />
      <div className={cx('wrapper')}>
        <p className={cx('text')}>
          NEWS <span className={cx('total')}>(24)</span>
        </p>
        <ul className={cx('list')}>
          {Array(10)
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
        <RoundButton text="MORE VIEW" onClick={() => console.log('more...')} />
      </div>
    </div>
  );
};

Page.getLayout = (page) => <GlobalLayout>{page}</GlobalLayout>;

export default Page;
