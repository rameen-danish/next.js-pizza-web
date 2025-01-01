import { deals } from "../data/deal";
import Link from "next/link";
export async function getStaticPaths() {
  const paths = deals.map((deal) => ({
    params: { id: deal.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params}:any) {
  const deal = deals.find((deal) => deal.id === params.id);
  return { props: { deal } };
}

export default function DealPage({ deal }:any) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-4">{deal.title}</h1>
      <div className="image-container text-center">
        <img src={deal.image} alt={deal.title} className="picture mx-auto rounded-lg shadow" />
      </div>
      <p className="description text-gray-700 text-lg mt-4 text-center">{deal.description}</p>
      <div className="text-center mt-6">
        <Link href="/order">
          <button className="order bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
}
