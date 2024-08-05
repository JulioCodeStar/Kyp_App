import {
    IconHome, 
    IconUserCog, 
    IconPhysotherapist, 
    IconBriefcase, 
    IconBuildingWarehouse, 
    IconShoppingBag
} from '@tabler/icons-react';


export const sidebarItems = [
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
        title: "Gestión de Pacientes",
        apps: [
            {
                title: "Pacientes",
                icon: <IconPhysotherapist width={20}/>,
                submenu: true,
                subMenuItems: [
                    { title: "SubMenu1" },
                    { title: "SubMenu2" },
                    { title: "SubMenu3" }
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
