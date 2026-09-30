import { Link } from "react-router";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/mailboxes">
        Mailboxes
      </Link>
      <Link className={styles.link} to="/mailboxes/new">
        New Mailbox
      </Link>
    </nav>
  );
};

export default NavBar;