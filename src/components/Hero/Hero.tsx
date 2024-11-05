import Banner from 'assets/images/banner.jpg';
import { Button, Container } from 'components';
import { Heading } from 'components/Heading/Heading';
import { AnchorLinks } from 'types/AnchorLinks';

import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero__container}>
        <img className={styles.hero__banner} src={Banner} alt="Banner" />
        <span className={styles.hero__overlay} />
        <div className={styles.hero__content}>
          <Heading tag="h1" className={styles.hero__title}>
            Test assignment for front-end developer
          </Heading>
          <p className={styles.hero__description}>
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
            JS with a vast understanding of User design thinking as they&apos;ll be building web
            interfaces with accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </p>
          <a href={AnchorLinks.SIGN_UP}>
            <Button>Sign up</Button>
          </a>
        </div>
      </Container>
    </section>
  );
};
