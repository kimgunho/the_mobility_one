import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import GlobalLayout from '@/components/layout/GlobalLayout';
import M1Winch from '@/images/product/winchForDrone/m1_winch.png';
import M1Winch_Item from '@/images/product/winchForDrone/winch_item.png';
import List from '@/components/ui/List';
import SubTop from '@/components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <SubTop title="M1 Winch for Drone" subTitle="PRODUCT - H/W" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <div className={cx('top')}>
            <strong className={cx('title')}>M1 Winch</strong>
            <div className={cx('image')}>
              <Image src={M1Winch} alt="" />
            </div>
          </div>
          <div className={cx('center')}>
            <div className={cx('left')}>
              <Image src={M1Winch_Item} alt="" />
            </div>
            <div className={cx('middle')}>
              <p className={cx('title')}>SPEC</p>
              <ul className={cx('list')}>
                <li>
                  <span className={cx('bold')}>Size</span>
                  <span>W140 X D65 X H75 mm</span>
                </li>
                <li>
                  <span className={cx('bold')}>Weight</span>
                  <span>800g</span>
                </li>
                <li>
                  <span className={cx('bold')}>Working voltage</span>
                  <span>5V</span>
                </li>
                <li>
                  <span className={cx('bold')}>Motor type</span>
                  <span>BLDC MOTOR(ENCONDER)</span>
                </li>
                <li>
                  <span className={cx('bold')}>Motor power</span>
                  <span>~84W</span>
                </li>
                <li>
                  <span className={cx('bold')}>Motor revolution</span>
                  <span>10,873RPM</span>
                </li>
              </ul>
            </div>
            <div className={cx('right')}>
              <ul>
                <li>
                  <span className={cx('bold')}>Output revolution</span>
                  <span>83RPM</span>
                </li>
                <li>
                  <span className={cx('bold')}>Reduction ratio</span>
                  <span>131:1</span>
                </li>
                <li>
                  <span className={cx('bold')}>Throw-line length</span>
                  <span>10~80m</span>
                </li>
                <li>
                  <span className={cx('bold')}>Control mode</span>
                  <span>AUTO</span>
                </li>
                <li>
                  <span className={cx('bold')}>Signal mode</span>
                  <span>PWM signal</span>
                </li>
                <li>
                  <span className={cx('bold')}>Control distance</span>
                  <span> 10~80m</span>
                </li>
                <li>
                  <span className={cx('bold')}>Mas.payload</span>
                  <span>1kg</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('bottom')}>
            <List list={[t('winchForDrone.list_01'), t('winchForDrone.list_02'), t('winchForDrone.list_03')]} />
          </div>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = (page) => <GlobalLayout>{page}</GlobalLayout>;

export default Page;
