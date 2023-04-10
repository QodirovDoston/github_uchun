import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Cardc = () => {
// const [data, setData] =useState()
// const handlehClick =() =>{
//     const dataId = (id) => {
//         axios.get(`https://dbjsoninserver-production.up.railway.app/data/${id}`)
//             .then((data) => {
//                 setData(data.data)
//                 console.log(data.id);
//      })
//     }
// }

    const { t } = useTranslation()
    const [age, setName] = useState([])
    const getData = () => {
        axios.get('https://dbjsoninserver-production.up.railway.app/data')
            .then((data) => {
                setName(data.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    return (

        <div className='container '>
            <Row className='sm:grid gap-[599px] grid-cols-3 grid-rows-3 sm:ml-0 ml-1 '>
                {age.map((item) => {
                    return (
                        <>
                            <Col className='sm:mb-[-600px] mb-[0px]'>
                                <div className="  sm:w-[390px] w-[290px]  sm:h-[590px] h-[390px] mt-7  bg-white rounded-[40px] shadow-2xl">
                                    <FavoriteIcon className='m-4 active:text-red-400 focus:outline-none focus:ring' />
                                    <img className='mx-auto sm:w-[370px] w-[270px] sm:h-[300px] h-[200px] ' src={item.img} alt="d" />
                                    <div className="flex justify-between sm:m-4 m-1 ">
                                        <h3 className='font-semibold'>{item.title} </h3>
                                        <div className="d">
                                            <h5 className='sm:text-[25px] text-[15px]  text-yellow-500'>{item.price} ₸</h5>
                                            <h5 className='sm:text-[17px] text-[10px] text-yellow-300 line-through'> {item.author}</h5>
                                        </div>
                                    </div>
                                    <div className="flex sm:gap-2 gap-0 sm:m-4 m-1">
                                        <StarIcon className='text-yellow-500 ' />
                                        <h4 className='text-gray-500'>4.7</h4>
                                        <button  className=' sm:ml-[180px]  ml-[120px] sm:w-[100px] w-[100px] text-white  sm:h-[41px]  h-[28px] rounded-[4px] 
                                        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>{t('text.fot1')}</button>
                                    </div>
                                </div>
                            </Col>

                        </>
                    )
                })}
            </Row>
        </div>


    )
}

export default Cardc
