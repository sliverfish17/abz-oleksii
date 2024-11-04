import Logo from "assets/icons/logo.svg";
import { Container } from "components";

import styles from "./Header.module.scss";
import { HeaderLink } from "./HeaderLink";
const HEADER_NAV_LINKS = [
  { label: "Users", path: "#users" },
  { label: "Sign up", path: "#sign-up" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.header__content}>
        <a href="#home">
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
