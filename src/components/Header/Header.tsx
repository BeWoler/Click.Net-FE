import { FC } from "react";
import styles from './header.module.sass';

const Header: FC = () => (
  <header className={styles.header}>
    <div className={styles.header_item}>
      <h2 className={styles.title}>Click.Net</h2>
    </div>
  </header>
);

export default Header;
