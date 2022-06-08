import Image from "next/image";
import ReadMoreImg from "../public/read-more-img.svg";

const ReadMore = () => {
  return (
    <section className="px-[30px] xl:px-[70px] mt-[120px] xl:mt-0">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-center flex flex-col-reverse xl:w-11/12 xl:mx-auto">
        <div className="xl:flex xl:flex-col xl:items-end xl:justify-end xl:p-[100px] xl:mb-0 mb-10 space-y-5">
          <h1 className="xl:text-[42px] text-[28px] font-bold xl:text-right text-center xl:w-10/12">
            How to make a website look more attractive with llustrations
          </h1>
          <p className="text-[13px] xl:text-right text-center xl:w-8/12">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
          <p className="xl:text-right text-center xl:w-[100px] w-5/12 mx-auto sm:w-2/12 xl:mx-0 border-b-4 border-[#FFCE1E] xl:pt-0 pt-5 cursor-pointer">
            Read More
          </p>
        </div>
        <div>
          <Image src={ReadMoreImg} alt="logo" width={900} height={900} />
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
