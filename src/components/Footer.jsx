import { GrMailOption, GrLocation } from "react-icons/gr";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="mt-10 font-merriweather lg:mt-32 border-t md:border-0 lg:border-0 border-black">
      <div className="px-4 py-2 lg:p-8 lg:border md:p-8 md:border border-current lg:w-[80%] lg:mx-auto lg:my-4 md:w-[80%] md:mx-auto md:my-4">
        <p className="text-2xl uppercase lg:text-3xl lg:text-center lg:my-6 text-[#333333]">
          NewsLetter
        </p>
        <p className="text-xs my-3 text-[#333333] lg:text-xl lg:text-center uppercase lg:normal-case">
          Subscribe to get daily updates on new drops & exciting deals
        </p>

        <div className="flex flex-col my-2 lg:flex-row lg:w-[55%] lg:mx-auto lg:items-center lg:justify-between">
          <input
            type="text"
            className="border border-black h-[40px] lg:h-[45px] w-[88%] lg:w-[67%] px-2 lg:p-3"
            placeholder="Enter your email here"
          />
          <button className="bg-[#272727] w-[40%] lg:w-[30%] h-[50px] lg:h-[45px] text-white my-3 lg:uppercase">
            Subscribe
          </button>
        </div>
      </div>
      <div className="px-4 py-2 mb-5 lg:hidden md:hidden">
        <p className="text-base uppercase">Reach us</p>
        <div className="flex flex-row items-center my-2 max-w-[200px]">
       
          <GrMailOption className="text-lg mr-2" />
          <p className="text-sm">artsystudios@gmail.com</p>
        </div>
        <div className="flex flex-row items-center justify-between my-2 max-w-[130px]">
          <GrLocation className="text-lg mr-2" />
          <p className="text-sm">Lagos, Nigeria.</p>
        </div>
      </div>
      <div className="my-5 hidden lg:flex flex-row md:flex items-center justify-between w-[80%] md:w-[90%] mx-auto">
          <p className="text-5xl">ARTSY.</p>
          <div className="flex flex-row w-[50%] justify-between md:w-[70%]">
            <div className="flex flex-col text-xl md:text-lg">
              <Link href="/" className="my-2.5">Home</Link>
              <Link href="/market" className="my-2.5">Marketplace</Link>
              <Link href="/auctions" className="my-2.5">Auctions</Link>
              <Link href="/drop" className="my-2.5">Drop</Link>
            </div>
            <div className="flex flex-col text-xl md:text-lg">
              <p className="my-2.5">Blog</p>
              <p className="my-2.5">Wallets</p>
              <p className="my-2.5">Rates</p>
              <p className="my-2.5">High bids</p>
            </div>
            <div>
            <div className="flex flex-row items-center my-2">
              <GrMailOption className="text-2xl mr-4" />
              <p className="text-xl md:text-lg">artsystudios@gmail.com</p>
            </div>
            <div className="flex flex-row items-center my-2">
              <GrLocation className="text-2xl  mr-4" />
              <p className="text-xl md:text-lg">Lagos, Nigeria.</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
