import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

const Cardc = (handleClick) => {
    const [name, setName] = useState([])
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
                {name.map((item) => {
                    return (
                        <>
                            <Col className='sm:mb-[-600px] mb-[0px]'>
                                <div className="  sm:w-[390px] w-[290px]  sm:h-[590px] h-[390px] mt-7  bg-white rounded-[40px]">
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
                                        <button onClick={() => handleClick(item)} className=' sm:ml-[180px]  ml-[160px]  bg-cyan-400 sm:w-[80px] w-[60px] text-white  sm:h-[31px]  h-[28px] rounded-[4px]'>t</button>
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
