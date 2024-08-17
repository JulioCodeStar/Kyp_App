import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useLocation, Link } from "react-router-dom";
import { getMenuList } from "@/lib/menu-list";
import { cn } from "@/lib/utils";

export function NavMenu2() {
  const location = useLocation();
  const pathname = location.pathname;
  const menuList = getMenuList(pathname);

  return (
    <Menubar className={cn("bg-transparent")}>
      {menuList.map(({ groupLabel, menus }, groupIndex) => (
        <MenubarMenu key={groupIndex}>
          {groupLabel && (
            <MenubarTrigger className={cn("cursor-pointer")}>
              {groupLabel}
            </MenubarTrigger>
          )}
          <MenubarContent>
            {menus.map(
              ({ href, label, icon: Icon, active, submenus }, menuIndex) => (
                <div key={menuIndex}>
                  {submenus.length > 0 ? (
                    <MenubarSub>
                      <MenubarSubTrigger>
                        {Icon && <Icon size={12} className="mr-2" />}
                        {label}
                      </MenubarSubTrigger>
                      <MenubarSubContent>
                        {submenus.map((submenu, subIndex) => (
                          <Link key={subIndex} to={submenu.href}>
                          <MenubarItem
                            as="a"
                            className={cn({ 'font-bold': submenu.active })}
                          >
                            {submenu.label}
                          </MenubarItem>
                         </Link> 
                        ))}
                      </MenubarSubContent>
                    </MenubarSub>
                  ) : (
                    <Link to={href}>
                      <MenubarItem
                        as="a"
                        className={cn({ 'font-bold': active })}
                      >
                        {Icon && <Icon className="mr-2" size={12} />}
                        {label}
                      </MenubarItem>
                    </Link>
                  )}
                </div>
              )
            )}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
