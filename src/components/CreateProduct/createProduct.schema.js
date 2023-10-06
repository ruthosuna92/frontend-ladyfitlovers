import * as Yup from 'yup';

const CreateProductSchema = Yup.object().shape({
    name: Yup.string().required('Nombre es requerido'),
    price: Yup.number().required('Precio es requerido'),
    image: Yup.string().required('Imagen es requerida'),
    unitSold: Yup.number().required('Unidades vendidas es requerido'),
    priceOnSale: Yup.number(),
    stock: Yup.array().of(
        Yup.object().shape({
            color: Yup.string().required('Color es requerido'),
            sizeAndQuantity: Yup.array().of(
                Yup.object().shape({
                    size: Yup.string().required('Talla es requerida'),
                    quantity: Yup.number().required('Cantidad es requerida'),
                })
            )
        })
    ),
    // category: Yup.string().required('Categoria es requerida'),
});

export default CreateProductSchema;