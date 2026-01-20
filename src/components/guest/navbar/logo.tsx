import Image from "next/image";

export const Logo = () => (
  <div className="flex items-center gap-1">
    <div>
      <Image
        src="/images/illustrations/nav-logo.png"
        alt="Nav Logo"
        width={40}
        height={40}
        className="object-cover aspect-square"
        // unoptimized={true}
      />
    </div>
    <div>
      <h4 className="font-bold text-2xl">
        Luxe<span className="">Mist</span>
      </h4>
    </div>
  </div>
);
