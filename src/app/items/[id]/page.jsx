"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ItemDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) fetchItem();
  }, [id]);

  const fetchItem = async () => {
    try {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

     
      setProduct(data.product); 
    } catch (error) {
      console.log("Error loading product details:", error);
    }
  };

  if (!product)
    return (
      <p className="text-center mt-20 text-gray-600 text-lg">
        Loading product details...
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
      
      <button
        onClick={() => router.back()}
        className="px-5 py-2 mb-6 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-10">
        
        <img
          src={product.image || "/placeholder.png"}
          alt={product.name}
          className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-xl shadow-sm"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <p className="text-2xl font-semibold text-gray-800 mb-6">
            {product.price} BDT
          </p>

          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-700 leading-relaxed">
            {product.description?.trim()
              ? product.description
              // console.log(product.description)
              : "No description available for this product."}
          </p>
        </div>
      </div>
    </div>
  );
}
