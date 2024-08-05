import KYP from "../../../assets/img/encabezado.png";
import KYP_Red from "../../../assets/img/icono.png";
import {
    IconChevronDown,
    IconChevronLeft,
    IconLogout2,
    IconBriefcase,
    IconBuildingWarehouse,
    IconHome,
    IconPhysotherapist,
    IconShoppingBag,
    IconUserCog,
} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {useState} from "react";
// import useMenu from "../../../hooks/Sidebar/hookSidebar"


function index() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

    const navbar = [
        {
            title: "Home",
            apps: [
                {
                    title: "Menu Principal",
                    icon: <IconHome width={20}/>, spacing: true,
                }
            ],
        },
        {
            title: "Gestión de Usuarios",
            apps: [
                {
                    title: "Usuarios",
                    icon: <IconUserCog width={20}/>,
                    spacing: true,
                }
            ],
        },
        {
            id: 4,
            title: "Gestión de Pacientes",
            apps: [
                {
                    title: "Pacientes",
                    icon: <IconPhysotherapist width={20}/>,
                    submenu: true,
                    subMenuItems: [
                        {title: "SubMenu1"},
                        {title: "SubMenu2"},
                        {title: "SubMenu3"}
                    ]
                },
                {
                    title: 'Cotización',
                    icon: <IconPhysotherapist width={20}/>,
                    spacing: true
                }
            ]
        },
        {
            title: "Órdenes Internas",
            apps: [
                {
                    title: 'Órden de Trabajo',
                    icon: <IconBriefcase width={20}/>,
                    spacing: true
                }
            ]
        },
        {
            title: "Logística",
            apps: [
                {
                    title: "Almacén",
                    icon: <IconBuildingWarehouse width={20}/>,
                    submenu: true,
                    subMenuItems: [
                        {title: "SubMenu1"},
                        {title: "SubMenu2"},
                        {title: "SubMenu3"}
                    ]
                },
                {
                    title: 'Órden de Compras',
                    icon: <IconShoppingBag width={20}/>,
                    spacing: true
                }
            ]
        },
    ]


    return (<>
        <aside className={`hidden lg:flex flex-col bg-white shadow-md ${isOpen ? 'w-[265px]' : 'w-[75px]'} duration-500`}>
            <div
                className={`relative px-6 ${isOpen ? 'py-4' : 'py-[21px]'} flex justify-between items-center border-dashed border-b`}>
                {isOpen ? <img src={KYP} alt="Logo" className="w-[105px]"/> :
                    <img src={KYP_Red} alt="Logo" className="w-[40px]"/>}
                <button
                    className="py-0.5 px-1 rounded-lg bg-gray-50 hover:bg-gray-100 absolute -end-3 border shadow-sm"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <IconChevronLeft width={18} className={`${!isOpen && "rotate-180"} duration-300`}/>
                </button>
            </div>
            <div className="flex flex-col flex-1 justify-between overflow-y-auto">
                <nav className="flex-1 px-2 py-4 ">
                    {navbar.map((menu) => (
                        <div key={menu.id}>
                            <ul className="flex flex-col gap-1 px-2 py-2">
                                <p className={`text-sm text-gray-400 uppercase px-2 mb-2 ${!isOpen && "hidden"}`}>
                                    {menu.title}
                                </p>
                                {menu.apps.map((app, appIndex) => (
                                    <div key={appIndex}>
                                        <li className={`${app.spacing && 'mb-3'}`}>
                                            <Link
                                                to="#"
                                                className="flex items-center justify-between p-2 ps-3 text-base font-medium text-black rounded-lg hover:bg-[#F7F8FB] group hover:text-[#1B84FF]"
                                            >
                                                <div className="flex items-center">
                                                    {app.icon}
                                                    <span
                                                        className={`ml-3 ${!isOpen && 'hidden'}`}>{app.title}</span>
                                                </div>
                                                {app.submenu && open &&
                                                    <IconChevronDown
                                                        className={`duration-500 ${isOpenSubMenu ? "rotate-180" : ""}`}
                                                        width={20}
                                                        onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}/>
                                                }
                                                {!isOpen && (
                                                    <div
                                                        className="absolute left-16 rounded-md px-2 py-1 ml-6 bg-gray-800 text-white shadow-md text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                                                        {app.title}
                                                    </div>
                                                )}
                                            </Link>
                                        </li>
                                        {app.submenu && isOpenSubMenu && isOpen && (
                                            <ul className="pl-6 pt-2">
                                                {app.subMenuItems.map((submenuItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to="#"
                                                            className="flex items-center p-2 ps-3 text-base font-medium text-black group hover:text-[#1B84FF] border-l relative before:w-3 before:h-3 before:absolute before:bg-gray-400 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white hover:before:bg-[#1B84FF]"
                                                        >
                                                            <span className="ml-3">{submenuItem.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

            </div>
            <div className="bottom-2 w-full p-4 pb-8">
                <Link
                    to="#"
                    className="flex items-center justify-center p-2 text-base font-medium bg-red-300 text-black rounded-lg hover:bg-red-600 group hover:text-white"
                >
                    <div className="flex items-center">
                        <IconLogout2 width={20}/>
                        <span className={`ml-3 ${!isOpen && 'hidden'}`}>Cerrar Sesión</span>
                    </div>
                </Link>
            </div>
        </aside>
    </>)
}

export default index