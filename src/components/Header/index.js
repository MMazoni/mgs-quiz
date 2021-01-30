import React from 'react';
import Head from 'next/head';
import db from '../../../db.json';

export default function Header() {
  return (
    <Head>
      <title>{db.title}</title>
      <meta
        property="og:title"
        content="Quiz Metal Gear Solid"
        key="title"
      />
      <meta
        property="og:image"
        content="https://wallpaperaccess.com/full/1292071.jpg"
        key="image"
      />
      <meta
        property="og:description"
        content="Teste seu conhecimento sobre um dos melhores jogo da vida!"
        key="description"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
    </Head>
  );
}
