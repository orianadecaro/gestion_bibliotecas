// src/constants/sidebarData.js
import { FaChartBar, FaRegUser } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

export const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: "FaChartBar",
  },
  {
    id: 2,
    title: "Libros",
    path: "/admin/book",
    icon: "GiBookshelf ",
  },
  {
    id: 3,
    title: "Préstamos & Devoluciones",
    path: "/admin/lending",
    icon: "BsFillJournalBookmarkFill",
  },
  {
    id: 4,
    title: "Socios",
    path: "/admin/socio",
    icon: "FaPeopleLine",
  },
  {
    id: 5,
    title: "Usuarios",
    path: "/admin/user",
    icon: "FaRegUser",
  },
];
