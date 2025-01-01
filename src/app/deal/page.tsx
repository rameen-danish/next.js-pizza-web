import Link from "next/link";
import { deals } from "../data/deal";

export default function Deals() {
  return (
    <div>
      <h1 className="blog-heading text-center text-4xl font-bold py-6">
        Exclusive Deals
      </h1>
      <section className="blog-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {deals.map((deal) => (
          <Link key={deal.id} href={`/deal/${deal.id}`}>
            <div className="child-container scale-up-center bg-white shadow-md rounded-lg overflow-hidden hover:text-black hover:shadow-[0_0_20px_#f2d709]">
              <div className="image-container">
                <img src={deal.image} alt={deal.title} className="picture w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                <h2 className="blog-title text-2xl font-bold mb-2">{deal.title}</h2>
                <p className="description text-gray-700 mb-4">{deal.description}</p>
                <Link href="/order">
                  <button className="order w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
