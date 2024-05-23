import classNames from 'classnames/bind';
import Link from 'next/link';

import GlobalLayout from '@/components/layout/GlobalLayout';
import SubTop from '@/components/ui/SubTop';
import Latest from './Latest';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <SubTop title="NEWS" subTitle="MOBILITIYONE" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <p className={cx('publishedAt')}>AUG 17, 2024</p>
          <strong className={cx('title')}>Extensibility & Compatibility</strong>
          <div className={cx('html')}>
            MOBILITYONE is a specialized solution and service company that integrates essential devices and technologies
            centered around on-site work and provides a work application that anyone can easily operate, aiming to make
            the world more efficient. With MobilityOne&apos;s solutions and services, you no longer have to waste time
            learning how to use devices, allowing you to focus solely on your work.
          </div>
        </div>
        <div className={cx('buttons')}>
          <Link className={cx('button')} href={'/news'}>
            LIST
          </Link>
          <div className={cx('box')}>
            <Link className={cx('button')} href="/news/detail/aaa">
              PREVIOUS
            </Link>
            <Link className={cx('button')} href="/news/detail/aaa">
              NEXT
            </Link>
          </div>
        </div>
      </div>
      <Latest />
    </div>
  );
};

Page.getLayout = (page) => <GlobalLayout>{page}</GlobalLayout>;

export default Page;
