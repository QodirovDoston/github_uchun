import React from 'react'
import { useTranslation } from 'react-i18next'

const Orachora = () => {
  const { t } = useTranslation()
  return (
    <div className='ml-4'>
      <div className='container mx-auto sm:mt-7 mt-0  '>
        <h1 className='sm:text-[30px] text-[25px] sm:mt-[46px]  font-medium'>{t("text.nav")}</h1>
        <h1 className='sm:text-[30px] text-[25px] sm:mt-[46px] font-medium text-gray-400'>Наушники</h1>
      </div>
    </div>
  )
}
export default Orachora;