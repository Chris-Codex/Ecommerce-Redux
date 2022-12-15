import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from '../../features/cartSlice/cartSlice';


const SingleProduct = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.singleProduct)
    const productSize = products[0].size ? products[0].size[0] : ""
    const productColor = products[0].size ? products[0].size[0] : "" 
    const [size, setSize] = useState(productSize)
    const [color, setColor] = useState(productColor)
    const {id} = useParams()
    console.log("ID", id)

    
  return (
    <div>
        {products.filter((product) => product.id == id).map((item, index) => {
            
            
                return (
                    <div key={index} className='flex justify-center items-center py-10'>
                        <div className='pl-44 grow-[2]'>
                            <img className="h-[500px] w-[600px] rounded-lg" src={item.img} alt={item.name} />
                        </div>
                        <div className='grow-[3]'>
                            <div className='max-w-lg ml-3 mr-3'>
                                <h5 className='text-2xl font-inter items-center tracking-normal leading-none pb-4'>{item.name}</h5>
                                <p className='text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4'>15% OFF</p>
                                <p className='text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4'>{item.text}</p>
                                <div className='pb-4'>
                                    {size ? (
                                        <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a size</label>
                                        <select id="size" name="size" value={size} onChange={(e) => setSize(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            {item.size.map((list, index) => {
                                                return (
                                                    <option key={index} value={list}>{list}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    ) : (
                                        <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a size</label>
                                        <select disabled={true} id="size" name="size" value={size} onChange={(e) => setSize(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            {item?.size?.map((list, index) => {
                                                return (
                                                    <option key={index} value={list}>{list}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    )}
                                </div>

                                {color ? (
                                    <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a color</label>
                                    <select id="color" name="color" value={color} onChange={(e) => setColor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {item.color.map((list, index) => {
                                            return (
                                                <option key={index} value={list}>{list}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                ) : (
                                    <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a color</label>
                                    <select id="color" name="color" value={color} onChange={(e) => setColor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {item.color.map((list, index) => {
                                            return (
                                                <option key={index} value={list}>{list}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                )}
                            </div>
                            <div className='pt-2 ml-4'>
                                <Tooltip content="Add to Cart" placement='bottom'>
                                    <Button onClick={() => dispatch(addToCart({
                                        id: item.id,
                                        name: item.name,
                                        img: item.img,
                                        text: item.text,
                                        size: size,
                                        color: color,
                                        price: item.price,
                                        amount: 1,
                                        totalAmount: item.price
                                    }))} color='gray' size='lg' variant='outlined' ripple={true}>Add to Cart</Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                )
            })} 
    </div>
  )
}

export default SingleProduct