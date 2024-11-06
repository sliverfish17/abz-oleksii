import successIcon from 'assets/icons/sucess.svg';
import { Heading } from 'components/Heading/Heading';

import styles from './Success.module.scss';

export const SuccessMessage = () => (
  <section id="sign-up">
    <Heading className={styles.success__heading}>User successfully registered</Heading>
    <img src={successIcon} alt="Success" className={styles.success__icon} />
  </section>
);
