import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";

const Filters = () => {
  const { meta } = useLoaderData();

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        name="search"
        label="Search product"
        size="input-sm"
      />
      {/* CATEGORIES */}
      <SelectInput
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      {/* COMPANIES */}
      <SelectInput
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      {/* ORDER */}
      <SelectInput
        label="sort by"
        name="order"
        list={["a-z", "A-Z", "hight", "low"]}
        size="select-sm"
      />
      {/* BUTTONS */}
      <button className="btn btn-primary btn-sm capitalize" type="button">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm capitalize">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
