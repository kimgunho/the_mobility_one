import classNames from 'classnames/bind';
import Image from 'next/image';

import BTE from '@/images/partners/bte.png';
import DOOSAN from '@/images/partners/doosan.png';
import NAMYANG from '@/images/partners/namyang.png';
import GHOST_ROBOTICS from '@/images/partners/ghost_robotics.png';
import WEFLO from '@/images/partners/weflo.png';
import SMATII from '@/images/partners/smatii.png';
import AERO_SPACE_UNI from '@/images/partners/aerospace_uni.png';
import FLYGROUND from '@/images/partners/flyground.png';
import FEELTEK from '@/images/partners/feeltek.png';
import RIFATRON from '@/images/partners/rifatron.png';
import AIRON from '@/images/partners/airon.png';
import DRSYS from '@/images/partners/drsys.png';
import DSPECTER from '@/images/partners/dspecter.png';
import ASSETTA from '@/images/partners/assetta.png';
import ARDENT from '@/images/partners/ardent.png';
import SHECO from '@/images/partners/sheco.png';
import GLOBAL_KOREA from '@/images/partners/globalkorea.png';
import QUATERNION from '@/images/partners/quaternion.png';
import RENEU from '@/images/partners/reneu.png';
import NEUROMEKA from '@/images/partners/neuromeka.png';
import RKM from '@/images/partners/krm.png';
import THIRDEYE from '@/images/partners/thirdeye.png';

import styles from './Partners.module.scss';

const cx = classNames.bind(styles);

const Partners = () => {
  return (
    <div className={cx('container')}>
      {Array(2)
        .fill()
        .map((_, i) => (
          <ul key={i} className={cx('list')}>
            <li>
              <Image src={BTE} alt="" />
            </li>
            <li>
              <Image src={DOOSAN} alt="" />
            </li>
            <li>
              <Image src={NAMYANG} alt="" />
            </li>
            <li>
              <Image src={GHOST_ROBOTICS} alt="" />
            </li>
            <li>
              <Image src={WEFLO} alt="" />
            </li>
            <li>
              <Image src={SMATII} alt="" />
            </li>
            <li>
              <Image src={AERO_SPACE_UNI} alt="" />
            </li>
            <li>
              <Image src={FLYGROUND} alt="" />
            </li>
            <li>
              <Image src={FEELTEK} alt="" />
            </li>
            <li>
              <Image src={RIFATRON} alt="" />
            </li>
            <li>
              <Image src={AIRON} alt="" />
            </li>
            <li>
              <Image src={DRSYS} alt="" />
            </li>
            <li>
              <Image src={DSPECTER} alt="" />
            </li>
            <li>
              <Image src={ASSETTA} alt="" />
            </li>
            <li>
              <Image src={ARDENT} alt="" />
            </li>
            <li>
              <Image src={SHECO} alt="" />
            </li>
            <li>
              <Image src={GLOBAL_KOREA} alt="" />
            </li>
            <li>
              <Image src={QUATERNION} alt="" />
            </li>
            <li>
              <Image src={RENEU} alt="" />
            </li>
            <li>
              <Image src={NEUROMEKA} alt="" />
            </li>
            <li>
              <Image src={RKM} alt="" />
            </li>
            <li>
              <Image src={THIRDEYE} alt="" />
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Partners;
