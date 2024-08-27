import {
  IconLayoutDashboardFilled,
  IconBrandCohost,
  IconUserPlus,
  IconFileInvoice,
  IconContract,
  IconBrandShopee,
  IconReport,
  IconBook
} from "@tabler/icons-react";

function getMenuList(pathname) {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: IconLayoutDashboardFilled,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Gestión Usuarios",
      menus: [
        {
          href: "",
          label: "Posts",
          active: pathname.includes("/posts"),
          icon: IconBrandCohost,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "New Post",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Gestión Pacientes",
      menus: [
        {
          href: "",
          label: "Pacientes",
          active: pathname.includes("/posts"),
          icon: IconUserPlus,
          submenus: [
            {
              href: "/pacientes",
              label: "Listado Pacientes",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "Registro Pacientes",
              active: pathname === "/posts/new",
            },
          ],
        },
        {
          href: "/categories",
          label: "Cotizaciones",
          active: pathname.includes("/categories"),
          icon: IconFileInvoice,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Contratos",
          active: pathname.includes("/tags"),
          icon: IconContract,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Compra de Productos",
          active: pathname.includes("/tags"),
          icon: IconBrandShopee,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Historial de Citas",
          active: pathname.includes("/tags"),
          icon: IconReport,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Reclamos",
          active: pathname.includes("/tags"),
          icon: IconBook,
          submenus: [],
        },
      ],
    },
  ];
}

export { getMenuList };
