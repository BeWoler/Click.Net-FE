import { NextPage } from "next";
import styles from "./404.module.sass";

const ErrorPage: NextPage = () => {
  return (
    <main className={styles.error_box}>
      <h1 className={styles.error_title}>404</h1>
      <div className={styles.error_div}>Something went wrong! (・`ω´・)</div>
    </main>
  );
};

export default ErrorPage;
