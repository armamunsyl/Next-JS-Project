import Image from 'next/image'
import HeroImg from "../../../public/hero.png"
export default function Hero() {
    return (
        <section className="w-full px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between">

            <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Smart Technology, <br /> Your Fingertips
                </h1>

                <p className="text-gray-600 mt-4 text-lg">
                    Curated selection of gadgets, easy shopping experience, and clean design.
                </p>

                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700">
                    Shop Now
                </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <Image className='rounded-3xl'
                    src={HeroImg}
                    alt="Landscape picture"
                    width={500}
                    height={500}
                    
                />
            </div>


        </section>
    );
}
