import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import style from "./Contac.module.css"
const Contac = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const validateForm = (input) => {
        const newErrors = {
            name: "",
            email: "",
            message: "",
        };
        if (input.name === "") {
            newErrors.name = "El nombre no puede estar vacío.";
        }
        if (input.email === "") {
            newErrors.email = "El correo electrónico es obligatorio..";
        }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.email)) {
            newErrors.email = "El correo electrónico no es válido.";
        }
        if (input.message === '') {
            newErrors.message = 'El mensaje es obligatorio.';
        } else if (input.message && input.message.length < 20) {
            newErrors.message = 'El mensaje debe tener al menos 20 caracteres.';
        }
        setErrors({
            ...errors,
            name: newErrors.name,
            email: newErrors.email,
            message: newErrors.message
        });
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateForm({
            [name]: value
        });
    };
    const handleSubmit = () => {
        if (formData.name !== "" && formData.email !== "" && formData.message !== "") {
            console.log('Datos del formulario:', formData);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        } else {
            console.log("error")
        }
    };
    return (
        <div className={style.continer}>
        <div className={style.continercontac}>
            <h1>CONTACTO</h1>
            <div >
                <div className={style.message}>
                    <label className={style.editinput2}>
                        
                        <Input
                            placeholder='Nombre'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <p className={style.texterror}>{errors.name}</p>
                </div>
                <div className={style.twodata}>
                <div className={style.message1}>
                    <label className={style.editinput}>
                        <Input
                        placeholder='email'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <p className={style.texterror}>{errors.email}</p>
                </div>

                <div className={style.message}>
                    <label className={style.editinput}>
                        
                        <Input
                            placeholder='Teléfono'
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                </div>
                <div className={style.message}>
                    <label className={style.editinput2}>
                        
                        <Input
                            placeholder='Mensaje'
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </label>
                    <p className={style.texterror}>{errors.message}</p>
                </div>
                <ButtonPrimary title="Enviar" onClick={handleSubmit}/>
            </div>
        </div>
        </div>
    );
};

export default Contac;