import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps } from "react";
import { GUEST_MENU } from "./menu.constant";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
  const router = useRouter();
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        {GUEST_MENU.length > 0 &&
          GUEST_MENU.map((menu) => (
            <NavigationMenuItem key={menu.key}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href={menu.href}
                  className={cn(
                    "hover:bg-black hover:text-white bg-transparent",
                    {
                      "text-white bg-black": menu.href === router.pathname
                    }
                  )}
                >
                  {menu.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
