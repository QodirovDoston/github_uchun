import React from 'react'
import  SlSocialInstagram from "react-icons/sl";
import  SlSocialTwitter  from "react-icons/sl";

import FaRegPaperPlane from "react-icons/fa";
import FiFacebook from "react-icons/fi";
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='container mx-auto  mt-10 mb-[-20px]'>
                <div className="bg-white rounded-t-lg sm:h-[190px] h-[180px]  border-x-fuchsia-200">
                    <div className="flex sm:justify-between justify-center sm:gap-1 gap-0  sm:ml-[0] ml-[-50px] ">
                        <div className="sm:mr-3 mr-[10px] ">
                            <h1 className=' font-bold sm:mt-[65px] mt-[49px] sm:ml-[25px] ml-[1px] sm:text-[40px] text-[18px]'>QPICK</h1>
                        </div>
                        <div className="mt-[40px]  ">
                            <h5 className='font-light text-[10px] sm:text-[25px]'>{t("text.fot2")}</h5>
                            <h5 className='font-light text-[10px] sm:text-[25px]'>{t("text.fot3")}</h5>
                            <h5 className='font-light text-[10px] sm:text-[25px]'>{t("text.fot4")}</h5>
                        </div>
                        <div className="mt-[40px] flex-wrap">
                            <h2 className='font-light text-center text-[10px] sm:text-[27px] sm:mt-0 mt-[15px]'> {t("text.fot5")}</h2>
                            <div className="flex sm:gap-5 gap-0 sm:mt-3 mt-[40px] sm:ml-0 ml-[-70px]">
                                <LanguageIcon className='sm:mt-[0px] mt-[-8px]' />
                                <h2 className='sm:text-black hover:text-yellow-500 text-[10px] sm:text-[20px] font-medium'>{t("text.fot6")}</h2>
                                <h2 className='sm:text-black hover:text-yellow-500 text-[10px] sm:text-[20px] font-medium'>{t("text.fot7")}</h2>
                                <h2 className='sm:text-black hover:text-yellow-500 text-[10px] sm:text-[20px] font-medium'>{t("text.fot8")}</h2>
                            </div>
                        </div>
                        <div className="sm:gap-8 gap-1 sm:mt-[60px] mt-[140px] sm:mr-[70px] mr-[10px]  sm:ml-[0px] ml-[-120px] flex">
                            <SlSocialTwitter />
                            <FiFacebook />
                            <FaRegPaperPlane />
                            <FiFacebook />
                            <FaRegPaperPlane />
                            <SlSocialInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
