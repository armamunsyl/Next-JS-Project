import Image from "next/image";

export default function ManageProducts() {
  const products = [
    {
      id: 1,
      name: "Noise Cancelling Headphone",
      price: "₹2500",
      img: "https://ecom.rangs.com.bd/storage/10981/860X740-01.jpg",
    },
    {
      id: 2,
      name: "Smart Fitness Band",
      price: "₹1200",
      img: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/Pk5ydxYo6ty2Q4SX9vznP6.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹3000",
      img: "https://www.ultratech.com.bd/image/cache/catalog/PC-Power/pc-power-k98-rgb-gaming-mechanical-keyboard-white-500x500.jpg",
    },
    {
      id: 4,
      name: "Portable Speaker",
      price: "₹2000",
      img: "https://cdn.shopz.com.bd/2024/05/Awei-KA5-20W-Portable-bluetooth-Speaker-1-300x300.jpg",
    },
  ];

  return (
    <section
      className="min-h-screen w-full px-4 md:px-12 py-12"
      style={{
        background: "linear-gradient(to bottom right, #f7faff, #eef2ff)",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Manage Products
      </h1>

      <div className="bg-white shadow-xl rounded-xl p-4 md:p-6 overflow-x-auto">
        <table className="min-w-[700px] w-full text-left">
          <thead>
            <tr className="border-b bg-gray-100 text-sm md:text-base">
              <th className="p-3 font-semibold w-[80px]">Image</th>
              <th className="p-3 font-semibold">Product Name</th>
              <th className="p-3 font-semibold">Price</th>
              <th className="p-3 font-semibold text-center w-[160px]">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 text-sm md:text-base">

                <td className="p-3">
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="rounded-md object-cover w-[50px] h-[50px]"
                  />
                </td>

                <td className="p-3 font-medium">{item.name}</td>

                <td className="p-3">{item.price}</td>

                <td className="p-3">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2">

                    <button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs md:text-sm">
                      Edit
                    </button>

                    <button className="px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 text-xs md:text-sm">
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </section>
  );
}
