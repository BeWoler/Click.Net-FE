import type { NextPage } from "next";
import Head from "next/head";
import styles from "./home.module.sass";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Click.Net</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.description_box}>
        <div className={styles.description}>
          Hi! You have visited the Click.Net, our new social network, it is
          currently under development, but you can also check out our finished
          functionality here (◕‿◕)
        </div>
      </main>
    </div>
  );
};

export default Home;
