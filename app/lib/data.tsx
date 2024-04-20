import { id } from "date-fns/locale";
import { ReactElement } from "react";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdPlayCircleFilled,
  MdReadMore,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";

type menuType = {
  title: string;
  list: listType[];
};

type listType = {
  title: string;
  path: string;
  icon: ReactElement;
};

export const summary = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
    icon: <MdDashboard />,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
    icon: <MdDashboard />,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
    icon: <MdDashboard />,
  },
];
export const blog = [
  {
    id: 1,
    title: "How to use the new version of the admin dashboard?",
    tag: "🔥 Available Now",
    tagline: "Takes 4 minutes to learn",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit eius libero perspiciatis recusandae possimus.",
    buttonText: " Watch",
    buttonIcon: <MdPlayCircleFilled />,
  },
  {
    id: 2,
    title:
      "New server actions are available, partial pre-rendering is coming up!",
    tag: "🚀 Coming Soon",
    tagline: "Boost your productivity",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit eius libero perspiciatis recusandae possimus.",
    buttonText: " Learn",
    buttonIcon: <MdReadMore />,
  },
];

export const menuItems: menuType[] = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
      {
        title: "Logout",
        path: "/dashboard/logout",
        icon: <MdLogout />,
      },
    ],
  },
];

export const transactionsData = [
  {
    name: "Jonas",
    status: "pending",
    date: "14-01-2024",
    amount: "$3200",
  },
  {
    name: "John Emeka",
    status: "done",
    date: "14-01-2024",
    amount: "$2200",
  },
  {
    name: "Ifunaya Okoro",
    status: "cancelled",
    date: "14-01-2024",
    amount: "$4200",
  },
  {
    name: "Jonas butcher",
    status: "pending",
    date: "14-01-2024",
    amount: "$3200",
  },
];

export const chartData = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];

export const productsData = [
  {
    id: 1,
    name: "Dell laptop",
    description: "A powerful laptop for work and play",
    price: "$1099",
    stock: 30,
    category: "laptops",
    createdAt: "Nov 24 2024",
  },
  {
    id: 2,
    name: "Nike shoes",
    description: "very good shoes for running",
    price: "$1099",
    stock: 55,
    category: "laptops",
    createdAt: "Nov 24 2024",
  },
  {
    id: 3,
    name: "Sony smart Tv",
    description: "Experience high definition entertainment",
    price: "$1099",
    stock: 18,
    category: "laptops",
    createdAt: "Nov 24 2024",
  },
];

export const userData = [
  {
    id: 1,
    name: "Bettie fitz",
    email: "bettie@gamil.com",
    role: "admin",
    status: "active",
    createdAt: "Nov 04 2024",
  },
  {
    id: 2,
    name: "Emeka uwa",
    email: "emeka@gamil.com",
    role: "client",
    status: "passive",
    createdAt: "Nov 04 2024",
  },
];
