import React, { useContext, useEffect, useState } from "react";
import imgProfile from "../../assets/cat.jpg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCartOutline, IoClose, IoSearchOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { CounterShoppingList } from "../Context/CounterShoppingListProvider";
import ShoppingList from "../Component/ShoppingList";
import { IoMdQrScanner } from "react-icons/io"; 
import { RiMenu3Line } from "react-icons/ri";

function Navbar({ mode, changeMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const {counter} = useContext(CounterShoppingList);
  const [isThemeAnimating, setIsThemeAnimating] = useState(false);

  const handleThemeChange = (newMode) => {
    setIsThemeAnimating(true);
    changeMode(newMode);
    
    // Reset animation after it completes
    setTimeout(() => {
      setIsThemeAnimating(false);
    }, 300);
  };

  return (
    <>
      {/* start navbar */}
      <nav className="bg-white dark:bg-[#03173b] py-3 px-5 shadow-md fixed top-0 start-0 end-0 z-20">
        <div className="container mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="logo flex items-end text-blue-600 dark:text-white">
            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 20">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm3 8h-2v2h-2v-2H9V8h2V6h2v2h2v2z" />
            </svg>
            <h1 className="text-xl md:text-2xl font-bold">
              <Link to={"/"}>MedLink</Link>
            </h1>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl text-gray-700 dark:text-gray-300 p-2 transition-transform hover:scale-110"
            >
              <RiMenu3Line />
            </button>
          </div>

          {/* Main menu with animation */}
          <div
            className={`md:flex absolute md:relative top-14 md:top-0 left-0 right-0 md:left-auto md:right-auto md:flex-row md:items-center md:gap-6 bg-white dark:bg-[#03173b] md:bg-transparent py-4 px-5 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${
              isMobileMenuOpen 
                ? "flex opacity-100 translate-y-0" 
                : "hidden md:flex opacity-0 md:opacity-100 translate-y-[-10px] md:translate-y-0"
            }`}
          >
            {/* Profile & Icons */}
            <div className="Profile flex items-center mx-auto gap-4 md:gap-5">
              
              {/* Theme toggle with enhanced animation */}
              <div className="relative">
                {mode === "light" ? (
                  <span 
                    className={`text-2xl cursor-pointer text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-300 flex items-center justify-center ${
                      isThemeAnimating ? "scale-125 rotate-180" : ""
                    }`}
                    onClick={() => handleThemeChange("dark")}
                  >
                    <IoMoonOutline className="transition-all duration-300" />
                    {/* Sun rays animation effect */}
                    <span className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 animate-ping"></span>
                  </span>
                ) : (
                  <span 
                    className={`text-2xl cursor-pointer text-yellow-300 p-2 hover:bg-gray-800 rounded-full transition-all duration-300 flex items-center justify-center ${
                      isThemeAnimating ? "scale-125 rotate-180" : ""
                    }`}
                    onClick={() => handleThemeChange("light")}
                  >
                    <GoSun className="transition-all duration-300" />
                    {/* Sun rays animation effect */}
                    <span className="absolute inset-0 rounded-full border-2 border-yellow-300 opacity-0 animate-ping"></span>
                  </span>
                )}
                
                {/* Pulsing dot for current mode */}
                <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                  mode === "light" ? "bg-blue-500" : "bg-yellow-400"
                } animate-pulse`}></span>
              </div>

              {/* Notifications with animation */}
              <span className="text-2xl cursor-pointer text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded relative transition-all duration-200 hover:scale-110">
                <IoIosNotificationsOutline />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </span>

              {/* Cart with animation */}
              <span
                className="text-2xl relative cursor-pointer text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-all duration-200 hover:scale-110"
                onClick={() => { 
                  setOpenCart(true); 
                  setOpen(false);
                  setIsMobileMenuOpen(false); 
                }}
              >
                {counter !== 0 && (
                  <div className="counter text-xs text-white text-center min-w-5 h-5 rounded-full absolute -top-2 -right-2 bg-blue-600 flex items-center justify-center font-semibold animate-bounce">
                    {counter}
                  </div>
                )}
                <IoCartOutline />
              </span>

              {/* Profile image with animation */}
              <img
                className="w-9 h-9 rounded-full cursor-pointer border-2 border-blue-500 transition-all duration-300 hover:scale-110 hover:border-blue-600"
                onClick={() => { 
                  setOpen(true); 
                  setOpenCart(false);
                  setIsMobileMenuOpen(false); 
                }}
                src={imgProfile}
                alt="imgProfile"
              />
            </div>
          </div>
        </div>
      </nav>
      {/* end navbar */}

      {/* Overlay — closes sidebars when clicking outside */}
      {(open || openCart) && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => { 
            setOpen(false); 
            setOpenCart(false); 
          }}
        ></div>
      )}

      {/* Cart Sidebar */}
      <ShoppingList cart={openCart} />

      {/* Profile Sidebar */}
      <div
        className={`
          fixed top-[64px] sm:top-[60px] z-50 right-0 bottom-0 w-64 bg-[#F9FAFB] dark:bg-[#000e3c] shadow-lg
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          className="fixed cursor-pointer top-0 end-0 m-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-1 transition-colors"
          onClick={() => setOpen(false)}
        >
          <IoMdClose className="text-xl" />
        </button>

        <div className="profile w-full mt-2 text-center mx-auto border-b border-main_border pt-1 pb-2">
          <figure>
            <img
              src={imgProfile}
              className="w-30 aspect-square rounded-full mx-auto"
              alt=""
            />
          </figure>
          <div className="info_user">
            <h2 className="my-1">John Doe</h2>
            <span className="text-[#717182] block">john.doe@email.com</span>
            <Link to={'/profile'} className="bg-white border border-main_border dark:text-black text-[14px] my-2 px-3 py-1 rounded-[9px] hover:bg-gray-100 transition-colors inline-block">
              Edit Profile
            </Link>
          </div>
        </div>

        <ul className="space-y-1 border-b border-main_border">
          <li>
            <NavLink to={'My_medicine'}>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-pill w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
                  <path d="m8.5 8.5 7 7"></path>
                </svg>
                <span>My Medicines</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={'order_history'}>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-package w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
                <span>Order History</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={'saved_address'}>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Saved Addresses</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={'prescription_scanner'}>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <IoMdQrScanner className="font-bold" />
                <span>Prescription Scanner</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={'settings'}>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Settings</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={'notification'}>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                <span>Notifications</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={'contact-us'}>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-question-mark w-5 h-5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <span>Help &amp; Support</span>
              </button>
            </NavLink> 
          </li>
        </ul>
        <button className="text-red-500 flex items-center gap-2 my-2 px-4 py-2 hover:bg-red-50 rounded transition-colors w-full">
          <CiLogin className="text-xl" /> 
          Logout
        </button>
      </div>
    </>
  );
}

export default Navbar;
