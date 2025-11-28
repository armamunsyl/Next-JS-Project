import Image from "next/image";
import Link from "next/link";

export default function PopularItems() {
  const items = [
    {
      id: 1,
      name: "Noise Cancelling Headphone",
      price: "₹ 2500",
      img: "https://ecom.rangs.com.bd/storage/10981/860X740-01.jpg",
    },
    {
      id: 2,
      name: "Smart Fitness Band",
      price: "₹ 1200",
      img: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/Pk5ydxYo6ty2Q4SX9vznP6.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹ 3000",
      img: "https://cdn.shopz.com.bd/2022/08/QCY-HT05-MeloBuds-ANC-True-Wireless-Earbuds-300x300.jpg",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: "₹ 3500",
      img: "https://www.ultratech.com.bd/image/cache/catalog/PC-Power/pc-power-k98-rgb-gaming-mechanical-keyboard-white-500x500.jpg",
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 py-12">
      <h2 className="text-3xl font-bold mb-6">Popular Items</h2>

     <Link href={"/items"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={250}
              height={250}
              className="rounded-lg"
            />
            <h3 className="mt-3 font-semibold">{item.name}</h3>
            <p className="text-gray-700">{item.price}</p>
          </div>
        ))}
      </div>
     </Link>
    </section>
  );
}
