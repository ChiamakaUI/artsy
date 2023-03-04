import CartItem from "./CartItem";
import cartContext from "../../AppContext";
import { useContext } from "react";
import { ACTION_TYPES } from "../reducer/reducer";

const CartItems = () => {
  const { state, dispatch } = useContext(cartContext);
  const deleteItem = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE, payload: id });
  };
  const total = state.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0
  );

  const totalQuantity = state.reduce(
    (acc, current) => acc + current.quantity,
    0
  );
  return (
    <>
      <div>
        {state.map((item) => (
          <CartItem product={item} key={item.id} deleteFunc={deleteItem} />
        ))}
      </div>
      <div className="w-[90%] mx-auto my-5 md:w-[40%] md:ml-auto md:mx-10 lg:w-[30%] lg:ml-auto lg:mx-36">
        <div className="flex flex-row justify-between items-center">
          <p>Products in cart : </p>
          <p>
            {totalQuantity === 1
              ? `${totalQuantity} item`
              : `${totalQuantity} items`}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center my-2.5 lg:my-4">
          <p>Shipping : </p>
          <p> 2.77 </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p>SubTotal : </p>
          <p>${total}</p>
        </div>
      </div>
    </>
  );
};

export default CartItems;
