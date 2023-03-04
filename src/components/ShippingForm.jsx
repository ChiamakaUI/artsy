import CartItems from "./CartItems";
import { useContext } from "react";
import { UserContext } from "../../AppContext";

const ShippingForm = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="lg:flex flex-row">
      <form className="w-full lg:w-[48%]">
        <div className="w-[92%]  mx-auto">
          <label>Your email</label>
          <input
            placeholder=""
            className="w-full border p-2.5 rounded-lg my-3"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="w-[92%]  mx-auto">
          <label>Your full name</label>
          <input
            placeholder=""
            className="w-full border p-2.5 rounded-lg my-3"
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
          />
        </div>
        <div className="w-[92%]  mx-auto">
          <label>Phone number</label>
          <input
            placeholder=""
            className="w-full border p-2.5 rounded-lg my-3"
            onChange={(e) => setUser({ ...user, number: e.target.value })}
          />
        </div>
      </form>
      <div className="hidden lg:block lg:w-[52%]">
        <CartItems />
      </div>
    </div>
  );
};

export default ShippingForm;
