import React, { useEffect, useState } from 'react'

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        setCart(cart.filter((item) => item.id !== id))
        setCart(cart);
        handlePrice()
    }
    const handlePrice = () => {
        let count = 0;
        cart.map((item) => (count += item.amount * item.price))
        setPrice(count)
        console.log(count);
    }
    useEffect(() => {
        handlePrice()
    })
    return (
        <div className='container mx-auto mt-7  grid gap-4 grid-cols-3 '>
            <div className=' grid gap-4 grid-cols-3'>
                {cart?.map((item) => (
                    <div className="bg-white w-[300px] h-[400px] rounded-[15px]" key={item.id}>
                        <div className="m-1">
                            <img className='w-[300px] rounded-t-[15px]' src={item.img} alt="aa" />
                            <p className='text-center'>{item.title}</p>
                        </div>
                        <div className='text-center'>
                            <button className='border-none rounded-[10px] bg-gray-300 w-14 h-8' onClick={() => handleChange(item, 1)} >+</button>
                            <button className='border-none rounded-[10px] bg-gray-200 w-20 h-8' >{item.amount}</button>
                            <button className='border-none rounded-[10px] bg-gray-300 w-14 h-8' onClick={() => handleChange(item, -1)} >-</button>
                        </div>
                        <div className='text-center'>
                            Price: <span>{item.price}</span>
                        </div>
                        <button className='text-center border-none rounded-[10px] bg-red-500 w-24 h-8 ' onClick={() => handleRemove(item.id)} >Remove</button>

                    </div>
                ))}
            </div>
            <div className="grid">
                <span>Total Price of your Cart : </span>
                <span>Rs - {price}</span>
            </div>
        </div>

    )
}
export default Cart;