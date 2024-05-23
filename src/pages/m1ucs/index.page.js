import classNames from 'classnames/bind';

import GlobalLayout from '@/components/layout/GlobalLayout';
import SubTop from '@/components/ui/SubTop';
import styles from './index.module.scss';
import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import S04 from './S04';
import S05 from './S05';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <SubTop title="M1UCS" subTitle="MOBILITY ONE" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <S01 />
          <S02 />
          <S03 />
          <S04 />
        </div>
      </div>
      <S05 />
    </div>
  );
};

Page.getLayout = (page) => <GlobalLayout>{page}</GlobalLayout>;

export default Page;
