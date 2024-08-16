import {
  IconLayoutDashboardFilled,
  IconBrandCohost,
  IconMessage2Share,
  IconEPassport,
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
      groupLabel: "Contents",
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
        {
          href: "/categories",
          label: "Categories",
          active: pathname.includes("/categories"),
          icon: IconMessage2Share,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Tags",
          active: pathname.includes("/tags"),
          icon: IconEPassport,
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
        {
          href: "/categories",
          label: "Categories",
          active: pathname.includes("/categories"),
          icon: IconMessage2Share,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Tags",
          active: pathname.includes("/tags"),
          icon: IconEPassport,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Gestión Pacientes",
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
        {
          href: "/categories",
          label: "Categories",
          active: pathname.includes("/categories"),
          icon: IconMessage2Share,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Tags",
          active: pathname.includes("/tags"),
          icon: IconEPassport,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
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
        {
          href: "/categories",
          label: "Categories",
          active: pathname.includes("/categories"),
          icon: IconMessage2Share,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Tags",
          active: pathname.includes("/tags"),
          icon: IconEPassport,
          submenus: [],
        },
      ],
    },
  ];
}

export { getMenuList };
