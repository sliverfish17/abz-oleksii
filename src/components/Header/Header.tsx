import Logo from 'assets/icons/logo.svg';
import { Container } from 'components';
import { AnchorLinks } from 'types/AnchorLinks';

import styles from './Header.module.scss';
import { HeaderLink } from './HeaderLink';

const HEADER_NAV_LINKS = [
  { label: 'Users', path: AnchorLinks.USERS },
  { label: 'Sign up', path: AnchorLinks.SIGN_UP },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.header__content}>
        <a href={AnchorLinks.HOME}>
          <img src={Logo} alt="Logo" />
        </a>
        <nav className={styles.header__navigation}>
          {HEADER_NAV_LINKS.map((link) => (
            <HeaderLink {...link} key={link.path} />
          ))}
        </nav>
      </Container>
    </header>
  );
};
