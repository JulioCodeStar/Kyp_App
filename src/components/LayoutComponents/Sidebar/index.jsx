/* eslint-disable react-hooks/rules-of-hooks */
import KYP from "../../../assets/img/encabezado.png";
import KYP_Red from "../../../assets/img/icono.png";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SidebarToogle } from './sidebar-toogle';
import { Button } from "@/components/ui/button";
import { useStore } from '@/hooks/use-store';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { Menu } from './menu';

export default function sidebar() {

  const sidebar = useStore(useSidebarToggle, (state) => state);
  if(!sidebar) return null;
  
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
          sidebar?.isOpen === false ? "w-[90px]" : "w-[256px]"
        )}
      >
       <SidebarToogle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen}/> 
       <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 my-3",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link href="/" className="flex items-center gap-2">
            <img src={KYP_Red} alt="" className={cn(
              "hidden w-8 mr-1",
              sidebar?.isOpen === false ? "block" : "hidden"
            )}/>
            <img src={KYP} alt="" className={cn(
                "whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300 w-[130px]",
                sidebar?.isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}/>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
      </aside>
    </>
  );
}
