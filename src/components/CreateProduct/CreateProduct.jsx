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
console.log(CreateProductSchema)
  return (
    <div className='createProductContainer'>
        <h1>CREAR PRODUCTO</h1>
        <Formik 
        initialValues={initialValues}
        validationSchema={CreateProductSchema}
        onSubmit={() => {} }
        >
           {({ errors, touched }) => (
           <Form><CreateProductForm errors={errors}/></Form> 
            )}  
        </Formik>
    </div>
  )
}

export default CreateProduct 