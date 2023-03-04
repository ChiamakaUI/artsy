import Accordion from "../../src/components/Accordion";
import SingleProduct from "../../src/components/SingleProduct";
import { BiSearchAlt } from "react-icons/bi";
import CheckList from "../../src/components/CheckList";
import { useState, useEffect } from "react";
import MainLayout from "../../src/layouts/MainLayout";
const Main = ({ products }) => {
  const categories = [...new Set(products.map((product) => product.category))];
  const creators = [...new Set(products.map((product) => product.creator))];
  const [filteredKeywords, setFilteredKeywords] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const addKeyword = (text) => {
    setFilteredKeywords((prev) => [...prev, text]);
  };

  const removeKeyword = (keyword) => {
    const remainingKeywords = filteredKeywords.filter((key) => key !== keyword);
    setFilteredKeywords(remainingKeywords);
  };

  const modifiedData = () => {
    if (filteredKeywords.length) {
      const filteredProducts = products.filter((data) =>
        filteredKeywords.some(
          (element) =>
            data.category.includes(element) || data.creator.includes(element)
        )
      );
      setFilteredData(filteredProducts);
    } else {
      setFilteredData(products);
    }
  };
  useEffect(() => {
    modifiedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredKeywords]);

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:w-[90%] lg:mx-auto ">
        <div className="flex flex-col w-[85%] top-16 left-7 lg:hidden md:flex-row md:w-[75%] md:mx-auto md:my-2 md:items-center md:justify-between absolute md:right-24 md:top-14 bg-white">
          <div className="flex flex-row items-center md:w-[38%] bg-[#F4F2F2] border p-2 rounded-lg">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F4F2F2] focus:outline-none font-merriweather w-[88%]"
            />
            <BiSearchAlt className="text-2xl" />
          </div>
          <div className="md:w-[52%]">
            <Accordion title="Filter">
              <Accordion title="By category">
                {categories.map((category, index) => (
                  <CheckList
                    text={category}
                    key={index}
                    addFunc={addKeyword}
                    delFunc={removeKeyword}
                  />
                ))}
              </Accordion>
              <Accordion title="By artist">
                {creators.map((category, index) => (
                  <CheckList
                    text={category}
                    key={index}
                    addFunc={addKeyword}
                    delFunc={removeKeyword}
                  />
                ))}
              </Accordion>
            </Accordion>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-row items-center bg-[#F4F2F2] border p-2 rounded-lg">
            <BiSearchAlt className="text-3xl" />
            <input
              type="text"
              placeholder="Search"
              className="text-lg font-merriweather w-[90%] bg-[#F4F2F2] focus:outline-none"
            />
          </div>

          <Accordion title="By category">
            {categories.map((category, index) => (
              <CheckList
                text={category}
                key={index}
                addFunc={addKeyword}
                delFunc={removeKeyword}
              />
            ))}
          </Accordion>
          <Accordion title="By artist">
            {creators.map((category, index) => (
              <CheckList
                text={category}
                key={index}
                addFunc={addKeyword}
                delFunc={removeKeyword}
              />
            ))}
          </Accordion>
        </div>
        <div className="flex flex-col mt-20 md:flex-row lg:flex-row flex-wrap lg:w-[80%] md:w-[80%] md:mx-auto md:mt-16 lg:mt-0">
          {filteredData.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;

export async function getStaticProps() {
  const { products } = await import("../../data/data.json");
  return {
    props: {
      products,
    },
  };
}

// || data.role === element ||
//       data.level === element

//   const filteredProducts = products.filter((data) =>
//   filteredKeywords.every(
//     (element) =>
//       data.category.includes(element) ||
//       data.creator.includes(element)
//   )
// )
