import { cn } from "@/lib/utils";
import { Banknote } from "lucide-react";
import { JSX } from "react";

interface PropTypes {
  benefit: {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
  };
}

const CardBenefit = (props: PropTypes) => {
  const { benefit } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5">
      <div
        className={cn(
          "w-20 h-20 border-2 border-primary flex justify-center items-center",
          { "rounded-tr-[30px] rounded-bl-[30px]": benefit.id === 1 },
          { "rounded-[30px]": benefit.id === 2 },
          { "rounded-tl-[30px] rounded-br-[30px]": benefit.id === 3 }
        )}
      >
        {benefit.icon}
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold ">{benefit.title}</h1>
        <p>{benefit.description}</p>
      </div>
    </div>
  );
};

export default CardBenefit;
