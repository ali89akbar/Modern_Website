import React from 'react';
import styles from '../style';

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-full  outline-none ${styles}`}>
      Get started
    </button>
  );
};

export default Button;