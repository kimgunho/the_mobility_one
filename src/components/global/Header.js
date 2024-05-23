import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import LOGO from '@/images/global/logo.png';
import menus from '@/define/menus';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    window.addEventListener('wheel', wheel);

    return () => {
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('wheel', wheel);
    };
  }, []);

  const wheel = (e) => {
    e.deltaY < 0 && e.deltaX === 0 ? setHide(false) : setHide(true);
  };

  const scroll = () => {
    if (window.scrollY === 0) {
      setHide(false);
    }
  };

  const toggle = () => {
    if (lang === 'ko') {
      i18n.changeLanguage('en');
      localStorage.setItem('@m1/lang', 'en');
      setLang('en');
    } else {
      i18n.changeLanguage('ko');
      localStorage.setItem('@m1/lang', 'ko');
      setLang('ko');
    }
  };

  return (
    <header className={cx('container', { hide })}>
      <Link className={cx('logo')} href="/">
        <Image src={LOGO} alt="" />
      </Link>
      <div className={cx('wrapper')}>
        <ul className={cx('gnb')}>
          {menus.map((menu) => {
            const menuActive = pathname?.includes(menu.url);
            if (menu.sub) {
              return (
                <li key={menu.title}>
                  <Link className={cx('link', { active: menuActive })} href={`${menu.url}${menu.sub[0].url}`}>
                    {menu.title}
                  </Link>
                  <ul className={cx('sub')}>
                    {menu.sub.map((_sub) => {
                      const subMenuActive = pathname?.includes(_sub.url);
                      return (
                        <li key={_sub.title}>
                          <Link className={cx('link', { active: subMenuActive })} href={`${menu.url}${_sub.url}`}>
                            {_sub.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
            return (
              <li key={menu.title}>
                <Link className={cx('link', { active: menuActive })} href={menu.url}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={toggle} className={cx('button')} type="button">
        {lang === 'ko' ? 'EN' : 'KR'}
      </button>
    </header>
  );
};

export default Header;
