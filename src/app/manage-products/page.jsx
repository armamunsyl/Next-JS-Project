"use client";

import { useEffect, useState } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editProduct, setEditProduct] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImage, setEditImage] = useState("");

  // -----------------------------
  // Fetch all products
  // -----------------------------
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.log("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // -----------------------------
  // Delete Product
  // -----------------------------
  const handleDelete = async (id) => {
    const sure = confirm("Are you sure?");
    if (!sure) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        await fetchProducts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  // -----------------------------
  // Open Edit Modal
  // -----------------------------
  const openEditModal = (product) => {
    setEditProduct(product);
    setEditName(product.name);
    setEditPrice(product.price);
    setEditImage(product.image);
  };

  // -----------------------------
  // Update Product
  // -----------------------------
  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/products/${editProduct._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editName,
          price: editPrice,
          image: editImage,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setEditProduct(null); // Close modal
        await fetchProducts(); // Refresh table
      }
    } catch (err) {
      console.log("Update error:", err);
    }
  };

  // -----------------------------
  // UI Rendering
  // -----------------------------
  return (
    <div className="py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Manage Products</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-5xl mx-auto border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">Image</th>
              <th className="py-3 text-left">Product Name</th>
              <th className="py-3 text-left">Price</th>
              <th className="py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b">
                <td className="py-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>

                <td className="py-3 font-medium">{product.name}</td>
                <td className="py-3 font-semibold">₹{product.price}</td>

                <td className="py-3 flex gap-3">
                  <button
                    onClick={() => openEditModal(product)}
                    className="bg-blue-600 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && !loading && (
          <p className="text-center py-6 text-gray-500">No products found.</p>
        )}
      </div>

      {/* -----------------------------------
          EDIT MODAL
      ----------------------------------- */}
      {editProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>

            <label className="font-semibold">Name</label>
            <input
              className="w-full p-2 border rounded mb-3"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />

            <label className="font-semibold">Price</label>
            <input
              className="w-full p-2 border rounded mb-3"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />

            <label className="font-semibold">Image URL</label>
            <input
              className="w-full p-2 border rounded mb-4"
              value={editImage}
              onChange={(e) => setEditImage(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditProduct(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
