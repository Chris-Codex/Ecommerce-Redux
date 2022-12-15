import React from 'react'
import { storeData } from '../../assets/data/data'
import ProductSectionItem from './ProductSectionItem';

const ProductSection = () => {
  return (
    <div>
        <div className='bg-black p-2 w-[50%] mx-auto rounded-md'>
            <h2 className='text-red-600 text-center text-lg font-inter tracking-normal leading-none'>
                SUMMER SALE T-SHIRT 30%
            </h2>
        </div>
        <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
            {storeData.slice(0, 6).map((product, index) => {
                return (
                    <div key={index}>
                        <ProductSectionItem 
                            id={product.id} name={product.name} text={product.text}
                            price={product.price} totalPrice={product.totalPrice}
                            size={product.size} color={product.color} imgs={product.img} 
                        />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductSection