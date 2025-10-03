import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";

const ulr = "/products";

const allProductsQuery = (queryParam) => {
  const { search, category, company, sort, price, shipping, page } = queryParam;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(ulr, { queryParam }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    // const params = new URL(request.ulr).searchParams
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
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
