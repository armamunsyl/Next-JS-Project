import Image from 'next/image'
import ProductImg from "../../../public/product.png"

export default function AddProduct() {
    return (
        <section
            className="min-h-screen w-full px-4 md:px-12 py-12 flex justify-center items-start"
            style={{
                background: "linear-gradient(to bottom right, #f7faff, #eef2ff)",
            }}
        >
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="bg-white shadow-xl rounded-2xl p-8">
                    <h1 className="text-3xl md:text-4xl font-bold">Add New Product</h1>
                    <p className="mt-2 text-gray-600 md:text-lg">
                        Fill up the form to add a new product to the store.
                    </p>

                    <form className="mt-10 space-y-6">

                        <div>
                            <label className="block mb-1 font-semibold">Product Name</label>
                            <input
                                type="text"
                                placeholder="Enter product name"
                                className="w-full p-3 border border-gray-300 rounded-lg 
                                focus:ring-2 focus:ring-blue-400 outline-none
                                focus:border-blue-500"
                                style={{ borderWidth: "1px" }} 
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Price</label>
                            <input
                                type="number"
                                placeholder="Enter price"
                                className="w-full p-3 border border-gray-300 rounded-lg 
                                focus:ring-2 focus:ring-blue-400 outline-none
                                focus:border-blue-500"
                                style={{ borderWidth: "1px" }}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Short Description</label>
                            <input
                                type="text"
                                placeholder="Short description"
                                className="w-full p-3 border border-gray-300 rounded-lg 
                                focus:ring-2 focus:ring-blue-400 outline-none
                                focus:border-blue-500"
                                style={{ borderWidth: "1px" }}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Full Description</label>
                            <textarea
                                rows="4"
                                placeholder="Write full details..."
                                className="w-full p-3 border border-gray-300 rounded-lg 
                                focus:ring-2 focus:ring-blue-400 outline-none
                                focus:border-blue-500"
                                style={{ borderWidth: "1px" }}
                            ></textarea>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Image URL</label>
                            <input
                                type="text"
                                placeholder="https://example.com/image.jpg"
                                className="w-full p-3 border border-gray-300 rounded-lg 
                                focus:ring-2 focus:ring-blue-400 outline-none
                                focus:border-blue-500"
                                style={{ borderWidth: "1px" }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg 
                            font-semibold hover:bg-blue-700 transition"
                        >
                            Add Product
                        </button>
                    </form>
                </div>

                <div className="hidden md:flex justify-center items-center">
                    <Image
                        className="rounded-3xl drop-shadow-2xl"
                        src={ProductImg}
                        alt="Form Illustration"
                        width={480}
                        height={480}
                    />
                </div>

            </div>
        </section>
    );
}
