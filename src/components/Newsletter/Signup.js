import React from 'react';
import styles from '../Layout/Layout.module.scss';

// const cx = classNames.bind(styles);

const Signup = () => {

  const label = {
    color: '#888',
    lineHeight: '1.625rem',
    marginBottom: '1.2rem',
    paddingBottom: '4px',

  };

  const input = {
    border: '1px solid rgb(209, 209, 209)',
    borderRadius: 2,
    fontSize: '.875rem',
    padding: '.325rem',
    marginTop: '5px',
  };

  const submit = {
    backgroundColor: 'transparent',
    border: '1px solid rgb(47, 154, 244)',
    color: 'rgb(47, 154, 244)',
    cursor: 'pointer',
    fontSize: '.875rem',
    marginLeft: '.225rem',
    padding: '.325rem',
    borderRadius: 2,
    marginTop: '5px',
  };

  return (
    <form
      className={styles['singup-form']}
      action="https://tinyletter.com/tigranh"
      method="post"
      target="popupwindow"
    >
      <label style={label}>Subscribe to my posts by email</label>
      <input style={input} type="text" name="email" />
      <input type="hidden" value="1" name="embed" />
      &nbsp;
      <input style={submit} type="submit" value="Subscribe" />
    </form>
  );
};

export default Signup;
