const Banner = ({ data }) => {
  const [bannerInfo] = data;
  return (
    <div className="w-full mx-auto mt-3">
      <div className="w-[90%] mx-auto lg:w-[70%] mt-3.5">
        <p className="font-merriweather text-3xl font-medium text-center text-[#333333] lg:text-6xl lg:font-semibold">
          {bannerInfo.header_text}
        </p>
        <p className="text-[#292929] text-sm font-merriweather font-medium text-center my-5 lg:text-xl">
          {bannerInfo.sub_text}
        </p>
      </div>
      <div className="relative hidden md:hidden lg:hidden">
        {bannerInfo.mobile_images.map((image, index) => (
          <img
            src={image.url}
            alt="nft"
            key={image.id}
            className={`${
              index === 2
                ? "absolute z-50 top-0 w-[300px] left-3"
                : index === 1
                ? "relative z-0 bottom-80"
                : "relative z-10 bottom-3"
            } `}
          />
        ))}
      </div>
      <div className="hidden lg:flex flex-row items-center justify-between w-full">
        {bannerInfo.web_images.map((image) => (
          <img src={image.url} alt="nft" key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
