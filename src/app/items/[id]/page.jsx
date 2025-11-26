import Image from "next/image";

export default async function page({ params }) {

  const { id } = await params;

  const items = [
    {
      id: "1",
      name: "Noise Cancelling Headphone",
      desc: "Premium sound experience.",
      price: "₹2500",
      fullDesc:
        "Experience amazing sound with world-class noise cancellation. Perfect for work, travel, and entertainment.",
      img: "https://ecom.rangs.com.bd/storage/10981/860X740-01.jpg",
    },
    {
      id: "2",
      name: "Smart Fitness Band",
      desc: "Track your daily health.",
      price: "₹1200",
      fullDesc:
        "Monitor your heart rate, sleep cycle, and daily steps with this lightweight fitness band.",
      img: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/Pk5ydxYo6ty2Q4SX9vznP6.jpg",
    },
    {
      id: "3",
      name: "Wireless Earbuds",
      desc: "High quality audio output.",
      price: "₹3000",
      fullDesc:
        "Crystal clear wireless sound with long battery life and fast pairing technology.",
      img: "https://www.ultratech.com.bd/image/cache/catalog/PC-Power/pc-power-k98-rgb-gaming-mechanical-keyboard-white-500x500.jpg",
    },
    {
      id: "4",
      name: "Mechanical Keyboard",
      desc: "Perfect for gaming & typing.",
      price: "₹3500",
      fullDesc:
        "Premium mechanical keyboard with RGB lighting — perfect for gamers and programmers.",
      img: "https://www.ultratech.com.bd/image/cache/catalog/PC-Power/pc-power-k98-rgb-gaming-mechanical-keyboard-white-500x500.jpg",
    },
    {
      id: "5",
      name: "Smartwatch",
      desc: "Track your activity.",
      price: "₹4500",
      fullDesc:
        "Smartwatch with step count, GPS, health tracking and customizable watch faces.",
      img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      id: "6",
      name: "Portable Speaker",
      desc: "Loud and clear sound.",
      price: "₹2000",
      fullDesc:
        "Compact portable speaker with deep bass and long battery backup.",
      img: "https://cdn.shopz.com.bd/2024/05/Awei-KA5-20W-Portable-bluetooth-Speaker-1-300x300.jpg",
    },
  ];

  const item = items.find((i) => i.id === id);

  if (!item) {
    return <h1 className="text-center mt-20 text-2xl">Item Not Found</h1>;
  }

  return (
    <section className="w-full px-4 md:px-12 py-12">

      <a
        href="/items"
        className="inline-block mb-6 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
      >
        ◀ Back
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="w-full h-64 md:h-96 overflow-hidden bg-gray-100 rounded-xl">
          <Image
            src={item.img}
            alt={item.name}
            width={900}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{item.name}</h1>

          <p className="text-gray-700 mt-2 md:text-lg">{item.fullDesc}</p>

          <p className="text-2xl md:text-3xl font-bold text-blue-700 mt-4">
            {item.price}
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Buy Now
          </button>
        </div>

      </div>
    </section>
  );
}
