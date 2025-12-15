import React, { useContext, useEffect, useState } from "react";
import imgProfile from "../../assets/cat.jpg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { CounterShoppingList } from "../Context/CounterShoppingListProvider";
import ShoppingList from "../Component/ShoppingList";
import { IoMdQrScanner } from "react-icons/io"; 
import { CiMenuFries } from "react-icons/ci";
  
function Navbar({ mode, changeMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const {counter} = useContext(CounterShoppingList)

 
    // if(open||openCart){
    //   ;
    // }
 
  return (
    <>
      {/* start navbar */}
<nav className="bg-gray-100 dark:bg-[#03173b] py-4 px-5 shadow-xl fixed top-0 start-0 end-0 z-20">
  <div className="container mx-auto flex items-center justify-between">
    
    {/* Logo */}
      <Link to={"/"}>
    <div className="logo w-fit flex dark:text-white text-primary-600">
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 20">
        <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm3 8h-2v2h-2v-2H9V8h2V6h2v2h2v2z" />
      </svg>
      <h1 className="text-2xl font-bold flex items-end">
        MedLink
      </h1>
    </div>
      </Link>

    {/* Desktop Icons - Always visible on desktop */}
    <div className="hidden md:flex items-center gap-4">
      
      {/* Theme toggle */}
      <button
        className="text-2xl cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        onClick={() => changeMode(mode === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
      >
        {mode === "light" ? <IoMoonOutline /> : <GoSun />}
      </button>

      {/* Notifications */}
      <button
        className="text-2xl cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 transition-colors relative"
        aria-label="Notifications"
      >
        <IoIosNotificationsOutline />
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
      </button>

      {/* Cart */}
      <button
        className="text-2xl cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 transition-colors relative"
        onClick={() => setOpenCart(true)}
        aria-label="Shopping cart"
      >
        <IoCartOutline />
        {counter > 0 && (
          <div className="counter text-xs text-white min-w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2 bg-green-600">
            {counter}
          </div>
        )}
      </button>

      {/* Profile */}
      <button
        className="focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="User profile"
      >
        <img
          className="w-10 h-10 rounded-full border-2 border-transparent hover:border-blue-500 transition-colors"
          src={imgProfile}
          alt="User profile"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/40";
          }}
        />
      </button>
    </div>

    {/* Mobile Hamburger menu */}
    <div className="md:hidden">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        className="text-2xl focus:outline-none p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <CiMenuFries className="text-xl" />
      </button>
    </div>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <>
        {/* Backdrop */}
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu Panel */}
        <div className="md:hidden fixed top-16 right-0 w-64 bg-white dark:bg-gray-800 shadow-xl z-50 rounded-l-lg overflow-hidden">
          <div className="p-4">
            {/* User Info */}
            <div className="flex items-center gap-3 p-3 mb-4 border-b dark:border-gray-700">
              <img
                className="w-12 h-12 rounded-full"
                src={imgProfile}
                alt="Profile"
              />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">User Profile</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">View account</p>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="space-y-2">
              {/* Theme toggle */}
              <button
                className="flex items-center justify-between w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                onClick={() => changeMode(mode === "light" ? "dark" : "light")}
              >
                <div className="flex items-center gap-3">
                  {mode === "light" ? <IoMoonOutline className="text-xl" /> : <GoSun className="text-xl" />}
                  <span>{mode === "light" ? "Dark Mode" : "Light Mode"}</span>
                </div>
                <span className="text-sm text-gray-500">Switch</span>
              </button>

              {/* Notifications */}
              <button className="flex items-center justify-between w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <IoIosNotificationsOutline className="text-xl" />
                  <span>Notifications</span>
                </div>
                <span className="text-xs text-white bg-red-500 rounded-full px-2 py-1">3</span>
              </button>

              {/* Cart */}
              <button
                className="flex items-center justify-between w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                onClick={() => { setOpenCart(true); setIsMobileMenuOpen(false); }}
              >
                <div className="flex items-center gap-3">
                  <IoCartOutline className="text-xl" />
                  <span>Shopping Cart</span>
                </div>
                {counter > 0 && (
                  <span className="text-xs text-white bg-green-600 rounded-full px-2 py-1">
                    {counter} items
                  </span>
                )}
              </button>

              {/* Additional Menu Items */}
              <div className="pt-4 border-t dark:border-gray-700">
                <Link 
                  to="/profile" 
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span>My Profile</span>
                </Link>
                
                <Link 
                  to="/orders" 
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-6H4V8h11v4zm5 6h-4V8h4v10z" />
                  </svg>
                  <span>My Orders</span>
                </Link>
                
                <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-red-600 dark:text-red-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
</nav>
      {/* end navbar */}

      {openCart&&<ShoppingList />}
      


      {/* start sidebar of profile */}

      {/* Overlay — closes sidebar when clicking outside */}
      {(open || openCart) && (
        <div
          className="fixed inset-0 bg-black/10 z-40"
          onClick={() =>{ setOpen(false) ;setOpenCart(false);}}
        ></div>
      )}

      {/* start sidebar of profile */}
      <div
        className={`
    fixed top-[72px] z-50 right-0 bottom-0  w-64 bg-[#F9FAFB] dark:bg-[#000e3c] shadow-lg
    transform transition-transform duration-500
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <button
          className="fixed cursor-pointer top-0 end-0 m-3"
          onClick={() => setOpen(false)}
        >
          <IoMdClose />
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
            <Link to={'/profile'} className="bg-white border border-main_border dark:text-black text-[14px] my-2 px-3 py-1 rounded-[9px]">
              Edit Profile
            </Link>
          </div>
        </div>

        <ul className="space-y-1  border-b border-main_border">
          <li>
            <NavLink to={'My_medicine'}>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
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
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
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
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
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
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
                <IoMdQrScanner className="font-bold" />
                <span>Prescription Scanner</span>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={'settings'}>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
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
              <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
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
                <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
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
        <button className="text-red-500 flex items-center gap-2 my-2 px-4"><CiLogin className="text-xl" /> LayOut</button>

      </div>
      {/* end sidebar of profile */}

    </>
  );
}

export default Navbar;
