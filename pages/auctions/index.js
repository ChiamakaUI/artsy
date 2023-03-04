import AuctionProduct from "../../src/components/AuctionProduct";
import TopBid from "../../src/components/TopBid";
import MainLayout from "../../src/layouts/MainLayout";

const Main = ({ liveBids, topBids }) => {
  // console.log(liveBids);
  return (
    <MainLayout>
      <div className="font-merriweather w-[95%] mx-auto">
        <p className="text-lg lg:text-2xl mb-3 lg:my-8">
          Here’s an overview of products actively on auction, explore!
        </p>
        <div className="flex flex-row items-center justify-between overflow-x-auto w-full scroll-smooth scrollbar-hide">
          {liveBids.map((bid) => (
            <AuctionProduct
              image={bid.web_image}
              bidTime={bid.bid_time}
              tag={bid.tag}
              key={bid.id}
            />
          ))}
        </div>
        <p className="text-lg lg:text-2xl mt-8 font-semibold lg:my-8 lg:text-center">
          Top bids from popular creators
        </p>
        <div className="flex flex-col flex-wrap md:flex-row md:w-full lg:flex-row items-center justify-between lg:w-[80%] lg:mx-auto">
          {topBids.map((bid) => (
            <TopBid bid={bid} key={bid.id} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;

export async function getStaticProps() {
  const { upcoming, top_bids } = await import("../../data/data.json");
  return {
    props: {
      liveBids: upcoming,
      topBids: top_bids,
    },
  };
}
