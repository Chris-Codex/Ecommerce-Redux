import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice/cartSlice';


const ProductSectionItem = ({id, imgs, name, text, price, totalPrice, size, color}) => {
    const dispatch = useDispatch()

    const defaultSize = size[0];
    const defaultColor = color[0];

  return (
    <div>
         <Card className="w-80">
            <CardHeader floated={false} className="h-30">
                <img src={imgs} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" color="gray" className="mb-2">
                {name}
                </Typography>
                <Typography color="gray" className="font-medium" textGradient>
                {text}
                </Typography>
                <div className='flex justify-between items-center pt-4'>
                    <Typography color="gray" className="mb-2">
                        Size Left: {defaultSize}
                    </Typography>
                    <Typography  color="gray" className="mb-2">
                        Color: <span className='px-2 rounded-full ml-2' style={{ backgroundColor: defaultColor }}></span>
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Add to Cart" placement='bottom'>
                    <Button onClick={() => dispatch(addToCart({
                        id: id,
                        imgs: imgs,
                        text: text,
                        amount: 1,
                        price: price,
                        totalPrice: totalPrice,
                        name: name,
                        size: defaultSize,
                        color: defaultColor

                    }))} size='lg' color='gray' variant='outlined'ripple={true}>Add to Cart</Button>
                </Tooltip>
            </CardFooter>
         </Card>
    </div>
  )
}

export default ProductSectionItem