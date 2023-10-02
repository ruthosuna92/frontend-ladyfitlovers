import * as Yup from 'yup';

const CreateAcountSchema = Yup.object().shape({
    name: Yup.string().required('Nombre es requerido'),
    surname: Yup.string().required('Apellido es requerido'),
    address: Yup.string().required('Dirección es requerida'),
    phone: Yup.string().required('Teléfono es requerido'),
    email: Yup.string().email('Email inválido').required('Email es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
    // confirmPassword: Yup.string().required('Confirmar contraseña es requerida'),

});

export default CreateAcountSchema;