import React from 'react'
import { Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { singleProduct } from '../../features/productsSlice/productSlice';

    


const ProductsCard = ({id, name, text, img, price, color }) => {
    const dispatch = useDispatch()
    const { type } = useParams()

  return (
    <Link to={`/filtered-products/${type}/` + id}>
        <Card className="w-65" onClick={() => dispatch(singleProduct(id))}>
            <CardHeader color="blue" className="relative h-58">
                <img
                src={img}
                alt="img-blur-shadow"
                className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                {name}
                </Typography>
                <Typography>
                {text}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small">{price}$</Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                    {color?.map((color, index) => {
                        return <i className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4" key={index} style={{ backgroundColor: color}}></i>
                    })}
                </Typography>
            </CardFooter>
        </Card>
    </Link>
  )
}

export default ProductsCard