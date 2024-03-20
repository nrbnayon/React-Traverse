import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";

const NavBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/contact", name: "Contact" },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              onClick={() => setToggle(!toggle)}
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-2xl"
            >
              {toggle === true ? <FaWindowClose /> : <RiMenu2Fill />}
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm duration-1000 ${
                toggle ? "dropdown-content" : "hidden"
              } mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}
            >
              {routes.map((route) => (
                <li key={route.id}>{route.name}</li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {routes.map((route) => (
              <li key={route.id}>
                <a href={`${route.path}`}>{route.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
