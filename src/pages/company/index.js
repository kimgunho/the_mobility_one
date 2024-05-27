import classNames from 'classnames/bind';

import Seo from '@/components/global/Seo';
import GlobalLayout from '@/components/layout/GlobalLayout';
import styles from './index.module.scss';
import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import S04 from './S04';
import S05 from './S05';
import S06 from './S06';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Seo title="회사소개" description="모빌리티원의 회사소개입니다." />
      <S01 />
      <div className={cx('wrapper')}>
        <S02 />
        <S03 />
      </div>
      <S04 />
      <S05 />
      <S06 />
    </div>
  );
};

Page.getLayout = (page) => <GlobalLayout>{page}</GlobalLayout>;

export default Page;
