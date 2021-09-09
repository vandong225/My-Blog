import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '@src/layout/Header';
//css
import '../styles/main.scss';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="Wrapper">
        <Header/>
        <Component {...pageProps} />
      </div>
    </>
  )
};

export default MyApp;
