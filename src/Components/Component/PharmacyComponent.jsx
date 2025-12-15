import React, { useContext } from "react";
import img from '../../assets/cat.jpg'
import { CiDeliveryTruck, CiLocationOn, CiStar } from "react-icons/ci";
import { RiSendPlaneLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { Button } from "@heroui/react";
import { CounterShoppingList } from "../Context/CounterShoppingListProvider";
function PharmacyComponent() {
  const {counter,setCounter} = useContext(CounterShoppingList)
  return (
    <>
      <div className="xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full p-2">
        <div className="box dark:bg-[#03173b] rounded-2xl bg-[#FFFFFF] border-2 border-main_border p-4 shadow-sm hover:shadow-xl">
          <div className="medicine_info flex gap-4 my-2">
            <figure>
              <img src={img} className="sm:h-14 sm:w-14 h-12 w-12 rounded-full" alt="" />
            </figure>
            <div className="info">
              <h3 className="text-[#2D3436] sm:text-[16px] text-[14px] dark:text-white">
                Al-Shifa Pharmacy
              </h3>
              <div className="reviews flex items-center">
                <span>
                  <CiStar className="text-amber-300" />
                </span>
                <span>
                  <CiStar className="text-amber-300" />
                </span>
                <span>
                  <CiStar className="text-amber-300" />
                </span>
                <span>
                  <CiStar className="text-amber-300" />
                </span>
                <span>
                  <CiStar className="text-amber-300" />
                </span>

                <span className="text-[#717182] sm:text-[14px] text-[12px] mx-1  dark:text-white">
                   
                  4.5 (120 reviews)
                </span>
              </div>
            </div>
          </div>


          <div className="flex justify-between items-center py-2">
            <span className="sm:text-lg text-[16px] font-medium">Paracetamol 500mg</span>
            <span className="sm:text-[24px] text-[20px] font-bold main_gradient bg-clip-text text-transparent">
              EGP 248
            </span>
          </div>
          <p className="flex items-center gap-1 bg-[#00D2A0] rounded-2xl w-fit sm:text-[12px] text-[10px] px-2 my-2 text-white">
            <span className="my-auto sm:text-[16px] text-[14px]">✓</span> In Stock: 15 units
          </p>
          <p className="flex gap-1 sm:text-[14px] text-[12px] text-[#2D3436] py-1  dark:text-white">
            <span className="my-auto">
              <CiLocationOn />
            </span> 
            1.2 km away
          </p>
          <div className="flex justify-between sm:flex-row flex-col sm:gap-0 gap-2 my-2">
            <Button className="sm:w-fit w-full sm:text-[14px] text-[12px] flex items-center gap-1 bg-[#F8F9FA] rounded-[8px] border border-[#E5E5E5] text-[black] mx-1 hover:border-[#764ba2]">
              <span>
                <RiSendPlaneLine />
              </span> 
              Navigate
            </Button>
            <Button className="sm:w-fit w-full sm:text-[14px] text-[12px] flex items-center gap-1 bg-[#F8F9FA] rounded-[8px] border border-[#E5E5E5] text-[black] mx-1  hover:border-[#764ba2]">
              <span>
                <IoCallOutline />
              </span> 
              Call
            </Button>
            <Button className="sm:w-fit w-full sm:text-[14px] text-[12px] main_gradient text-white rounded-[8px] hover:shadow-md mx-1"   onClick={() => setCounter(prev => prev + 1)}>
              Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PharmacyComponent;
