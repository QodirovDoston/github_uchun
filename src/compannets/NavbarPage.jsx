import React from 'react'
import logo from './img/logo.png'

import '../compannets/Nav.css'
import tel from './img/Vector (3).png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import GTranslateSharpIcon from '@mui/icons-material/GTranslateSharp';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { PersonPinCircleOutlined } from '@mui/icons-material';

const NavbarPage = ({ setShow, size }) => {
    const { t } = useTranslation()

    const handlClick = (lang) => {
        i18next.changeLanguage(lang)
    }
    return (
        <>
            <div className='container mx-auto mt-7'>
                <div className="flex justify-between ">
                    <div className="flex">
                        <h2 onClick={() => setShow(true)} className='font-bold text-[50px] mr-[80px] mt-[-20px]'>QPICK</h2>
                        <img className='mr-[20px] w-[18px] h-5' src={tel} alt="" />
                        <h2 className='text-[15px]'> {t('text.text_p')}</h2>
                    </div>
                    <div  className="gap-4 flex ">
                        <div class="dropdown">
                            <button class="dropbtn ">
                                <GTranslateSharpIcon className='hidden  ' />
                            </button>
                            <div class="dropdown-content">
                                <a ><PersonPinCircleOutlined />Войти</a>
                                <a ><FavoriteBorderIcon />  Избранное</a>
                                <a  onClick={() => handlClick("rus")}>Russian</a>
                                <a  onClick={() => handlClick("uz")}>Uzbek</a>
                                <a  onClick={() => handlClick("eng")}> English</a>
                            </div>
                        </div>
                        <FavoriteBorderIcon />
                        <  LocalGroceryStoreIcon onClick={() => setShow(false)}/>
                        <span className='ml-[-25px] mt-[-10px] text-white bg-red-500 rounded-[40px] h-5 w-4 '>{size}</span>
                    </div>
                </div>
                <h1 className='text-[30px] mt-[46px] font-medium'>{t("text.nav")}</h1>
                <h1 className='text-[30px] mt-[46px] font-medium text-gray-400'>Наушники</h1>
            </div>
        </>
    )
}

export default NavbarPage
