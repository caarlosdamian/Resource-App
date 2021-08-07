import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Public Apis",
    path: "/apis",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Animal",
        path: "/apis/animals",
        icon: <GiIcons.GiCat />,
      },
      {
        title: "Anime",
        path: "/api/anime",
        icon: <AiIcons.AiFillAlipaySquare />,
      },
      {
        title: "Anti-Malware",
        path: "/api/anit-malware",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Art & Design",
        path: "/api/art",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Authentication",
        path: "/api/authentication",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Books",
        path: "/api/books",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Business",
        path: "/api/business",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Calendar",
        path: "/api/calendar",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Cloud Storage & File Sharing",
        path: "/api/cloud-storage",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Continuous Integration",
        path: "/api/continuos",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Cryptocurrency",
        path: "/api/cryptocurrency",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Currency Exchange",
        path: "/api/currency",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Data Validation",
        path: "/api/data-validation",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Development",
        path: "/api/development",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Dictionaries",
        path: "/api/dictionaries",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Documents & Productivity",
        path: "/api/documents-productivity",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Environment",
        path: "/api/environment",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Events",
        path: "/api/events",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Finance",
        path: "/api/finance",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Food & Drink",
        path: "/api/food-drink",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Games & Comics",
        path: "/api/games-comics",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Finance",
        path: "/api/finance",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Geocoding",
        path: "/api/geocoding",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Government",
        path: "/api/government",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Finance",
        path: "/api/finance",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Health",
        path: "/api/health",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Jobs",
        path: "/api/jobs",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Machine Learning",
        path: "/api/machine-learning",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Music",
        path: "/api/music",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "News",
        path: "/api/news",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Open Data",
        path: "/api/open-data",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Open Source Projects",
        path: "/api/open-source-projects",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Patent",
        path: "/api/patent",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Personality",
        path: "/api/personality",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Photography",
        path: "/api/photography",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Science & Math",
        path: "/api/science-math",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Security",
        path: "/api/security",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Shopping",
        path: "/api/shopping",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Social",
        path: "/api/social",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Sports & Fitness",
        path: "/api/sports-fitness",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Test Data",
        path: "/api/test-data",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Text Analysis",
        path: "/api/text-analysis",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Tracking",
        path: "/api/tracking",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Transportation",
        path: "/api/transportation",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "URL Shorteners",
        path: "/api/url-shorteners",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Vehicle",
        path: "/api/vehicle",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Video",
        path: "/api/video",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Weather",
        path: "/api/weather",
        icon: <IoIcons.IoIosPaper />,
      },
    
      
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Message 1",
        path: "/messages/message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Message 2",
        path: "/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
