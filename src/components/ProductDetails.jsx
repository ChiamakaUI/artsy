import { useContext } from "react";
import Counter from "./Counter";
import { FaRegHeart } from "react-icons/fa";
import Accordion from "./Accordion";
import Image from "next/image";
import cartContext from "../../AppContext";
import toast, { Toaster } from "react-hot-toast";
import useCounter from "../hooks/useCounter";
import { ACTION_TYPES } from "../reducer/reducer";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from "next/router";

const ProductDetails = ({ product }) => {
  const { state, dispatch } = useContext(cartContext);
  const { count, increaseCount, decreaseCount } = useCounter();
  const router = useRouter();
  const addToCart = (item) => {
    const { name, creator, price, mobile_image, web_image, id } = item;
    for (let i = 0; i < state.length; i++) {
      const element = state[i];
      if (element.id === item.id) {
        element.quantity++;
        toast.error(`${name} has already been added to your cart.`);
        return;
      }
    }
    const cartItem = {
      id,
      name,
      creator,
      price,
      mobile_image,
      web_image,
      quantity: count,
    };
    dispatch({ type: ACTION_TYPES.ADD, payload: cartItem });
    toast.success(`Success, you have added ${name} to your cart.`);
  };
  return (
    <>
      <div
        className="my-3.5 w-[88%] flex flex-row items-center lg:w-[75%] mx-auto lg:my-5"
        onClick={() => router.back()}
      >
        <MdOutlineArrowBackIos className="text-3xl lg:text-4xl" />
        <p className="lg:text-xl">Back</p>
      </div>
      <div className="w-[90%] mx-auto mt-6 p-2 lg:flex flex-row lg:h-[650px] lg:w-[78%] lg:relative">
        <div className="lg:p-4">
          <Image
            src={product?.mobile_image}
            width={357}
            height={384}
            alt={product?.name}
            className="mx-auto rounded-lg lg:hidden"
          />
          <Image
            src={product?.web_image}
            width={525}
            height={926}
            alt={product?.name}
            className="mx-auto rounded-lg hidden lg:block"
          />
        </div>
        <div className="lg:w-[50%] lg:p-3.5">
          <div className="flex flex-row justify-between items-center my-6 text-xl lg:text-3xl lg:font-semibold">
            <p>{product.name}</p>
            <p>$ {product.price}</p>
          </div>
          <p className="my-3 lg:my-6 lg:text-lg">
            <b>Creator :</b> {product.creator}
          </p>
          <p className="my-3 lg:my-6 lg:text-lg">
            <b>Created In :</b> {product.created_in}
          </p>
          <Counter
            num={count}
            increaseFunc={increaseCount}
            decreaseFunc={decreaseCount}
          />
          <div className="flex flex-row items-center my-4">
            <button
              className="bg-[#3341C1] text-lg text-white w-[200px] py-2 rounded"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
            <Toaster position="top-right" reverseOrder={false} />
            <div className="border w-[45px] border-current p-2 ml-4">
              <FaRegHeart className="mx-auto text-2xl" />
            </div>
          </div>
          <div className="my-5">
            <hr className="w-full" />
            <Accordion title="Description">
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Status">
              <p>{product.status}</p>
            </Accordion>
            <Accordion title="Listings">
              <p>{product.listings}</p>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
//: price * count
