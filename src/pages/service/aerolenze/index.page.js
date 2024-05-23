import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import GlobalLayout from '@/components/layout/GlobalLayout';
import AERO_LENZE from '@/images/service/aerolenze/aero_lenze.png';
import AERO_LENZE_MAIN_01 from '@/images/service/aerolenze/AeroLens_main_01.png';
import AERO_LENZE_MAIN_02 from '@/images/service/aerolenze/AeroLens_main_02.png';
import AERO_LENZE_MAIN_03 from '@/images/service/aerolenze/AeroLens_main_03.png';
import SubTop from '@/components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <SubTop title="AeroLenze" subTitle="SERVICE" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <strong className={cx('title')}>AeroLenze</strong>
          <p className={cx('desc')}>{t('aeroLenze.desc_01')}</p>
          <div className={cx('top')}>
            <Image src={AERO_LENZE} alt="" />
          </div>
          <div className={cx('bottom')}>
            <div className={cx('left')}>
              <p className={cx('desc')}>{t('aeroLenze.desc_02')}</p>
              <div className={cx('image')}>
                <p className={cx('desc')}>{t('aeroLenze.card01_desc')}</p>
                <Image src={AERO_LENZE_MAIN_01} alt="" />
              </div>
            </div>
            <div className={cx('right')}>
              <div className={cx('image')}>
                <p className={cx('desc')}>{t('aeroLenze.card02_desc')}</p>
                <Image src={AERO_LENZE_MAIN_02} alt="" />
              </div>
              <div className={cx('image')}>
                <p className={cx('desc')}>{t('aeroLenze.card03_desc')}</p>
                <Image src={AERO_LENZE_MAIN_03} alt="" />
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
