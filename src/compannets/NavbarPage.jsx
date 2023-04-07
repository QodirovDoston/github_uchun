import React from 'react'
import logo from './img/logo.png'
import tel from './img/Vector (3).png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const NavbarPage = ({ setShow,size}) => {
    return (
        <>
            <div className='container mx-auto mt-7'>
                <div className="flex justify-between ">
                    <div className="flex">
                    <img onClick={()=>setShow(true)} className='mr-[80px] w-[120px] h-40px]' src={logo} alt="" />
                    <img className='mr-[20px] w-[18px] h-5' src={tel} alt="" />
                    <h2 className='text-[15px]'>Выбрать модель телефона</h2>
                    </div>
                    <div  onClick={()=>setShow(false)} className="gap-[60px] ">
                        <FavoriteBorderIcon />
                        <LocalGroceryStoreIcon />
                        <span className='mt-[-7px]'>{size}</span>
                    </div>
                </div>
                <h1 className='text-[30px] mt-[46px] font-medium'>Избранное</h1>
                <h1 className='text-[30px] mt-[46px] font-medium text-gray-400'>Наушники</h1>
            </div>
        </>
    )
}

export default NavbarPage
