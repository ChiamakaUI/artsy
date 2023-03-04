import { FaLocationArrow } from "react-icons/fa";
import MainLayout from "../../src/layouts/MainLayout";
const LiveBid = ({ data }) => {
  // console.log(data);
  const [bid] = data;
  return (
    <MainLayout>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center relative lg:hidden"
        style={{ backgroundImage: `url(${bid.mobile_image})` }}
      >
        <div className="border absolute bottom-3.5 right-6 flex flex-row bg-transparent	p-2 rounded-full">
          <input
            type="text"
            className="bg-transparent	w-[285px] focus:outline-none text-white font-merriweather"
            placeholder="Place a bid..."
          />
          <FaLocationArrow className="text-2xl text-white" />
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-between h-[600px] border border-current w-[80%] mx-auto relative mt-8">
        <div
          className="h-full w-[50%] bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: `url(${bid.web_image})` }}
        ></div>
        <div className="relative w-[47%]">
          <div className="border absolute bottom-3.5 flex flex-row bg-transparent	p-2 rounded-full">
            <input
              type="text"
              className="bg-transparent	w-[285px] focus:outline-none text-white font-merriweather"
              placeholder="Place a bid..."
            />
            <FaLocationArrow className="text-2xl text-black" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LiveBid;

export async function getStaticPaths() {
  const { upcoming } = await import("../../data/data.json");
  const paths = upcoming.map((item) => ({
    params: {
      live: item.tag,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const currentBid = context?.params.live;
  const { upcoming } = await import("../../data/data.json");

  const data = upcoming.filter((item) => item.tag === currentBid);

  return {
    props: {
      data: data,
    },
  };
}
