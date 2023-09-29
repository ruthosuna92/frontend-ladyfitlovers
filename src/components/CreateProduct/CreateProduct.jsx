import React from 'react'
import { Formik, Form } from 'formik'
import CreateProductForm from './CreateProductForm'
import CreateProductSchema from './createProduct.schema'
import './createProduct.css'

const CreateProduct = () => {
const initialValues = {
    name: '',
    price: '',
    priceOnSale: '',
    unitSold: 0,
    image: '',
    category: '',
    stock: [],
}
console.log(initialValues)
  return (
    <div className='createProductContainer'>
        <h1>CREAR PRODUCTO</h1>
        <Formik 
        initialValues={initialValues}
        validationSchema={CreateProductSchema}
        onSubmit={() => {} }
        >
           <Form><CreateProductForm/></Form> 
        </Formik>
    </div>
  )
}

export default CreateProduct 