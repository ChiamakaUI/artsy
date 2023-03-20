import { BiMenu } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsCart2, BsFillCircleFill } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import Link from "next/link";
import { useState, useContext } from "react";
import cartContext from "../../AppContext";
import SideMenu from "./SideMenu";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { state } = useContext(cartContext);
  console.log(state);
  return (
    <>
      <div className="flex flex-row font-merriweather items-center justify-between p-4 lg:hidden my-3.5">

        <BiMenu
          className="text-3xl cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />
        <h3 className="font-merriweather text-2xl font-bold uppercase ">
          Artsy.
        </h3>
        <div className="flex flex-row items-center ">
          <FiSearch className="text-2xl mr-4" />
          <Link href="/cart">
            <div className="relative">
              <BsFillCircleFill
                className={`text-[8px] text-red-600 ${
                  state.length === 0 ? "hidden" : ""
                }`}
              />
              <BsCart2 className="text-2xl" />
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-between font-merriweather p-3 w-[80%] mx-auto my-6">
        <h3 className="font-merriweather text-2xl font-bold uppercase ">
          Artsy.
        </h3>
        <div className="flex flex-row items-center justify-between w-[40%]">
          <Link href="/">Home</Link>
          <Link href="/market">Marketplace</Link>
          <Link href="/auctions">Auctions</Link>
          <Link href="/drop">Drop</Link>
        </div>
        <div className="flex flex-row items-center w-[10%] justify-between">
          <FiSearch className="text-2xl" />
          <Link href="/cart">
            <div className="relative">
              <p
                className={`absolute right-px bottom-5 text-sm ${
                  state.length === 0 ? "hidden" : ""
                }`}
              >
                {state.length}
              </p>
              <BsCart2 className="text-2xl" />
            </div>
          </Link>
          <IoNotificationsOutline className="text-2xl" />
        </div>
      </div>
      {openMenu && <SideMenu closeFunc={setOpenMenu} />}
    </>
  );
};

export default Navbar;
