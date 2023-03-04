import { BsArrowRightCircle } from "react-icons/bs";

const FeaturedProduct = ({ product, direction }) => {
  return (
    <>
      <div className="my-4 lg:hidden">
        <div
          className="relative h-[300px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${product.mobile_image})` }}
        >
          <p className="text-white text-2xl font-merriweather absolute top-14 right-11">
            {product.name}
          </p>
          <BsArrowRightCircle className="text-white text-5xl absolute bottom-12 right-3.5" />
        </div>
        <div>
          <p className="text-sm font-merriweather my-2">{product.description}</p>
          <div className="flex flex-row items-center justify-between w-[88%] mr-auto my-1">
            <div className="flex flex-row items-center">
              {product.contributors.map((contributor) => (
                <img
                  src={contributor.avatar}
                  key={contributor.id}
                  alt="avatar"
                  className="h-[29px]"
                />
              ))}
            </div>
            <p className="text-sm font-merriweather font-bold">
              64 major creators
            </p>
          </div>
          <hr className="w-[50%] mr-auto my-2.5 border-0 h-px bg-[#111827]" />
        </div>
      </div>
      <div
        className={`hidden lg:flex ${direction} my-6 w-full items-center justify-between`}
      >
        <div className="w-[48%]">
          <img
            src={product.web_image}
            alt={product.name}
            className="w-[610px] h-[305px]"
          />
        </div>
        <div className="w-[47%]">
          <p className="text-2xl font-merriweather font-semibold">
            {product.name}
          </p>
          <p className="text-lg font-merriweather">{product.description}</p>
          <div className="flex flex-row items-center justify-between w-full my-2.5">
            <div className="flex flex-row items-center">
              {product.contributors.map((contributor) => (
                <img
                  src={contributor.avatar}
                  key={contributor.id}
                  alt="avatar"
                  className="h-[35px]"
                />
              ))}
            </div>
            <p className="text-base font-merriweather font-bold">
              64 major creators
            </p>
            <BsArrowRightCircle className="text-5xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
//w-[85%] mr-auto
//md:hidden