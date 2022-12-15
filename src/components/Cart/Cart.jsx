import { Fragment } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cartSlice/cartSlice";



const Cart = ({openModal, setOpen}) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    console.log("CART", cart)
    const totalPrice = useSelector((state) => state.cart.totalPrice)

  return (
    <div>
       {cart.length > 0 ? ( 
            <Fragment>
                <Dialog
                    className="border-0 outline-0"
                    open={openModal}
                    handler={() => setOpen(false)}
                    animate={{
                    mount: { scale: 0.9, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <DialogHeader>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        Shopping Bag
                    </DialogHeader>
                    <DialogBody divider className="flex flex-col justify-center items-start">
                        {cart.map((item, index) => {
                            return (
                                <div className="" key={index}>
                                    <div className="grid grid-cols-2 py4">
                                        <div>
                                            <img className="h-[125px] rounded-md" src={item.img} alt={item.name} />
                                            <div className="flex flex-col items-start">
                                                <h4 className="text-black text-base font-inter font-bol tracking-normal leading-none pt-2">
                                                    {item.name}
                                                </h4>
                                            </div>
                                            <div className="max-w-xs pb-2">
                                                <p className="text-black text-xs font-inter font-normal tracking-normal leading-none pt-2">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-black text-sm font-inter font-bold tracking-normal leading-none pt-2">Selected Size: <span className="ml-2 rounded-full px-2 font-light">{item.size}</span></p>
                                            <p className="text-black text-sm font-inter font-bold tracking-normal leading-none pt-2">Selected Color: <span className="ml-2 rounded-full font-light" style={{backgroundColor: item.color}}>{item.color}</span></p>
                                            <p className="text-black text-sm font-inter font-bold tracking-normal leading-none pt-2">Amount: <span className="ml-2 rounded-full font-light">{item.amount}</span></p>
                                            <p className="text-black text-sm font-inter font-bold tracking-normal leading-none pt-2">Single Item Price: <span className="ml-2 rounded-full font-light">{item.price}$</span></p>
                                            <p className="text-black text-sm font-inter font-bold tracking-normal leading-none pt-2">Total Price: <span className="ml-2 rounded-full font-light">{item.totalPrice}$</span></p>

                                            <div className="pt-4">
                                                <Tooltip content="Remove from the cart" placement="bottom">
                                                    <Button size="sm" color="red" ripple={true} variant="filled" onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </DialogBody>
                    <DialogFooter className="flex justify-start items-center">
                        <p className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                            Total Price of All Products: <span>{totalPrice}$</span>
                        </p>
                    </DialogFooter>
                </Dialog>
            </Fragment>) : (
                 <Fragment>
                    <Dialog
                    className="border-0 outline-0"
                    open={openModal}
                    handler={() => setOpen(false)}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                    >
                    <DialogHeader>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        Shopping Bag
                    </DialogHeader>
                    <DialogBody divider>
                        <div>
                            <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">Your bag is empty</h1>
                            <p className="text-black text-base font-inter tracking-normal leading-none">Add some product</p>
                        </div>
                    </DialogBody>
                    </Dialog>
               </Fragment>
            )
        }
    </div>
  )
}

export default Cart