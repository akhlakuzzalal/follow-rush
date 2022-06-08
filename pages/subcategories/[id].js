import Image from "next/image";
import Head from 'next/head';
import Instagram from "../../public/instagram.svg"

const Subcategories = () => {
  return (
    <>
      <Head>
        <title>Sub Categories</title>
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
          href="https://example.com/Faq/original-post"
          key="canonical"
        />
      </Head>

      <section className="py-10">
        <div className="xl:w-10/12 xl:mx-auto">
          <h1 className="text-center text-[30px] font-semibold">
            Sub Categories
          </h1>
          <div className="grid grid-cols-2 space-y-2 py-5">
            <div className="flex flex-col items-center justify-center p-2">
              <Image src={Instagram} alt="" height={90} width={90} className="cursor-pointer" />
              <p className="text-[12px] text-center">Instagram Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Image src={Instagram} alt="" height={90} width={90} className="cursor-pointer"  />
              <p className="text-[12px] text-center">Instagram Likes</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Image src={Instagram} alt="" height={90} width={90} className="cursor-pointer" />
              <p className="text-[12px] text-center">Instagram Story Views</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Image src={Instagram} alt="" height={90} width={90} className="cursor-pointer" />
              <p className="text-[12px] text-center">Instagram Reels Views</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subcategories;
