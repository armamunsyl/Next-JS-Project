"use client";

import { useEffect, useState } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

 async function fetchProducts() {
  const res = await fetch("/api/products", { cache: "no-store" });
  const data = await res.json();
  setProducts(data);
}


  useEffect(() => {
    fetchProducts();
  }, []);

  const openEdit = (p) => {
    setEditingProduct(p);
    setName(p.name);
    setPrice(p.price);
    setImage(p.image);
    setDescription(p.description || "");
    setEditOpen(true);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
    const data = await res.json();

    if (data.success) {
      fetchProducts();
    }
  };

  const handleUpdate = async () => {
    if (!editingProduct?._id) return;

    const res = await fetch(`/api/products/${editingProduct._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, image, description }),
    });

    const data = await res.json();
    if (data.success) {
      setEditOpen(false);
      fetchProducts();
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Manage Products</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Image</th>
            <th className="p-3">Product Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-b">
              <td className="p-3">
                <img src={p.image} className="w-16 h-16 rounded" />
              </td>
              <td className="p-3">{p.name}</td>
              <td className="p-3">₹{p.price}</td>
              <td className="p-3 flex gap-3">
                <button
                  onClick={() => openEdit(p)}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-96 space-y-4">
            <h2 className="text-xl font-semibold">Edit Product</h2>

            <input className="w-full p-2 border" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="w-full p-2 border" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input className="w-full p-2 border" value={image} onChange={(e) => setImage(e.target.value)} />
            <textarea className="w-full p-2 border" value={description} onChange={(e) => setDescription(e.target.value)} />

            <button onClick={handleUpdate} className="px-4 py-2 bg-green-600 text-white rounded w-full">
              Save
            </button>
            <button onClick={() => setEditOpen(false)} className="px-4 py-2 bg-gray-600 text-white rounded w-full">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
