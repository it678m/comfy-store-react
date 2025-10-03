import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";

const ulr = "/products";

export const loader =
  (queryClient) =>
  async ({ request }) => {
    // const params = new URL(request.ulr).searchParams
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await customFetch(ulr, { params });
    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
