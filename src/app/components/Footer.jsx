export default function Footer() {
  return (
    <footer className="w-full mt-16 bg-gray-100 py-10 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <h2 className="text-2xl font-bold">GadgetShop</h2>
          <p className="text-gray-600 mt-2">
            Premium gadgets at the best prices.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/items" className="hover:text-black">Items</a></li>
            <li><a href="/about" className="hover:text-black">About</a></li>
            <li><a href="/contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-gray-600 text-xl">
            <a href="#" className="hover:text-black">📘</a>
            <a href="#" className="hover:text-black">🐦</a>
            <a href="#" className="hover:text-black">📸</a>
          </div>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} GadgetShop. All rights reserved.
      </p>
    </footer>
  );
}
