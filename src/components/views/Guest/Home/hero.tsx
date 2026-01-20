import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0 grid-cols-1">
        <div className="my-auto flex flex-col justify-center items-center lg:items-start">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#">
              Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[30ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-[-0.035em] text-center lg:text-left uppercase">
            Luxury Perfume
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg text-foreground/80 text-center lg:text-left">
            Best Perfume Collection for You, Elegance in Every Scent
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Shop Now <ArrowUpRight className="h-5! w-5!" />
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/images/illustrations/hero.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
