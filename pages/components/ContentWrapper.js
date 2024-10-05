import React from 'react';
import styles from './ContentWrapper.module.css'; // You can define your CSS styles in a separate file

const ContentWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ContentWrapper;