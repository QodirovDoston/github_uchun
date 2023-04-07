import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = ({item, handleClick}) => {
const {title, author, price, img} = item;
    return (
        <>
            <div className='container mx-auto mt-7  grid gap-4 grid-cols-3  '>
                <div className=" w-[390px] h-[480px]mt-7 bg-white rounded-xl">
                    <FavoriteIcon className='m-4 active:text-red-400 focus:outline-none focus:ring' />
                    <img className='mx-auto w-[280px] ' src={img} alt="d" />
                    <div className="flex justify-between m-6 ">
                        <h3 className='font-semibold'>{title} </h3>
                        <div className="d">
                            <h5 className='text-[25px]  text-yellow-500'>{price} ₸</h5>
                            <h5 className='text-[17px] text-yellow-300 line-through'> {author}</h5>
                        </div>
                    </div>
                    <div className="flex m-6 gap-2">
                        <StarIcon className='text-yellow-500 ' />
                        <h4 className='text-gray-500'>4.7</h4>
                        <button onClick={() => handleClick(item)} className=' ml-[170px] text-white bg-white hover:bg-cyan-600 hover:w-[80px]  hover:h-[31px] rounded-[4px]'>buy</button>
                    </div>
                </div>
            </div>
            {/* <div className="">
                <h2>Беспроводные наушники</h2>
            </div> */}
            {/* <div className="container mx-auto mt-7 grid gap-4 grid-cols-3">
                <div className="">
                    <div className=" w-[390px] h-[500px]mt-7 bg-white rounded-xl">
                        <FavoriteIcon className='m-4' />
                        <img className='mx-auto w-[280px] ' src={img} alt="" />
                        <div className="flex justify-between m-6 ">
                            <h3 className='font-semibold'>Apple BYZ S852I </h3>
                            <div className="d">
                                <h5 className='text-[25px]  text-yellow-500'>2927 ₸</h5>
                                <h5 className='text-[17px] text-yellow-300 line-through'>2927 ₸</h5>
                            </div>
                        </div>
                        <div className="flex m-6 gap-2">
                            <StarIcon className='text-yellow-500 ' />
                            <h4 className='text-gray-500'>4.7</h4>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Header
