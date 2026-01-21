import Image from "next/image";
import Link from "next/link";

const Promotion = () => {
  return (
    <div className="max-w-5xl 5xl:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 p-10">
      <div className="bg-accent overflow-hidden aspect-video rounded-lg relative group">
        <Image
          src="/images/background/bg-cover-1.jpg"
          alt="Background Image Cover"
          width={500}
          height={500}
          className="w-full object-cover h-auto group-hover:scale-110 transition-all duration-300"
        />
        <div className="absolute top-10 left-10 space-y-3">
          <h5 className="text-2xl font-semibold uppercase text-white">
            Up to 50% off
          </h5>
          <div>
            <h1 className="font-bold text-4xl text-white">Super Natural</h1>
            <h1 className="font-bold text-4xl text-white">Beauty</h1>
          </div>
          <Link
            href=""
            className="text-white underline text-shadow-2xs font-semibold hover:text-blue-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="bg-accent overflow-hidden aspect-video rounded-lg relative group">
        <Image
          src="/images/background/bg-cover-2.jpg"
          alt="Background Image Cover"
          width={500}
          height={500}
          className="w-full object-cover h-auto group-hover:scale-110 transition-all duration-300"
        />
        <div className="absolute top-10 left-10 space-y-3">
          <h5 className="text-3xl font-semibold uppercase text-white">
            10% off
          </h5>
          <h1 className="font-bold text-4xl text-white">Body Butter</h1>
          <Link
            href=""
            className="text-white underline text-shadow-2xs font-semibold hover:text-blue-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
