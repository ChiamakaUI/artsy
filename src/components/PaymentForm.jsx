import { useContext } from "react";
import { UserContext } from "../../AppContext";
import cartContext from "../../AppContext";
const PaymentForm = () => {
  const { user, setUser } = useContext(UserContext);
  const { state } = useContext(cartContext);
  const totalQuantity = state.reduce(
    (acc, current) => acc + current.quantity,
    0
  );
  const subTotal = state.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0
  );
  return (
    <div className="lg:flex flex-row lg:w-[85%] mx-auto lg:justify-between">
      <form className="w-full lg:w-[60%]">
        <div className="w-[92%]  mx-auto">
          <label>Wallet type</label>
          <input
            placeholder=""
            className="w-full border p-2.5 rounded-lg my-3"
            onChange={(e) => setUser({ ...user, wallettype: e.target.value })}
          />
        </div>
        <div className="w-[92%]  mx-auto">
          <label>Key</label>
          <input
            placeholder=""
            className="w-full border p-2.5 rounded-lg my-3"
            onChange={(e) => setUser({ ...user, walletkey: e.target.value })}
          />
        </div>
        <div className="w-[92%] mx-auto flex flex-row justify-between items-center">
          <div className="w-[47%]">
            <label>Expiry date</label>
            <input
              placeholder="MM/YY"
              className="w-full border p-2.5 rounded-lg my-3"
              onChange={(e) => setUser({ ...user, expirydate: e.target.value })}
            />
          </div>

          <div className="w-[47%]">
            <label>CVV</label>
            <input
              placeholder=""
              className="w-full border p-2.5 rounded-lg my-3"
              onChange={(e) => setUser({ ...user, cvv: e.target.value })}
            />
          </div>
        </div>
      </form>
      <div className="hidden lg:block lg:w-[42%] border border-2 shadow-lg rounded">
        <div className="p-6">
          <div className="flex flex-row items-center justify-between text-xl my-6">
            <p>Full Name : </p>
            <p className="font-semibold">{user?.fullname}</p>
          </div>
          <div className="flex flex-row items-center justify-between text-xl my-6">
            <p>Email : </p>
            <p className="font-semibold">{user?.email}</p>
          </div>

           <div className="flex flex-row items-center justify-between text-xl my-6">
            <p>Number : </p>
            <p className="font-semibold">{user?.number}</p>
          </div>
          <div className="flex flex-row items-center justify-between text-xl my-6">
            <p>Products in cart : </p>
            <p className="font-semibold">{totalQuantity}</p>
          </div>
          <div className="flex flex-row items-center justify-between text-xl my-6">
            <p>Shipping : </p>
            <p className="font-semibold">$2.50</p>
          </div>
          <div className="flex flex-row items-center justify-between text-xl my-6">
            <p>Subtotal : </p>
            <p className="font-semibold">{subTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

//lg:w-[80%] lg:mx-auto
