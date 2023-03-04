import ProductDetails from "../../src/components/ProductDetails";
import MainLayout from "../../src/layouts/MainLayout";
const ProductDetail = ({ data }) => {
  const [product] = data;
  return (
    <MainLayout>
      <ProductDetails product={product} />
    </MainLayout>
  );
};

export default ProductDetail;

export async function getStaticPaths() {
  const { products } = await import("../../data/data.json");
  const paths = products.map((product) => ({
    params: {
      product: product.name.toLowerCase(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const productName = context?.params.product.toUpperCase();
  const { products } = await import("../../data/data.json");

  const data = products.filter((product) => product.name === productName);

  return {
    props: {
      data: data,
    },
  };
}
