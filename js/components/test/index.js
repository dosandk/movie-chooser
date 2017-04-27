import React from 'react';

import styles from './test.scss';

const TestComponent = () => (
  <div className={ styles['test-class'] }>
    Test component
  </div>
);

export default TestComponent;
