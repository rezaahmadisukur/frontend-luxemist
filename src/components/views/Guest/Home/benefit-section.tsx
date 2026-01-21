import { Banknote, CircleDollarSign, Percent } from "lucide-react";
import CardBenefit from "./card-benefit";

const BENEFITS = [
  {
    id: 1,
    title: "Quick Payment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat!",
    icon: <Banknote className="size-13 text-primary" />
  },
  {
    id: 2,
    title: "Affordable Prices",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, odit?",
    icon: <CircleDollarSign className="size-13 text-primary" />
  },
  {
    id: 3,
    title: "Big Deals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eos.",
    icon: <Percent className="size-13 text-primary" />
  }
];

const BenefitSection = () => {
  return (
    <div className="max-w-5xl 5xl:container mx-auto p-10">
      <div className="text-center mb-15">
        <h1 className="text-4xl font-bold text-stroke-2 text-transparent">
          Benefit
        </h1>
        <h2 className="text-4xl font-bold text-foreground">Perks & Benefit</h2>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {BENEFITS.length > 0 &&
          BENEFITS.map((benefit) => (
            <div key={benefit.id}>
              <CardBenefit benefit={benefit} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BenefitSection;
