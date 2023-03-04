// import testImage from "../images/Rectangle.png";
import Image from "next/image";
const Drops = ({ drop, status, cta, btnColor }) => {
  return (
    <>
      <div className="font-merriweather lg:hidden md:hidden my-10">
        <div className="relative w-[398px] h-[224px]">
          <Image
            src={drop?.mobile_image}
            alt={drop?.name}
            className="w-full h-full"
            height={224}
            width={398}
          />
          <button
            className={`top-2 absolute right-2 w-[120px] ${btnColor} uppercase text-white py-1.5 text-xs font-merriweather rounded`}
          >
            {status}
          </button>
          <div className="border-2 bg-white opacity-60 absolute bottom-3 left-5 flex flex-col items-center rounded border-white w-[85%] h-[55px]">
            <p>Time remaining</p>
            <p className="text-xl lg:text-3xl">{drop?.time}</p>
          </div>
        </div>

        <div className="my-4">
          <p>{drop?.date}</p>
          <p className="text-2xl my-3 font-semibold">{drop?.name}</p>
          <p className="text-sm my-2">{drop?.description}</p>
          <p className="my-2 font-semibold">
            Creator : <span className="text-[#006CA2]">{drop?.creator}</span>
          </p>
          <p className="underline text-[#006CA2] text-sm">{cta}</p>
        </div>
      </div>
      <div className="hidden lg:flex md:flex flex-row justify-between w-full my-8">
        <div className="relative w-[45%] h-[350px]">
          <Image
            src={drop?.web_image}
            alt={drop?.name}
            className="w-[650px] h-full"
            height={350}
            width={650}
          />
          <div className="border-2 bg-white opacity-60 absolute bottom-3 right-2 lg:right-6 rounded border-white md:w-[95%] lg:w-[90%] h-[58px] flex flex-row items-center justify-between">
            <div className=" flex flex-col font-merriweather md:ml-3 ml-6">
              <p>Time remaining</p>
              <p className="text-lg lg:text-2xl">{drop?.time}</p>
            </div>
            <button className={`${btnColor} font-merriweather px-2 py-1.5 rounded mr-3 shadow-xl md:text-xs lg:text-base`}>{cta}</button>
          </div>
        </div>
        <div className="w-[52%] font-merriweather ">
          <button className={`w-[150px] border h-[40px] ${btnColor} uppercase text-white py-1.5 font-merriweather rounded`}> {status}</button>
          <p className="text-lg my-5">{drop?.date}</p>
          <p className="text-2xl">{drop?.name}</p>
          <p className="text-lg my-5">{drop?.description}</p>
          <p className="text-xl">Creator :  <span>{drop?.creator}</span></p>
        </div>
      </div>
    </>
  );
};

export default Drops;
//lg:left-10 h-[35px] w-[185px] lg:h-[65px] lg:w-[400px]
