/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import KYP from "../../../assets/img/encabezado.png";
import KYP_Red from "../../../assets/img/icono.png";
import { IconChevronLeft, IconClipboardText } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  return (
    <>
      <aside
        className={`hidden lg:flex flex-col bg-white shadow-md ${
          isOpen ? "w-[265px]" : "w-[75px]"
        } duration-500`}
      >
        <div
          className={`relative px-6 ${
            isOpen ? "py-4" : "py-[21px]"
          } flex justify-between items-center border-dashed border-b`}
        >
          {isOpen ? (
            <img src={KYP} alt="Logo" className="w-[105px]" />
          ) : (
            <img src={KYP_Red} alt="Logo" className="w-[40px]" />
          )}
          <button
            className="py-0.5 px-1 rounded-lg bg-gray-50 hover:bg-gray-100 absolute -end-3 border shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IconChevronLeft
              width={18}
              className={`${!isOpen && "rotate-180"} duration-300`}
            />
          </button>
        </div>
        
        <div className="bottom-2 w-full p-4 pb-8">
          <Link
            to="#"
            className="flex items-center justify-center p-2 text-base font-medium bg-gray-300 text-black rounded-lg hover:bg-gray-600 group hover:text-white"
          >
            <div className="flex items-center">
              <IconClipboardText width={20} />
              <span className={`ml-3 ${!isOpen && "hidden"}`}>
                Documentación
              </span>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}
