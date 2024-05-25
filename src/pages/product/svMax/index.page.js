import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import GlobalLayout from '@/components/layout/GlobalLayout';
import SVMAX from '@/images/product/SVMAX/SVMax.png';
import NETWORK from '@/images/product/SVMAX/network.png';
import NETWORK_MOBILE from '@/images/product/SVMAX/network_mobile.png';
import List from '@/components/ui/List';
import SubTop from '@/components/ui/SubTop';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <SubTop title="SVMAX" subTitle="PRODUCT - H/W" />
      <div className={cx('wrapper')}>
        <div className={cx('contents')}>
          <div className={cx('row')}>
            <div className={cx('left')}>
              <strong className={cx('title')}>Smatii View Max</strong>
              <p className={cx('desc')}>{t('SVMax.content01_desc')}</p>
              <div className={cx('image')}>
                <Image src={SVMAX} alt="" />
              </div>
            </div>
            <div className={cx('right')}>
              <div className={cx('box')}>
                <strong className={cx('title')}>LTE (4G)</strong>
                <List list={['LTE B1, B3, B8', 'Data Speed 50Mbps UL / 150Mbps DL (FDD Cat.4)', 'GPS 지원']} />
              </div>
              <div className={cx('box')}>
                <strong className={cx('title')}>Features</strong>
                <List
                  list={[
                    'Quad core ARM Cortex-A72 / RAM 8GB',
                    'Video H.264 1080p, 720p',
                    'WebRTC Video Streaming',
                    'UART(Serial) x 2 port',
                    'Micro HDMI(input) x 1 port',
                    'USB (C type) x 1 port',
                  ]}
                />
              </div>
              <div className={cx('box')}>
                <strong className={cx('title')}>Other</strong>
                <List
                  list={[
                    'Aluminum Case (Operating Temperature: -20℃ to 85℃)',
                    'Dimensions: 44mm x 65mm x 23mm, Weight: 80g (excluding antenna)',
                    'Power Consumption: 3W / Power Supply: DC 12V',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('contents')}>
          <strong className={cx('title')}>{t('SVMax.content02_title')}</strong>
          <p className={cx('desc')}>real-time video, control, and mission</p>
          <div className={cx('image')}>
            <Image className={cx('desktop')} src={NETWORK} alt="" />
            <Image className={cx('tablet')} src={NETWORK_MOBILE} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = (page) => <GlobalLayout>{page}</GlobalLayout>;

export default Page;
