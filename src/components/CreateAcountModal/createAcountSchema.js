import * as Yup from 'yup';

export const CreateAcountSchema = Yup.object().shape({
    name: Yup.string().required('Nombre es requerido'),
    surname: Yup.string().required('Apellido es requerido'),
    // address: Yup.string().required('Dirección es requerida'),
    calle: Yup.string().required('Calle es requerida'),
    numero: Yup.number().required('Número es requerido'),
    dpto: Yup.string().notRequired(),
    entreCalles: Yup.string().required('Entre calles es requerido'),
    localidad: Yup.string().required('Localidad es requerida'),
    codigoPostal: Yup.number().required('Código postal es requerido'),
    provincia: Yup.string().required('Provincia es requerida'),
    phone: Yup.string().required('Teléfono es requerido'),
    email: Yup.string().email('Email inválido').required('Email es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
    // confirmPassword: Yup.string().required('Confirmar contraseña es requerida'),

});
export const UpdateAcountSchema = Yup.object().shape({
    name: Yup.string().required('Nombre es requerido'),
    surname: Yup.string().required('Apellido es requerido'),
    // address: Yup.string().required('Dirección es requerida'),
    calle: Yup.string().notRequired(),
    numero: Yup.number().notRequired(),
    dpto: Yup.string().notRequired(),
    entreCalles: Yup.string().notRequired(),
    localidad: Yup.string().notRequired(),
    codigoPostal: Yup.number().notRequired(),
    provincia: Yup.string().notRequired(),
    phone: Yup.string().required('Teléfono es requerido'),
    email: Yup.string().email('Email inválido').required('Email es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
    // confirmPassword: Yup.string().required('Confirmar contraseña es requerida'),

});



export default {CreateAcountSchema, UpdateAcountSchema}
