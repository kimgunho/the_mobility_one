import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import LOGO_LARGE from '@/images/company/logo_large.png';
import styles from './S01.module.scss';

const cx = classNames.bind(styles);

const S01 = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('logo')}>
        <div className={cx('image')}>
          <Image src={LOGO_LARGE} alt="" />
        </div>
        <p>MOBILITY ONE</p>
      </div>
      <p className={cx('bold')}>{t('company.S01_title')}</p>
      <p className={cx('text')}>{t('company.S01_desc')}</p>
      <div className={cx('background')} />
    </div>
  );
};

export default S01;
