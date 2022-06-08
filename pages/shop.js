import React from "react";
import Head from "next/head";
import Categories from "../components/categories";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
        <link
          rel="canonical"
          href="https://example.com/Shop/original-post"
          key="canonical"
        />
      </Head>
      <Categories />
    </>
  );
};

export default Shop;
