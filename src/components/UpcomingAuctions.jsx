import { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { VscCircleLargeFilled } from "react-icons/vsc";
const UpcomingAuctions = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const forward = () => {
    if (current === data.length - 1) return;
    setCurrent((prev) => prev + 1);
  };
  const backward = () => {
    if (current === 0) return;
    setCurrent((prev) => prev - 1);
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/food-cms-72035.appspot.com/o/artsy%2FRectangle%2090.png?alt=media&token=ec092232-a35c-4af0-aab2-5e2ce34c9b2d")`,
      }}
      className="w-full h-[400px] md:h-[600px] lg:h-[800px] bg-no-repeat bg-cover bg-center my-28 lg:my-36 py-10 px-3 text-white font-merriweather"
    >
      <p className="hidden lg:block md:block lg:text-4xl md:text-xl ml-10">
        See Upcoming Auctions and Exhibitions
      </p>
      <hr className="w-[53%] my-4 ml-10 hidden md:block lg:block" />
      <div
        className="w-[90%] h-[90%] mx-auto bg-no-repeat bg-cover bg-center relative md:hidden lg:hidden"
        style={{
          backgroundImage: `url(${data[current].mobile_image})`,
        }}
      >
        <div className="text-white font-merriweather flex flex-row w-full h-full p-3 justify-between bg-black-overlay">
          <div className="flex flex-col justify-between w-[16%] h-[40%]">
            <VscCircleLargeFilled className="" />
            <p className="text-4xl">0{current + 1}</p>
          </div>
          <div className="flex flex-col justify-between w-[82%] h-[85%]">
            <p className="text-xl uppercase	">{data[current].name}</p>
            <p className="text-xs my-2">Start on : {data[current].starts}</p>
            <p className="text-[10px]">
              GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
              INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
              AND LOWEST BIDS.
            </p>
            <div className="flex flex-row text-xs	mt-5 w-[70%] justify-between ml-auto items-center">
              <p className="text-xs underline">See more</p>
              <button className="text-xs border p-1.5 rounded-lg ">
                Set a reminder
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[80%] h-[88%] m-auto bg-no-repeat bg-cover bg-center hidden md:block lg:block"
        style={{
          backgroundImage: `url(${data[current].web_image})`,
        }}
      >
        <div className="bg-black-overlay w-full h-full relative">
        <div className="lg:w-[88%] md:w-full mx-auto h-[40%] absolute bottom-0 lg:right-20 md:right-0 flex flex-row p-6 md:p-3 items-center justify-between">
          <div className="w-[15%]">
            <VscCircleLargeFilled className="lg:text-2xl md:text-xl" />
            <p className="lg:text-7xl md:text-5xl">0{current + 1}</p>
          </div>
          <div className="w-[55%]">
            <p className="lg:text-3xl uppercase md:text-xl">{data[current].name}</p>
            <p className="lg:text-sm my-2 md:text-xs">Start on : {data[current].starts}</p>
            <p className="lg:text-base font-medium md:text-xs">
              GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
              INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
              AND LOWEST BIDS.
            </p>
          </div>
          <div className="flex flex-row items-center w-[32%] justify-between">
            <p className="lg:text-lg underline md:text-sm">See more</p>
            <button className="lg:text-lg border p-1.5 rounded-lg md:text-sm">
              Set a reminder
            </button>
          </div>
        </div>
        </div>
       
      </div>
      <div className="flex flex-row w-[40%] max-w-[250px] ml-auto items-center justify-between mt-2.5">
        <div
          className="bg-[#D9B99E] p-4 rounded-full cursor-pointer shadow-lg"
          onClick={backward}
        >
          <MdOutlineArrowBackIos className="text-white text-2xl" />
        </div>
        <div
          className="bg-[#D9B99E] p-4 rounded-full cursor-pointer shadow-lg"
          onClick={forward}
        >
          <MdOutlineArrowForwardIos className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default UpcomingAuctions;
