import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Section02_PICTOGRAM from '@/images/main/integration_img.png';
import Section03_PICTOGRAM from '@/images/main/safety_img.png';
import Section04_PICTOGRAM from '@/images/main/extensibility_img.png';
import Section05_PICTOGRAM from '@/images/main/easyToUse_img.png';
import styles from './S02.module.scss';

const cx = classNames.bind(styles);

const S02 = () => {
  const { t } = useTranslation();
  const [top, setTop] = useState(0);
  const containerRef = useRef();
  const sectionsRef = useRef([]);
  const noiseRef = useRef();
  const trackRef = useRef();

  const sections = [
    {
      subTitle: 'MOBILITYONE',
      title: 'WHO WE ARE',
      desc: t('main.S02_01_desc'),
      pictogram: null,
    },
    {
      subTitle: 'OUR ADVANTAGE 01',
      title: 'INTEGRATION',
      desc: t('main.S02_02_desc'),
      pictogram: Section02_PICTOGRAM,
    },
    {
      subTitle: 'OUR ADVANTAGE 02',
      title: 'SAFETY',
      desc: t('main.S02_03_desc'),
      pictogram: Section03_PICTOGRAM,
    },
    {
      subTitle: 'OUR ADVANTAGE 03',
      title: 'EXTENSIBILITY/&COMPATIBILITY',
      desc: t('main.S02_04_desc'),
      pictogram: Section04_PICTOGRAM,
    },
    {
      subTitle: 'OUR ADVANTAGE 04',
      title: 'EASY TO USE',
      desc: t('main.S02_05_desc'),
      pictogram: Section05_PICTOGRAM,
    },
  ];

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      const desc = section.querySelector('[data-desc]');
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start: 'center bottom',
          end: 'center 30%',
        },
      });

      timeline
        .fromTo(desc, { opacity: 0 }, { opacity: 1 }, 0)
        .to(section, { className: cx(['section', 'overlap']) }, 0);
    });

    fixNoise();
    moveScrollThumb();
  }, []);

  const fixNoise = () => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      scrub: true,
      start: 'top top',
      end: 'bottom bottom',
      pin: noiseRef.current,
      onUpdate: (self) => {
        const progress = self.progress;
        const endThreshold = 0.95;
        if (!noiseRef.current) return;

        if (progress >= endThreshold) {
          gsap.to(noiseRef.current, { opacity: 0 });
        } else {
          gsap.to(noiseRef.current, { opacity: 1 });
        }
      },
    });
  };

  const moveScrollThumb = () => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (!trackRef.current) return;
        const _top = ((self.progress - 0) * (trackRef.current.clientHeight - 100 - 0)) / (1 - 0) + 0;
        setTop(_top);
      },
    });
  };

  return (
    <div ref={containerRef} className={cx('container')}>
      <div className={cx('scrollbar')}>
        <div ref={trackRef} className={cx('track')}>
          <div className={cx('thumb')} style={{ top }} />
        </div>
      </div>
      <div ref={noiseRef} className={cx('noise')} />
      {sections.map((section, index) => (
        <div key={section.title} ref={(el) => (sectionsRef.current[index] = el)} className={cx('section')}>
          <div className={cx('left')}>
            <div className={cx('top')}>
              <p className={cx('subTitle')}>{section.subTitle}</p>
              <strong className={cx('title')}>
                {section.title.split('/').map((text) => (
                  <span key={text}>{text}</span>
                ))}
              </strong>
            </div>
            {section.pictogram && (
              <div className={cx('pictogram')}>
                <Image src={section.pictogram} alt="" />
              </div>
            )}
          </div>
          <div className={cx('right')}>
            <p data-desc>{section.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default S02;
