import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as St from '../styles/App.styled';

const Home: NextPage = () => {
  const something = true;

  return (
    <St.AppContainer>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Next Template" />
      </Head>

      <h1>Yo, World!</h1>
    </St.AppContainer>
  );
};

export default Home;
