import MainLayout from "../src/layouts/MainLayout";
import { useContext, useState } from "react";
import cartContext, { UserContext } from "../AppContext";
import { useRouter } from "next/router";
import CartItems from "../src/components/CartItems";
import ShippingForm from "../src/components/ShippingForm";
import PaymentForm from "../src/components/PaymentForm";
import toast, { Toaster } from "react-hot-toast";
import { ACTION_TYPES } from "../src/reducer/reducer";

const Main = () => {
  const { state, dispatch } = useContext(cartContext);
  const { user } = useContext(UserContext);
  const [current, setCurrent] = useState(1);
  const router = useRouter();
  const headings = ["Shopping cart", "Shipping details", "Payment details"];
  const forward = () => {
    setCurrent((prev) => prev + 1);
  };
  const getUser = () => {
    if (Object.keys(user).length === 0) {
      toast.error("Please, fill the form to continue");
      return;
    }
    if (
      user.fullname === undefined ||
      user.email === undefined ||
      user.number === undefined ||
      user.number === "" ||
      user.fullname === "" ||
      user.email === ""
    ) {
      toast.error("Please, fill the form to continue");
      return;
    }
    setCurrent((prev) => prev + 1);
  };

  const confirmPayment = () => {
    if (Object.keys(user).length === 0) {
      toast.error("Please, fill the form to continue");
      return;
    }
    if (
      user.wallettype === undefined ||
      user.walletkey === undefined ||
      user.expirydate === undefined ||
      user.cvv === undefined ||
      user.expirydate === "" ||
      user.wallettype === "" ||
      user.cvv === "" ||
      user.walletkey === ""
    ) {
      toast.error("Please, fill the form to continue");
      return;
    }
    router.push("/confirmation");

    setTimeout(() => {
      dispatch({ type: ACTION_TYPES.CLEAR });
    }, 1000);
  };
  return (
    <MainLayout>
      <div>
        {state.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="text-lg md:text-xl lg:text-2xl">
              There are no items in your cart
            </p>
            <button
              className="bg-[#3341C1] px-3.5 py-2 text-white mt-6 rounded-md"
              onClick={() => router.push("/market")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div>
              <div className="hidden md:block lg:block">
                <div className="flex flex-row justify-between items-center w-[70%] mx-auto my-2">
                  {headings.map((heading, index) => (
                    <p
                      key={index}
                      className={`text-lg lg:text-xl ${
                        current === index + 1
                          ? "font-bold text-xl lg:text-2xl"
                          : ""
                      }`}
                    >
                      {heading}
                    </p>
                  ))}
                </div>
                <hr className="w-[70%] mx-auto my-5" />
              </div>
              {current === 1 ? (
                <CartItems />
              ) : current === 2 ? (
                <ShippingForm />
              ) : (
                <PaymentForm />
              )}
            </div>
            <div className="flex flex-col items-center my-10 md:flex-row md:justify-between md:w-[88%] md:mx-auto md:my-14 lg:flex-row lg:justify-between lg:w-[80%] lg:mx-auto lg:my-12">
              {current === 1 ? (
                <p
                  onClick={() => router.push("/market")}
                  className="underline mt-5 text-[#006CA2] cursor-pointer"
                >
                  Continue shopping
                </p>
              ) : (
                <p
                  className="underline mt-5 text-[#006CA2] cursor-pointer"
                  onClick={() => setCurrent((prev) => prev - 1)}
                >
                  Go back
                </p>
              )}
              <button
                className="bg-[#3341C1] px-4 py-2.5 text-white rounded-md"
                onClick={
                  current === 1
                    ? forward
                    : current === 2
                    ? getUser
                    : confirmPayment
                }
              >
                {current === 1
                  ? "Proceed to checkout"
                  : current === 2
                  ? "Proceed to payment"
                  : "Confirm payment"}
              </button>
            </div>
          </>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </MainLayout>
  );
};

export default Main;
