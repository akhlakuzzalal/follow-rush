import Image from 'next/image';
import Link from 'next/link';
import HeaderHeroImg from '../public/header-hero-img.svg';
import useStateLocal from './context/useStateLocal';

const Header = () => {
  const { setCurrent } = useStateLocal();
  return (
    <section className="xl:h-[550px] xl:pt-[50px] flex flex-col items-center">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-center flex flex-col-reverse">
        <div className="xl:flex xl:items-center xl:justify-center xl:my-0 my-5">
          <Image src={HeaderHeroImg} alt="logo" width={650} height={400} />
        </div>
        <div className="xl:flex xl:flex-col xl:items-end xl:space-y-4 xl:-mt-[180px] xl:p-0 p-5 space-y-5">
          <h1 className="xl:text-[58px] text-[36px] font-bold xl:w-[600px] xl:text-right text-center">
            Increase your social Media Followers
          </h1>
          <p className="xl:text-right text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="xl:flex xl:w-10/12 xl:mx-auto xl:justify-between xl:items-center xl:-mt-[130px]">
        <div className="hidden xl:inline" />
        <div className="xl:space-x-8 xl:my-0 space-x-8 my-8">
          <Link href="/shop" passHref>
            <button
              onClick={() => setCurrent('/shop')}
              className="bg-[#FFD84D] py-3 px-12 rounded-md text-[#000000] hover:bg-black hover:text-[#FFD84D]
         font-bold transition duration-100 ease-in-out"
            >
              Shop
            </button>
          </Link>

          <Link href="/blog" passHref>
            <button
              onClick={() => setCurrent('/blog')}
              className="bg-[#1E1E1E] py-3 px-12 rounded-md text-[#FFD84D] font-bold hover:bg-[#FFD84D] hover:text-black transition duration-100 ease-in-out"
            >
              Blog
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
