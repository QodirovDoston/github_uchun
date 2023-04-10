import React from 'react'
import { useTranslation } from 'react-i18next'

function Tiitle() {
  const { t } = useTranslation()
  return (
      <div className='container mx-auto mt-7  '>
        <h1 className='sm:text-[30px] text-[28px] mt-[46px] font-medium text-gray-400'>{t("text.quloq")}</h1>
    </div>
  )
}
export default Tiitle
