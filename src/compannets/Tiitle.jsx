import React from 'react'
import { useTranslation } from 'react-i18next'

function Tiitle() {
  const { t } = useTranslation()
  return (
      <div className='container mx-auto sm:mt-[639px] sm:pb-[40px] pb-0  '>
        <h1 className='sm:text-[30px] text-[28px] mt-[46px] font-medium text-gray-400'>{t("text.quloq")}</h1>
    </div>
  )
}
export default Tiitle
