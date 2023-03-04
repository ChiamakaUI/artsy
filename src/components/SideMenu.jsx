import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
const SideMenu = ({ closeFunc }) => {
  return (
    <div className="bg-white font-merriweather p-6 fixed z-[1000] top-0 left-0 w-full h-full">
      <div className="flex flex-row items-center justify-between mt-3.5">
        <h3 className="font-merriweather text-2xl font-bold uppercase ">
          Artsy.
        </h3>
        <RxCross1
          className="text-3xl cursor-pointer"
          onClick={() => closeFunc(false)}
        />
      </div>
      <div className="flex flex-col justify-between font-medium text-lg my-8 h-[35%]">
        <Link href="/">Home</Link>
        <Link href="/market">Marketplace</Link>
        <Link href="/auctions">Auctions</Link>
        <Link href="/drop">Drop</Link>
      </div>
    </div>
  );
};

export default SideMenu;
