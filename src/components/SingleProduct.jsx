// import productImage from "../images/Rectangle.png"
import Image from "next/image";
import Link from "next/link";
const SingleProduct = ({ product }) => {
  return (
    <Link href={`/market/${product?.name.toLowerCase()}`}>
      <div className="font-merriweather w-[90%] my-6 mx-auto lg:m-3 lg:w-[269px] lg:border lg:p-3 lg:rounded-xl lg:shadow-lg md:m-3 md:w-[269px] md:border md:p-3 md:rounded-xl md:shadow-lg">
        <Image
          src={product?.mobile_image}
          width={241}
          height={280}
          alt={product?.name}
          className="hidden lg:block md:block mx-auto rounded-lg"
        />
        <Image
          src={product?.mobile_image}
          width={357}
          height={384}
          alt={product?.name}
          className="lg:hidden md:hidden mx-auto rounded-lg"
        />
        <div className="flex flex-row justify-between items-center my-3 text-[#333333] lg:flex-col lg:items-start">
          <p className="text-base font-semibold lg:text-lg lg:font-medium">{product?.name}</p>
          <p className="text-base font-semibold lg:text-2xl lg:font-extrabold md:text-2xl md:font-extrabold">
            ${product?.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
{
  /* <Image src={productImage} alt="productName" className="w-full h-[300px] lg:h-[235px] lg:rounded-lg md:h-[235px] md:rounded-lg"/> */
}
