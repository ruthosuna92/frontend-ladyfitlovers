import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EditProfile = () => {
  const infouser = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    provincia: '',
    address: '',
  });

  useEffect(() => {
    // Cuando se actualice la información de usuario (infouser), actualiza el estado local (formData)
    if (infouser) {
      setFormData({
        name: infouser.name || '',
        surname: infouser.surname || '',
        email: infouser.email || '',
        phone: infouser.phone || '',
        provincia: infouser.provincia || '',
        address: infouser.address || '',
      });
    }
  }, [infouser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        type="text"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        placeholder="Apellido"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type=''
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Teléfono"
      />
      <input
        type="text"
        name="provincia"
        value={formData.provincia}
        onChange={handleChange}
        placeholder="Provincia"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Dirección"
      />
    </div>
  );
};

export default EditProfile;
