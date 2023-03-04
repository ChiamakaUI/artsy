import Image from "next/image";
// import testImage from "../images/Rectangle.png";
const TopBid = ({ bid }) => {
  return (
    <>
      <div className="lg:hidden my-4 font-merriweather">
        <div className="p-4 border rounded-lg">
          <Image
            src={bid?.mobile_image}
            alt={bid?.name}
            className="h-[170px] w-[340px]"
            width={340}
            height={170}
          />
          <div className="flex flex-row items-center justify-between text-xl font-bold mt-2">
            <p>{bid?.name}</p>
            <p>{bid?.highest}</p>
          </div>
        </div>
        <div className="ml-2 text-lg">
          <p className="my-2 font-semibold ">Creator: {bid?.creator} </p>
          <p className="my-2 font-semibold">Date : {bid?.date}</p>
        </div>

        <div className="flex flex-row bg-gray-100 justify-between items-center p-4 rounded-lg">
          <div className="font-merriweather">
            <p className="text-[#616161]">Current Bid</p>
            <p className="text-lg font-semibold">{bid?.current}</p>
          </div>
          <button className="bg-[#3341C1] text-white w-[135px] h-[45px]">
            Place Bid
          </button>
        </div>
      </div>
      <div className="hidden lg:block font-merriweather">
        <div className="border w-[410px] py-9 rounded-md shadow-xl">
          <Image
            src={bid?.web_image}
            alt="test"
            className="h-[280px] w-[410px]"
            width={410}
            height={280}
          />
          <p className="ml-4 text-2xl	mt-3 font-bold">{bid?.name}</p>
        </div>
        <div className="text-xl font-medium my-5">
          <p className="mb-2">
            Creator: <span className="font-semibold">{bid?.creator}</span>{" "}
          </p>
          <p className="my-2">
            Date : <span className="font-semibold">{bid?.date}</span>
          </p>
          <p className="mb-2">
            Highest bid : <span className="font-semibold">{bid?.highest}</span>{" "}
          </p>
        </div>

        <div className="flex flex-row bg-gray-100 justify-between items-center p-6 rounded-lg w-[415px] my-2">
          <div>
            <p className="text-[#616161] text-lg">Current Bid</p>
            <p className="text-xl font-semibold">{bid?.current}</p>
          </div>
          <button className="bg-[#3341C1] text-white w-[135px] h-[45px] rounded-md">
            Place Bid
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBid;
//h-[498px]
