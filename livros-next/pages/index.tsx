import Head from 'next/head';
import React from 'react';
import { Menu } from '@/componentes/Menu';
import styles from '@/styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Missão Prática 3</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Página Inicial
        </h1>
      </main>
    </div>
  );
};

export default Home;