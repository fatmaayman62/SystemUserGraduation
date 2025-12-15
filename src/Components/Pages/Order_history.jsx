import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import img from '../../assets/cat.jpg'
import { Button } from '@heroui/react';

function Order_history() {
  return (
    <>
    <div className="container mx-auto py-4">
    <h2>Order History</h2>

    {/* start order history */}
      <div className="orders">

        <div className="box border-s-4 border-green-500 bg-white dark:bg-[#03173b] rounded-xl p-4 my-5 relative">
            <h3 className='sm:text-[16px] text-[14px]'>Order #ORD-12345</h3>
            <p className='sm:text-[14px] text-[12px] text-[#717182] my-2'>Jan 20, 2025</p>
            <figure className='flex gap-2'>
                <img className='sm:w-12 w-10 aspect-square rounded-xl' src={img} alt="" />
                <img className='sm:w-12 w-10 aspect-square rounded-xl' src={img} alt="" />
            </figure>
            <div className='flex justify-between my-4'>
                <span className='sm:text-[14px] text-[12px] text-[#717182]'>HealthPlus Pharmacy</span>
                <span className='sm:text-[16px] text-[14px]'>$89.50</span>
            </div>
            <div className="flex justify-between">
                <Button className='sm:w-[88%] w-[85%] sm:text-[16px] text-[14px] py-1 border border-main_border rounded-md text-white main_gradient'>Recorder</Button>
                <span className='flex items-center gap-1.5 sm:text-[14px] text-[12px] mx-2'>View Detail <FaArrowRightLong className='text-[10px]' /></span>
            </div>
            <span className='px-2 py-1 bg-green-100 text-green-700 rounded-xl sm:text-[12px] text-[10px] absolute top-5 right-5'>Delivered</span>
        </div>


        <div className="box border-s-4 border-yellow-500 bg-white dark:bg-[#03173b] rounded-xl p-4 my-5 relative">
            <h3 className='sm:text-[16px] text-[14px]'>Order #ORD-12344</h3>
            <p className='sm:text-[14px] text-[12px] text-[#717182] my-2'>Jan 20, 2025</p>
            <figure className='flex gap-2'>
                <img className='sm:w-12 w-10 aspect-square rounded-xl' src={img} alt="" />
                <img className='sm:w-12 w-10 aspect-square rounded-xl' src={img} alt="" />
            </figure>
            <div className='flex justify-between my-4'>
                <span className='sm:text-[14px] text-[12px] text-[#717182]'>HealthPlus Pharmacy</span>
                <span className='sm:text-[16px] text-[14px]'>$89.50</span>
            </div>
            <div className="flex justify-between">
                 <Button className='sm:w-[88%] w-[85%] sm:text-[16px] text-[14px] py-1 border border-main_border rounded-md text-white main_gradient'>Recorder</Button>
                <span className='flex items-center gap-1.5 sm:text-[14px] text-[12px] mx-2'>View Detail <FaArrowRightLong className='text-[10px]' /></span>
            </div>
            <span className='px-2 py-1 bg-yellow-100 text-yellow-700 rounded-xl sm:text-[12px] text-[10px] absolute top-5 right-5'>pending</span>
        </div>

        <div className="box border-s-4 border-red-500 bg-white dark:bg-[#03173b] rounded-xl p-4 my-5 relative">
            <h3 className='sm:text-[16px] text-[14px]'>Order #ORD-12343</h3>
            <p className='sm:text-[14px] text-[12px] text-[#717182] my-2'>Jan 20, 2025</p>
            <figure className='flex gap-2'>
                <img className='sm:w-12 w-10 aspect-square rounded-xl' src={img} alt="" />
                <img className='sm:w-12 w-10 aspect-square rounded-xl' src={img} alt="" />
            </figure>
            <div className='flex justify-between my-4'>
                <span className='sm:text-[14px] text-[12px] text-[#717182]'>HealthPlus Pharmacy</span>
                <span className='sm:text-[16px] text-[14px]'>$89.50</span>
            </div>
            <div className="flex justify-between">
                <Button className='sm:w-[88%] w-[85%] sm:text-[16px] text-[14px] py-1 border border-main_border rounded-md text-white main_gradient'>Recorder</Button>
                <span className='flex items-center gap-1.5 sm:text-[14px] text-[12px] mx-2'>View Detail <FaArrowRightLong className='text-[10px]' /></span>
            </div>
            <span className='px-2 py-1 bg-red-100 text-red-700 rounded-xl sm:text-[12px] text-[10px] absolute top-5 right-5'>Cancelled</span>
        </div>


      </div>
    {/* end order history */}

    </div>
    
    
    </>
  )
}

export default Order_history