import Image from "next/image";
import Link from "next/link";

const Cart = ({ name, icon }) => {
  return (
    <Link href={`/subcategories/${name}`} passHref>
      <div>
        <div className="flex flex-col items-center justify-center">
          <Image src={icon} alt={name} height={100} width={100} className="cursor-pointer" />
        </div>
        <p className="text-center font-bold">{name}</p>
      </div>
    </Link>
  );
};

export default Cart;
