import Link from "next/link";
const AuctionProduct = ({ image, bidTime, tag }) => {
  return (
    <Link href={`/auctions/${tag}`}>
      <div
        className="h-[180px] min-w-[228px] lg:h-[350px] lg:w-[485px] bg-no-repeat bg-cover bg-center relative font-merriweather rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="border-2 bg-white opacity-60 absolute bottom-3 left-5 lg:left-10 h-[35px] w-[185px] lg:h-[65px] lg:w-[400px] flex flex-col items-center rounded border-white">
          <p className="text-base lg:text-3xl">{bidTime}</p>
        </div>
      </div>
    </Link>
  );
};

export default AuctionProduct;
//https://firebasestorage.googleapis.com/v0/b/food-cms-72035.appspot.com/o/artsy%2FRectangle%20245.png?alt=media&token=4a776e94-e698-4d5e-b9b4-16e7290a98f9
//   style={{
//     backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/food-cms-72035.appspot.com/o/artsy%2FRectangle%20245.png?alt=media&token=4a776e94-e698-4d5e-b9b4-16e7290a98f9")`,
//   }}
