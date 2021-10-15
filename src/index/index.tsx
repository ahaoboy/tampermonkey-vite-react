import React from 'react';
import { Button, Notify } from 'zent';

import styles from './style.module.scss';

const App = () => {
  const heee = () => Notify.success('clickkkk!');
  return (
    <div className={styles.container}>
      <Button.Group>
        <Button className={styles.button} onClick={heee}>
          1
        </Button>
        <Button className={styles.button}>2</Button>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </Button.Group>
    </div>
  );
};

export default App;
