import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotalPrice } from '../Redux/CartSlice';
import { Link } from 'react-router-dom';


const Nav = () => {


    const cartItem = useSelector(selectCartItems)
    const totalPrice = useSelector(selectCartTotalPrice)

    return (
        <>
            <div className='fixed z-10 w-full'>
                <nav className=' flex  bg-pink-700 text-white items-center justify-between py-4 px-3  '>

                    <Link to={"/"}>
                        <h3 h3 > Redux - Toolkit</h3>
                    </Link>


                    <div className='bg-yellow-600 rounded-md py-2 px-10'> Cart Item total Price {totalPrice} ₹ </div>

                    <Link to={"/cart"}>
                        <button type="button" className="inline-flex items-center px-5 py-2.5 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <CiShoppingCart className=' size-5 font-bold' />
                            <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                                {cartItem.length}
                            </span>
                        </button>
                    </Link>

                </nav >
            </div >
        </>
    )
}

export default Nav
