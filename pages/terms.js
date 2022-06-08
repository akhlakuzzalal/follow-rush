import React from 'react';
import Head from 'next/head';

const Terms = () => {
  return (
    <>
    <Head>
        <title>Terms</title>
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
          href="https://example.com/Terms/original-post"
          key="canonical"
        />
      </Head>
      <div className="m-[50px]">
      <h1 className="text-4xl font-bold text-center mb-2">Terms</h1>
      <p className='text-center xl:px-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatum a fugiat explicabo, aperiam, beatae incidunt harum pariatur eum enim non iusto. Hic vel harum voluptates atque vitae, eum corrupti velit aperiam doloremque porro numquam inventore iusto ipsam nobis expedita quam, tenetur aut illo officiis earum, debitis accusantium nihil laborum.</p>
    </div>
    </>
    
  );
};

export default Terms;