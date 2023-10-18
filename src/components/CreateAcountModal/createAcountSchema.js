import * as Yup from 'yup';

export const CreateAcountSchema = Yup.object().shape({
    name: Yup.string().required('Nombre es requerido'),
    surname: Yup.string().required('Apellido es requerido'),
    // address: Yup.string().required('Dirección es requerida'),
    calle: Yup.string().required("calle obligatoria"),
    numero: Yup.number().required("numero obligatorio"),
    dpto: Yup.string().notRequired(),
    entreCalles: Yup.string().required("entreCalles obligatorio"),
    localidad: Yup.string().required("localidad obligatoria"),
    codigoPostal: Yup.number().required("codigo obligatorio"),
    provincia: Yup.string().required("provincia obligatoria"),
    phone: Yup.string().notRequired(),
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
