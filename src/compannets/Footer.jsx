import React from 'react'
import { SlSocialInstagram}  from "react-icons/sl";
import  {SlSocialTwitter}  from "react-icons/sl";
import  {FaRegPaperPlane}  from "react-icons/fa";
import  {FiFacebook} from "react-icons/fi";
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='container mx-auto  mt-10 mb-[-20px]'>
                <div className="bg-white rounded-t-lg sm:h-[190px] h-[120px]  border-x-fuchsia-200">
                    <div className="flex sm:justify-between justify-center sm:gap-1 gap-1  ">
                        <div className="sm:mr-3 mr-[20px]">
                            <h1 className=' font-bold sm:mt-[65px] mt-[49px] sm:ml-[25px] ml-[1px] sm:text-[40px] text-[18px]'>QPICK</h1>
                        </div>
                        <div className="mt-[40px] ">
                            <h5 className='font-light text-[10px] sm:text-[25px]'>{t("text.fot")}</h5>
                            <h5 className='font-light text-[10px] sm:text-[25px]'>Korzina</h5>
                            <h5 className='font-light text-[10px] sm:text-[25px]'>Kontakt</h5>
                        </div>
                        <div className="mt-[40px]">
                            <h2 className='font-light text-center text-[10px] sm:text-[27px]'>Условия сервиса</h2>
                            <div className="flex sm:gap-5 gap-1 mt-3">
                                <LanguageIcon className='sm:mt-[0px] mt-[-8px]' />
                                <h2 className='sm:text-black hover:text-yellow-500 text-[10px] sm:text-[20px] font-medium'>Каз</h2>
                                <h2 className='sm:text-black hover:text-yellow-500 text-[10px] sm:text-[20px] font-medium'>Рус</h2>
                                <h2 className='sm:text-black hover:text-yellow-500 text-[10px] sm:text-[20px] font-medium'>Eng</h2>
                            </div>
                        </div>
                            <div className="sm:gap-8 gap-1 sm:mt-[60px] mt-[50px] sm:mr-[70px] mr-[10px] flex">
                                <SlSocialTwitter />
                                <FiFacebook />
                                <FaRegPaperPlane />
                                <SlSocialInstagram  />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
