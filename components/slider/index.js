import Image from "next/image";
import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import AddOne from "../../public/add-1.svg";
import AddTwo from "../../public/add-2.svg";
import AddThree from "../../public/add-3.svg";

const SimpleSlider = () => {
  const [index, setIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div
        className={`w-5 h-5 rounded-full border-[1px] ${
          index === i ? "border-[#ffce1e]" : "border-gray-600"
        }`}
      >
        {console.log(i, index)}
        <div
          className={`w-full h-full rounded-full ${
            index === i && "bg-[#ffce1e]"
          }`}
        />
      </div>
    ),
  };

  const sliderRef = useRef(null);

  const customControl = (mood) => {
    switch (mood) {
      case "next":
        if (index === 2) setIndex(0);
        else setIndex(index + 1);
        break;
      case "prev":
        if (index === 0) setIndex(2);
        else setIndex(index - 1);
    }
  };
  return (
    <div className="w-10/12 mx-auto h-[350px] rounded-lg  my-[70px] relative z-30">
      <div className="flex justify-between items-center absolute w-full h-full">
        <div
          className="cursor-pointer z-50"
          onClick={() => {
            sliderRef.current.slickPrev();
            customControl("prev");
          }}
        >
          <IoIosArrowBack size={40} />
        </div>
        <div
          className="cursor-pointer z-50"
          onClick={() => {
            sliderRef.current.slickNext();
            customControl("next");
          }}
        >
          <IoIosArrowForward size={40} />
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="md:px-16">
        <div className="">
          <div className="xl:flex xl:items-center xl:space-x-40 space-x-20 space-y-5 xl:space-y-0">
            <Image src={AddOne} height={300} width={300} alt="" />
            <p className="text-2xl xl:text-3xl ">Ad 1 is here</p>
          </div>
        </div>
        <div className="">
          <div className="xl:flex xl:items-center xl:space-x-40 space-x-20 space-y-5 xl:space-y-0">
            <Image src={AddTwo} height={300} width={300} alt="" />
            <p className="text-2xl xl:text-3xl ">Ad 2 is here</p>
          </div>
        </div>
        <div className="">
          <div className="xl:flex xl:items-center xl:space-x-40 space-x-20 space-y-5 xl:space-y-0">
            <Image src={AddThree} height={300} width={300} alt="" />
            <p className="text-2xl xl:text-3xl ">Ad 3 is here</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
