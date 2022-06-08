import Head from 'next/head';
import Header from '../components/Header';
import NewItem from '../components/NewItem';
import ReadMore from '../components/ReadMore';
import SimpleSlider from '../components/slider';
import WhyUs from '../components/whyus';

export default function Home() {
  return (
    <>
      <Head>
        <title>Follow Rush</title>
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
          href="https://example.com/blog/original-post"
          key="canonical"
        />
      </Head>
      <Header />
      <SimpleSlider />
      <WhyUs />
      <NewItem />
      <ReadMore />
    </>
  );
}
