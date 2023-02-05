import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow-md dark:border-slate-900 border border-t-4 md:px-6 md:py-8 dark:bg-gray-900">
      <Link to="/" className="flex justify-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Cimadash
        </span>
      </Link>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
        ©{" "}
        <Link to="/" className="hover:underline">
          Cimadash
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
