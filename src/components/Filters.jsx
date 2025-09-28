import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        name="search"
        label="Search product"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <SelectInput
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* COMPANIES */}
      <SelectInput
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* ORDER */}
      <SelectInput
        label="sort by"
        name="order"
        list={["a-z", "A-Z", "hight", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />
      {/* SHIPPING */}
      <FormCheckbox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button className="btn btn-primary btn-sm capitalize" type="submit">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm capitalize">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
