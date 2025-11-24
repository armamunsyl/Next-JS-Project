import Image from "next/image";

export default function ItemsPage() {
  const items = [
    {
      id: 1,
      name: "Noise Cancelling Headphone",
      desc: "Premium sound experience.",
      price: "₹2500",
      img: "https://ecom.rangs.com.bd/storage/10981/860X740-01.jpg",
    },
    {
      id: 2,
      name: "Smart Fitness Band",
      desc: "Track your daily health.",
      price: "₹1200",
      img: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/Pk5ydxYo6ty2Q4SX9vznP6.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      desc: "High quality audio output.",
      price: "₹3000",
      img: "https://www.ultratech.com.bd/image/cache/catalog/PC-Power/pc-power-k98-rgb-gaming-mechanical-keyboard-white-500x500.jpg",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      desc: "Perfect for gaming & typing.",
      price: "₹3500",
      img: "https://www.ultratech.com.bd/image/cache/catalog/PC-Power/pc-power-k98-rgb-gaming-mechanical-keyboard-white-500x500.jpg",
    },
    {
      id: 5,
      name: "Smartwatch",
      desc: "Track your activity.",
      price: "₹4500",
      img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      id: 6,
      name: "Portable Speaker",
      desc: "Loud and clear sound.",
      price: "₹2000",
      img: "https://cdn.shopz.com.bd/2024/05/Awei-KA5-20W-Portable-bluetooth-Speaker-1-300x300.jpg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-12 py-12">

      <h1 className="text-3xl md:text-4xl font-bold">All Items</h1>
      <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
        Browse through our complete gadget collection.
      </p>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search items..."
          className="w-full md:w-1/2 p-2 md:p-3 border rounded-lg shadow-sm text-sm md:text-base focus:outline-blue-500"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-6 md:mt-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-2 md:p-5 rounded-xl shadow hover:shadow-lg transition bg-white flex flex-col"
          >
            <div className="w-full h-36 md:h-56 overflow-hidden bg-gray-100 rounded-lg">
              <Image
                src={item.img}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col flex-grow mt-2 md:mt-4">
              <h3 className="font-semibold text-xs md:text-lg">{item.name}</h3>

              <p className="text-gray-600 text-[10px] md:text-sm mt-1">
                {item.desc}
              </p>

              <p className="font-bold text-gray-800 mt-1 text-xs md:text-base">
                {item.price}
              </p>
            </div>

            <a
              href={`/items/${item.id}`}
              className="mt-2 md:mt-3 inline-block px-2 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded text-[10px] md:text-base hover:bg-blue-700"
            >
              Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
