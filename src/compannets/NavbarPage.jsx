import React from 'react'
import '../compannets/Nav.css'
import tel from './img/Vector (3).png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import GTranslateSharpIcon from '@mui/icons-material/GTranslateSharp';
import { PersonPinCircleOutlined } from '@mui/icons-material';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const NavbarPage = ({ setShow, size }) => {
    const { t } = useTranslation()

    const handlClick = (lang) => {
        i18next.changeLanguage(lang)
    }
    return (
        <>
            <div className='container mx-auto mt-7'>
                <div className="flex sm:justify-between justify-center ">
                    <div className="flex  ">
                        <h2 onClick={() => setShow(true)} className='font-bold sm:text-[50px] text-[30px] sm:mr-[80px] mr-[45px] mt-[-20px]'>QPICK</h2>
                        <div className="sm:flex  hidden ">
                            <img className='sm:mr-[20px]  w-[18px] h-6' src={tel} alt="" />
                            <h2 className='text-[19px] '> {t('text.text_p')}</h2>
                        </div>
                    </div>
                    <div className="gap-4 flex sm:mt-0 mt-[-13px]">
                        <div className="dropdown ">
                            <button className="dropbtn ">
                                <GTranslateSharpIcon className='hidden  ' />
                            </button>
                            <div className="dropdown-content ">
                                <p className='m-2'><PersonPinCircleOutlined />  Apple</p>
                                <p className='m-2'>iPhone 12</p>
                                <p className='m-2'>iPhone 12 Max</p>
                                <p className='m-2'>iPhone 13 Max</p>
                                <p className='m-2'>iPhone 13 Pro Max</p>
                                <p className='m-2'>iPhone 14</p>
                                <p className='m-2'><FavoriteBorderIcon />  Language</p>
                                <p className='m-2' onClick={() => handlClick("rus")}>Russian</p>
                                <p className='m-2' onClick={() => handlClick("uz")}>Uzbek</p>
                                <p className='m-2' onClick={() => handlClick("eng")}> English</p>
                            </div>
                        </div>
                        <FavoriteBorderIcon />
                        <LocalGroceryStoreIcon onClick={() => setShow(false)} />
                        <span className='ml-[-25px] mt-[-10px] text-red-500'>{size}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarPage
