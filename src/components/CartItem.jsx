import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import Counter from "./Counter";
import useCounter from "../hooks/useCounter";
import cartContext from "../../AppContext";
import { useContext } from "react";
import { ACTION_TYPES } from "../reducer/reducer";
const CartItem = ({ product, deleteFunc }) => {
  const { count, increaseCount, decreaseCount } = useCounter(product.quantity);
  const { dispatch } = useContext(cartContext);

  const increaseQuantity = (item) => {
    dispatch({ type: ACTION_TYPES.INCREASE, payload: item });
    increaseCount();
  };
  const decreaseQuantity = (item) => {
    dispatch({ type: ACTION_TYPES.DECREASE, payload: item });
    decreaseCount();
  };

  return (
    <>
      <div className="w-[92%] mx-auto flex flex-row justify-between md:hidden lg:hidden my-2.5">
        <Image
          src={product?.mobile_image}
          className="w-[100px] h-[95px]"
          height={100}
          width={95}
          alt={product?.name}
        />
        <div className="w-[38%]">
          <p>{product?.name}</p>
          <Counter
            num={count}
            increaseFunc={() => increaseQuantity(product)}
            decreaseFunc={() => decreaseQuantity(product)}
            containerStyles={"rounded-lg border border-black mt-6"}
            btnStyles={"border-x px-2 border-black"}
          />
        </div>
        <div>
          <RxCrossCircled
            className="text-3xl cursor-pointer"
            onClick={() => {
              deleteFunc(product.id);
            }}
          />
          <p className="mt-6 text-xl font-semibold">{count * product?.price}</p>
        </div>
      </div>
      <hr className="hidden w-[92%] mx-auto md:block lg:block lg:w-[80%]" />
      <div className="w-[92%] lg:w-[80%]  mx-auto hidden md:flex lg:flex flex-row justify-between my-6">
        <div className="flex flex-row w-[60%]">
          <Image
            src={product?.web_image}
            className="w-[200px] h-[195px]"
            height={100}
            width={95}
            alt={product?.name}
          />
          <div className="ml-5 lg:ml-10 relative">
            <p className="text-2xl">{product?.name}</p>
            <p className="text-xl font-light my-4">{product?.creator}</p>
            <Counter
              num={count}
              increaseFunc={() => increaseQuantity(product)}
              decreaseFunc={() => decreaseQuantity(product)}
              containerStyles={"absolute bottom-4"}
            />
          </div>
        </div>
        <div className="relative w-[15%]">
          <RxCrossCircled
            className="text-5xl cursor-pointer"
            onClick={() => {
              deleteFunc(product.id);
            }}
          />
          <p className="absolute bottom-4 text-3xl">
            ${count * product?.price}
          </p>
        </div>
      </div>
      <hr className="hidden w-[92%] mx-auto md:block lg:block lg:w-[80%]" />
    </>
  );
};

export default CartItem;
//items-center
