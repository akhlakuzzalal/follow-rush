import Card from "./Card";
import { fakeData } from "../data/fakeData";

const WhyUs = () => {
  return (
    <section className="bg-[#FFD84D] xl:h-[600px] xl:p-0 p-5">
      <div className="xl:w-11/12 xl:mx-auto xl:pt-10">
        <h1 className="text-center text-[30px] font-semibold">Why Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-8 py-[40px]">
          {fakeData?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://your_api_link_here/data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
