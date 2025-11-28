"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ItemsPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <h1 className="text-4xl font-bold mb-3">All Items</h1>
        <p className="text-gray-600 mb-8">
          Browse through our complete gadget collection.
        </p>

        <input
          type="text"
          placeholder="Search items..."
          className="w-full p-3 border rounded mb-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">No items found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.map((p) => (
              <div
                key={p._id}
                onClick={() => router.push(`/items/${p._id}`)}
                className="cursor-pointer bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={p.image || "/placeholder.png"}
                  alt={p.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h2 className="font-semibold text-lg mb-1">{p.name}</h2>

                <p className="text-gray-700 font-medium">{p.price} BDT</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
