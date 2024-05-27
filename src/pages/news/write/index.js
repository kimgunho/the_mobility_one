import classNames from 'classnames/bind';

import GlobalLayout from '@/components/layout/GlobalLayout';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return <div className={cx('container')}>write</div>;
};

Page.getLayout = (page) => <GlobalLayout>{page}</GlobalLayout>;

export default Page;
