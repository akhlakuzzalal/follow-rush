import { cateData } from "../data/cateData";
import Cart from "./cart";

const Categories = () => {
  return (
    <section className="py-10">
      <div className="xl:w-10/12 xl:mx-auto">
        <h1 className="text-center text-[30px] font-semibold">Categories</h1>
        <div className="grid grid-cols-2 xl:grid-cols-3 py-5">
          {cateData?.map((item) => (
            <Cart name={item.name} icon={item.icon} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://your_api_link_here/data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
