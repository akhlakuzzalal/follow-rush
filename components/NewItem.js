import Image from 'next/image';
import Link from 'next/link';
import NewItemImg from '../public/new-item-img.svg';
import useStateLocal from './context/useStateLocal';

const NewItem = () => {
  const { setCurrent } = useStateLocal();
  return (
    <section className="px-[30px] xl:px-[70px]">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-center flex flex-col my-10 xl:my-0 xl:w-11/12 xl:mx-auto">
        <h1 className="xl:text-[42px] text-[30px] font-bold xl:text-right text-center xl:w-10/12 xl:hidden">
          Browse New Items
        </h1>
        <div>
          <Image src={NewItemImg} alt="logo" width={900} height={900} />
        </div>
        <div className="xl:flex xl:flex-col xl:items-end xl:justify-end xl:p-[100px] space-y-5 xl:space-y-10">
          <h1 className="xl:text-[42px] text-[30px] font-bold xl:text-right text-center xl:w-10/12 hidden xl:inline">
            Browse New Items
          </h1>
          <p className="text-[13px] xl:text-right text-center xl:w-10/12 py-5 xl:py-0">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
          <div className="flex flex-col items-center justify-center">
            <Link href="/shop" passHref>
              <button
                onClick={() => setCurrent('/shop')}
                href=""
                className="bg-[#FFD84D] py-2 px-8 rounded-md text-[#000000] font-bold hover:bg-black hover:text-[#FFD84D]"
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItem;
