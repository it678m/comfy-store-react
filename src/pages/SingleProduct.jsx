import { useLoaderData, Link } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="grid lg:grid-cols-2 mt-6 gap-y-8 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="h-96 w-96 rounded-lg object-cover lg:w-full"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="text-xl mt-3">{dollarsAmount}</p>
          <p className="mt6 leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
