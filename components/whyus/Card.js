import Image from "next/image";

const Card = ({item}) => {
  return (
    <div className="bg-[#FFFFFF] p-10 space-y-2 rounded-lg">
      <div className="xl:flex xl:items-end xl:justify-end xl:-mr-[28px] flex flex-col items-center">
        <Image src={item.icon} alt={item.name} height={100} width={100} />
      </div>
      <h3 className="xl:text-right text-center text-[24px] font-bold">{item.name}</h3>
      <p className="xl:text-right text-center text-sm text-gray-800">
        {item.description}
      </p>
    </div>
  );
};

export default Card;
