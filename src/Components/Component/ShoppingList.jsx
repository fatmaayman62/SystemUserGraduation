import React  from "react";
import img from "../../assets/cat.jpg"; 
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
function ShoppingList() {
  return (
    <>
      <div
        className={`
             fixed top-[72px] z-50 right-0 bottom-0  w-68 px-2 bg-[#F9FAFB] dark:bg-[#000e3c] shadow-lg
             transform transition-transform duration-500 pt-4
    
          `}
      >
        <div
          data-slot="card"
          className="bg-card w-full text-card-foreground flex flex-col gap-6 rounded-xl border p-5 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex gap-4">
            <div className="w-15 h-15 rounded-lg overflow-hidden bg-gray-100 ">
              <img
                src={img}
                alt="Paracetamol 500mg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-gray-900 text-[14px]">Paracetamol 500mg</h3>
                <p className="text-sm text-gray-500 mt-1">20 units</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1">
          <button 
            className="border rounded-md p-1 cursor-pointer"
            >
            <FaMinus className="text-[12px]" />
            </button>

            <span className="w-6 text-center">2</span>

            <button 
            className="border rounded-md p-1 cursor-pointer"
            >
            <FaPlus className="text-[12px]" />
            </button>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 text-[12px]">EGP 45.00</p>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-3 text-sm text-destructive hover:text-destructive/80 flex items-center gap-1 text-red-600 transition-colors cursor-pointer">
            <FiTrash2 className="text-[18px]" />
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default ShoppingList;
