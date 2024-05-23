import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S04.module.scss';

const cx = classNames.bind(styles);

const S04 = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    const { type, name, email, message, agree } = values;
    const errors = [];

    if (!type) {
      errors.push('유형');
    }
    if (!name) {
      errors.push('보내는분 이름');
    }
    if (!email) {
      errors.push('보내는분 이메일');
    }
    if (!message) {
      errors.push('내용');
    }
    if (!agree) {
      errors.push('개인정보 취급방침 동의');
    }
    if (errors.length > 0) {
      const message = errors.join(', ') + '입력이 누락되었습니다.';
      window.alert(message);
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      //
    }
  };

  return (
    <div id="form" className={cx('container')}>
      <div className={cx('wrapper')}>
        <p className={cx('text')}>GET IN TOUCH</p>
        <div className={cx('top')}>
          <strong className={cx('title')}>CONTACT US</strong>
          <p className={cx('desc')}>{t('company.S04_desc')}</p>
        </div>
        <form ref={formRef}>
          <div className={cx('row')}>
            {['PRODUCT/SERVICE', 'PARTNERSHIP', 'ETC'].map((type) => (
              <label onChange={handleChange} className={cx('radio')} key={type} htmlFor={type}>
                <input type="radio" id={type} hidden required name="type" value={type} />
                <p>{type}</p>
              </label>
            ))}
          </div>
          <div className={cx('grid')}>
            <label className={cx('field')}>
              <p className={cx(['label', 'required'])}>Name</p>
              <input onChange={handleChange} required name="name" type="text" />
            </label>
            <label className={cx('field')}>
              <p className={cx(['label', 'required'])}>E-mail Address</p>
              <input onChange={handleChange} required name="email" type="email" />
            </label>
            <label className={cx('field')}>
              <p className={cx('label')}>Phone number</p>
              <input onChange={handleChange} name="phone" type="text" />
            </label>
            <label className={cx('field')}>
              <p className={cx('label')}>Company Name</p>
              <input onChange={handleChange} name="company" type="text" />
            </label>
          </div>
          <label className={cx('field')}>
            <p className={cx('label', 'required')}>Message</p>
            <input onChange={handleChange} required name="message" type="text" />
          </label>
          <div className={cx('right')}>
            <label htmlFor="agree" className={cx('agree')}>
              <input name="agree" onChange={handleChange} required id="agree" hidden type="checkbox" />
              <div className={cx('checkbox')} />
              <p className={cx('text')}>I agree with your Privacy Policy.</p>
            </label>
          </div>
          <button onClick={sendEmail} className={cx('submit')} type="submit">
            <span>SUBMIT</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default S04;
