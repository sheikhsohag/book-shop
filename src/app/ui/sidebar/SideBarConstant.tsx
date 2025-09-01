import { i } from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBook, faInfoCircle,faUserGear, faUsers, faList, faCheckSquare, faTruck, faGear,faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { title } from "process";


export const SideBarConstant = [
    {
        title: "Home",
        href: "/",
        icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        title: "Book",
        href: "/book",
        icon: <FontAwesomeIcon icon={faBook} />,
    },
    {
        title: "Sell or Lend",
        href: "/sell",
        icon: <FontAwesomeIcon icon={faCheckSquare} />
    },
    {
        title: "Cart",
        href: "/cart",
        icon: <FontAwesomeIcon icon={faCartShopping} />
    },
    {
        title: "Track Order",
        href: "/track-order",
        icon: <FontAwesomeIcon icon={faTruck} />,
    },
    {
        title: "Communities",
        href: "/communities",
        icon: <FontAwesomeIcon icon={faUsers} />,
    },{
        title: "Setting",
        href: "/setting",
        icon: <FontAwesomeIcon icon={faGear} />,
    },
    {
        title: "About",
        href: "/about",
        icon: <FontAwesomeIcon icon={faInfoCircle} />,
    },
    {
        title: "Admin",
        href: "/admin",
        icon: <FontAwesomeIcon icon={faUserGear} />,
    }
];
