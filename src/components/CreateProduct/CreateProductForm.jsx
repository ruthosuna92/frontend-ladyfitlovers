import React from 'react'
import { Field, useFormikContext} from 'formik'
import { Input } from 'antd'
import './createProductForm.css'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

const CreateProductForm = () => {
    const { values } = useFormikContext()
    const handleSubmit = () => {
        console.log(values)
    }


    return (
        <div className='containerForm'>
            <Field id='name' name='name'>
                {({ field, form, meta , error }) => {
                    return (
                        <>
                        <Input {...field} placeholder='Nombre' />
                        </>
                        
                    )
                }}
            </Field>
            <div className='inputsContainer'>
                <Field id='price' name='price'>
                    {({ field, form, meta }) => {
                        return (
                            <Input {...field} placeholder='Precio' />
                        )
                    }}
                </Field>
                <Field id='priceOnSale' name='priceOnSale'>
                    {({ field, form, meta }) => {
                        return (
                            <Input {...field} placeholder='Precio en oferta' />
                        )
                    }}
                </Field>
            </div>
            <div  className='inputsContainer'>
                <Field id='unitSold' name='unitSold'>
                    {({ field, form, meta }) => {
                        return (
                            <Input {...field} placeholder='Unidades vendidas' />
                        )
                    }}
                </Field>
                <Field id='category' name='category'>
                    {({ field, form, meta }) => {
                        return (
                            <Input {...field} placeholder='Categoría' />
                        )
                    }}
                </Field>
            </div>
            <Field id='image' name='image'>
                {({ field, form, meta }) => {
                    return (
                        <Input {...field} placeholder='Imagen' />
                    )
                }}
            </Field>
            <Field id='stock' name='stock'>
                {({ field, form, meta }) => {
                    return (
                        <Input {...field} placeholder='Stock' />
                    )
                }}
            </Field>
            <ButtonPrimary title= 'Crear producto' onClick={handleSubmit}/>
        </div>
    )
}

export default CreateProductForm