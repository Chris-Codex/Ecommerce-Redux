import { Button } from "@material-tailwind/react"
import React from "react"
import single from "../../assets/single.jpg"
import { filterProducts } from "../../features/productsSlice/productSlice"
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

const NavigateButtons = () => {
    const buttons = ['Hoodies', 'Dresses', 'Suites', 'Shoes', 'T-Shirts', 'Jeans', 'Jackets', 'Bags']

    const dispatch = useDispatch()

  return (
    <div>
        <div className="flex items-center justify-center p-8">
          {buttons.map((button, index) => {
            return (
              <div  key={index} className="mr-4">
                <Link to={`/filtered-products/` + button}>
                  <Button className="hover:bg-gray-300 duration-300 ease-in-out"
                  onClick={() => dispatch(filterProducts(button))} color="gray" size="lg" variant="outlined" ripple={true} >{button}</Button>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="bg-green-300 p-2 w-[70%] mx-auto rounded-md">
          <h3 className="text-orange-900 text-center text-lg font-inter font-bold leading-none">SALES UP TO 50%</h3>
        </div>
        <div className="flex justify-center item-center p-4">
          <img className="h-[600px] w-[90%] rounded-md shadow-lg shadow-gray-600" src={single} alt="clothes" />
        </div>
    </div>
  )
}

export default NavigateButtons