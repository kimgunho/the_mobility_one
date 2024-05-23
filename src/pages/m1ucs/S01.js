import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import M1UCS_IMG from '@/images/m1ucs/m1ucs.jpg';
import { M1UCS_DOMAIN } from '@/config';
import RoundButton from '@/components/ui/RoundButton';
import styles from './S01.module.scss';

const cx = classNames.bind(styles);

const S01 = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('top')}>
        <Image src={M1UCS_IMG} alt="" />
      </div>
      <strong className={cx('bold')}>{t('m1ucs.S01_title')}</strong>
      <p className={cx('desc')}>{t('m1ucs.S01_desc')}</p>
      <div className={cx('box')}>
        <RoundButton text="START M1UCS" href={M1UCS_DOMAIN} />
      </div>
    </div>
  );
};

export default S01;
