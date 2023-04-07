import React from 'react'
import logo from './img/logo.png'
import LanguageIcon from '@mui/icons-material/Language';
import GTranslateSharpIcon from '@mui/icons-material/GTranslateSharp';

const Footer = () => {
    return (
        <>
            <div className='container mx-auto  mt-10 mb-10'>
                <div className="bg-white rounded-t-lg h-[150px] border-x-fuchsia-200">
                    <div className="flex justify-between ">
                        <div className="">
                            <img className=' m-[70px]' src={logo} alt="" />
                        </div>
                        <div className="mt-[40px]">
                            <h5 className='font-light'>Избранное</h5>
                            <h5 className='font-light'>Избранное</h5>
                            <h5 className='font-light'>Избранное</h5>
                        </div>
                        <div className="mt-[40px]">
                            <h2 className='font-light text-center'>Условия сервиса</h2>
                            <div className="flex gap-5 mt-3">
                                <LanguageIcon />
                                <h2 className='sm:text-black hover:text-yellow-500'>Каз</h2>
                                <h2 className='sm:text-black hover:text-yellow-500'>Рус</h2>
                                <h2 className='sm:text-black hover:text-yellow-500'>Eng</h2>
                            </div>
                        </div>
                            <div className="gap-8 m-[60px] ">
                                <GTranslateSharpIcon className='text-2xl' />
                                <GTranslateSharpIcon />
                                <GTranslateSharpIcon />
                                <GTranslateSharpIcon />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
