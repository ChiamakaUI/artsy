import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = ({ data }) => {
  return (
    <div className="w-[88%] mx-auto  my-10">
      <p className="font-merriweather text-[#292929] text-2xl lg:text-5xl">Featured products</p>
      <div className="w-full">
        {data.map((product, index) => (
          <FeaturedProduct product={product} key={product.id} direction={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
