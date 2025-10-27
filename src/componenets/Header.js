import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { Search } from "./Search";
import { DropdownLoggedOut } from "./DropdownLoggedOut";
import { DropdownLoggedIn } from "./DropdownLoggedIn";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const [darkmode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem("darkMode") || false)
  );
  //console.log("match media ", window.matchMedia);
  // This checks the windows preference of the mode...
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = query.matches;
  const [searchItem, setSearchItem] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { cartList } = useCart();

  const token = JSON.parse(sessionStorage.getItem("token"));
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkmode));
    isDarkMode && darkmode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkmode]); //eslint-disable-line

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Codebook logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setDarkmode(!darkmode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setSearchItem(!searchItem)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            >
              {dropdown &&
                (token ? (
                  <DropdownLoggedIn setDropdown={setDropdown} />
                ) : (
                  <DropdownLoggedOut setDropdown={setDropdown} />
                ))}
            </span>
          </div>
        </div>
      </nav>
      {searchItem && <Search setSearchItem={setSearchItem} />}
    </header>
  );
};
