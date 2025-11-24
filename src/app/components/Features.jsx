import { FaTruck, FaTag, FaShieldAlt } from "react-icons/fa";

export default function Features() {
    return (
        <section className="w-full py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
                <FaTruck className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-semibold">Fast Shipping</h3>
                <p className="text-gray-600 mt-2">
                    Speedy and reliable delivery for all your gadgets.
                </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
                <FaTag className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-semibold">Affordable Prices</h3>
                <p className="text-gray-600 mt-2">
                    Get the best deals on your favorite gadgets.
                </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
                <FaShieldAlt className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-semibold">Quality Products</h3>
                <p className="text-gray-600 mt-2">
                    Only premium and verified gadgets selected for you.
                </p>
            </div>

        </section>
    );
}
