import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { menuItems } from "../../_Details";
import { MdPets } from "react-icons/md";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-5">
      <NavbarContent>
        <NavbarBrand className="flex gap-2">
          <li className="text-5xl text-green-500"><MdPets /></li>
          <p className="font-bold text-inherit uppercase text-3xl">pet sitting</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5 p-5" justify="center">
        {menuItems.map((menuitem, index) => (
          <NavbarItem key={menuitem.name} className="font-semibold">
            <a color="foreground" href={menuitem.href} className="hover:text-green-500">
              {menuitem.name}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color='foreground'
              className="w-full hover:text-green-500"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
