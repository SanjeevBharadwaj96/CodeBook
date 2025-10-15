import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Header = () => {
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
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span className="cursor-pointer text-gray-700 dark:text-white text-xl bi bi-gear-wide" />
            <span className="cursor-pointer text-gray-700 dark:text-white text-xl bi bi-search" />
            <span className="cursor-pointer text-gray-700 dark:text-white text-xl bi bi-bag" />
            <span className="cursor-pointer text-gray-700 dark:text-white text-xl bi bi-person-circle" />
          </div>
        </div>
      </nav>
    </header>
  );
};
