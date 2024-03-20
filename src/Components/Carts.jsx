import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, selectCartItems } from '../Redux/CartSlice';
import { Link } from 'react-router-dom';

const Carts = () => {

    const dispaatch = useDispatch()
    const cartItem = useSelector(selectCartItems)

    return (
        <>



            <div className='flex justify-between item-center flex-wrap flex-col   px-5 py-5 text-white sticky-top  pt-20'>

                {
                    cartItem.length === 0 &&
                    (

                        <div className='text-black flex items-center flex-col'>
                            <h1 className=' my-5 text-xl'>Your cart is empty</h1>
                            <Link to={'/'} className='  bg-purple-400 font-semibold py-1 px-10 rounded-md hover:bg-purple-700 hover:text-white'> Continue Shopping ...</Link>
                        </div>
                    )
                }



                {
                    cartItem.map((item) => (


                        <div key={item.id} className=' flex  px-5 py-5 flex-wrap gap-3 w-[80%] bg-pink-800 mt-6 rounded-md shadow-lg  item-center '>



                            <img src={item.imgSrc}
                                className='w-[20%] h-[20%]' alt="pic" />

                            <div>
                                <h1 className=' text-xl font-bold'>{item.title}</h1>


                                <h1 className=' text-xl font-bold'>{item.price} ₹</h1>


                                <p>{item.description}</p>

                            </div>



                        </div>
                    ))
                }



            </div >
            <div className='  flex w-full  justify-center py-10 ' >
                <button className='bg-green-500 py-1 px-5 rounded hover:bg-green-700 hover:text-white ' onClick={() => dispaatch(clearCart())}>clear all</button>
            </div>
        </>
    )
}

export default Carts

