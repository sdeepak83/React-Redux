

import FakeData from '../Resources/resource';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartItems } from '../Redux/CartSlice';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {

    const dispaatch = useDispatch()
    const cartItem = useSelector(selectCartItems)

    console.log("cart items", cartItem)


    const handleAddToCart = (item) => {
        dispaatch(addToCart(item))

        toast.success(' Item Added to your cart!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });


    }

    return (
        <>
            <ToastContainer></ToastContainer>
            <div className='flex justify-between item-center flex-wrap px-5 py-5 bg-purple-700 text-white sticky-top  pt-20'>

                {
                    FakeData.map((item) => (


                        <div key={item.id} className='flex flex-col px-5 py-5 flex-wrap gap-3 w-60 bg-pink-800 mt-6 rounded-md shadow-lg  item-center  justify-center'>


                            <img src={item.imgSrc}
                                className='w-[90%]' alt="pic" />


                            <h1 className=' text-xl font-bold'>{item.title}</h1>


                            <h1 className=' text-xl font-bold'>{item.price} ₹</h1>


                            <p>{item.description}</p>


                            <button className='bg-blue-600 py-2 font-semibold hover:bg-blue-900' onClick={() => handleAddToCart(item)} >Add to cart</button>

                        </div>
                    ))
                }

            </div >

        </>
    )
}

export default Product
