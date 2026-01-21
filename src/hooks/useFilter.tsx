import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

const useFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const keyword = formData.get("search")?.toString();

    const params = new URLSearchParams(searchParams);

    if (keyword) {
      params.set("search", keyword);
    } else {
      params.delete("search");
    }

    const queryString = params.toString();

    const url = queryString ? `${pathname}?${params.toString()}` : pathname;

    replace(url, { scroll: false });
  };

  return { handleFilter, searchParams };
};

export default useFilter;
