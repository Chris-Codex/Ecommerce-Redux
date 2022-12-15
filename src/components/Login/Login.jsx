import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { Button, Input } from "@material-tailwind/react"
import { useState } from 'react';

  const initialState = {
    email: "",
    password: "",
    image: ""
  }

const Login = () => {
    const [values, setValues] = useState(initialState)

    console.log("VALUE", values)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }


  return (
    <div className='grid grid-cols-1 justify-items-center items-center h-screen'>
        <Card className="w-96">
            <CardHeader
                variant="gradient"
                color="blue"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                Sign In
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
                <Input label="Email" size="lg" name='email' type="text" onChange={handleChange} />
                <Input label="Password" size="lg" type="password" name='password' onChange={handleChange} />
                <Input label="Image URL address" type="text" name='image' size="lg" onChange={handleChange} />
                <div className="-ml-2.5">
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth>
                Sign In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                    Image is optional
                </Typography>
            </CardFooter>
     </Card>
    </div>
  )
}

export default Login