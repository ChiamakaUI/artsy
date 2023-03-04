import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";
import Image from "next/image";
import girl from "../images/girl_mobile.png";
import girlWeb from "../images/girl_web.png";
import divide from "../images/divide.png";

const TopCreators = () => {
  const options = [
    {
      id: 1,
      text: "Explore marketplace",
      to: "market",
    },
    {
      id: 2,
      text: "See auctions",
      to: "auctions",
    },
  ];
  return (
    <>
      <div className="font-merriweather">
        <hr className="w-full border-0 h-px bg-[#111827]" />
        {options.map((option) => (
          <div key={option.id}>
            <div className="flex flex-row w-full items-center justify-between p-5 md:p-8 lg:p-10">
              <p className="text-2xl md:text-3xl	lg:text-4xl">{option.text}</p>
              <Link href={`/${option.to}`}>
                <BsArrowRightCircle className="text-3xl md:text-4xl lg:text-5xl" />
              </Link>
            </div>
            <hr className="w-full border-0 h-px bg-[#111827]" />
          </div>
        ))}
      </div>
      <div className="bg-[#E2E2E2] w-full h-[260px] lg:h-[620px] md:p-6 lg:p-8 my-14 lg:my-20 font-merriweather relative">
        <div className="flex flex-row my-4 md:my-6 lg:my-0 lg:w-[88%] lg:mx-auto justify-between">
          <p className="font-bold text-xl lg:text-6xl	text-[#161616]">
            TOP CREATORS OF THE WEEK
          </p>
          <div className="flex flex-row items-center text-[10px] lg:hidden text-[#333333]">
            <p>Editorials</p>
            <VscCircleFilled />
            <p>Fashion</p>
            <VscCircleFilled />
            <p>Lifestyle</p>
            {/* <VscCircleFilled />
            <p>Blueprint</p> */}
          </div>
          <div className="hidden lg:flex flex-row p-4">
            <Image src={divide} alt="ruler" className="mr-3" />
            <div className="text-[#333333] text-4xl	flex flex-col justify-between">
              <p>Editorials</p>
              <p>Fashion</p>
              <p>Lifestyle</p>
              <p>Blueprint</p>
            </div>
          </div>
        </div>
        <p className="text-xs font-light lg:text-2xl">
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
        <Image
          src={girl}
          alt="girl"
          className="absolute z-50 top-12 right-16 lg:hidden"
        />
        <Image
          src={girlWeb}
          alt="girl"
          className="absolute z-50 top-12 right-40 h-[640px] w-[630px] hidden lg:block"
        />

        <div className="absolute right-px font-merriweather top-24 flex flex-col items-center lg:right-16 lg:top-96">
          <p className="text-3xl font-bold lg:text-5xl text-[#333333]">CIRCA</p>
          <p className="text-7xl mt-2 font-bold line-through text-[#161616] lg:text-9xl">
            1985
          </p>
        </div>
      </div>
    </>
  );
};

export default TopCreators;
