import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "IMGTable",
    path: "/IMGTable",
    icon: <FaIcons.FaImages />,
    cName: "nav-text",
  },
  {
    title: "Grid",
    path: "/Grid",
    icon: <AiIcons.AiOutlineAppstore />,
    cName: "nav-text",
  },
  {
    title: "My Leagues",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "My Teams",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Shop",
    path: "/shop",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
