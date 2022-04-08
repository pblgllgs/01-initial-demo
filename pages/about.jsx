import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <Link href='/'>Home</Link>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
