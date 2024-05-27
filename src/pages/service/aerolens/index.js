import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import GlobalLayout from '@/components/layout/GlobalLayout';
import AEROLENS from '@/images/service/aerolens/aerolens.png';
import AEROLENS_MOBILE from '@/images/service/aerolens/aerolens_mobile.png';
import AEROLENS_MAIN_01 from '@/images/service/aerolens/AeroLens_main_01.png';
import AEROLENS_MAIN_02 from '@/images/service/aerolens/AeroLens_main_02.png';
import AEROLENS_MAIN_03 from '@/images/service/aerolens/AeroLens_main_03.png';
import SubTop from '@/components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <SubTop title="AeroLens" subTitle="SERVICE" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <strong className={cx('title')}>AeroLens</strong>
          <p className={cx('desc')}>{t('aeroLens.desc_01')}</p>
          <div className={cx('top')}>
            <Image className={cx('desktop')} src={AEROLENS} alt="" />
            <Image className={cx('tablet')} src={AEROLENS_MOBILE} alt="" />
          </div>
          <div className={cx('bottom')}>
            <div className={cx('left')}>
              <p className={cx('desc')}>{t('aeroLens.desc_02')}</p>
              <div className={cx('image')}>
                <p className={cx('desc')}>{t('aeroLens.card01_desc')}</p>
                <Image src={AEROLENS_MAIN_01} alt="" />
              </div>
            </div>
            <div className={cx('right')}>
              <div className={cx('image')}>
                <p className={cx('desc')}>{t('aeroLens.card02_desc')}</p>
                <Image src={AEROLENS_MAIN_02} alt="" />
              </div>
              <div className={cx('image')}>
                <p className={cx('desc')}>{t('aeroLens.card03_desc')}</p>
                <Image src={AEROLENS_MAIN_03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = (page) => <GlobalLayout>{page}</GlobalLayout>;

export default Page;
