import React from 'react';
import { Link } from 'react-router-dom';
// import foto1 from '../../assets/img/1.jpg';
// import foto2 from '../../assets/img/2.jpg';
import foto3 from '../../assets/img/3.jpg';
import './seccion.css';


const Seccion = () => {
  return (
    <div className='seccionContainer'>
        {/* <Link to='/products'> <img src={foto1} alt='foto1' className='foto1' /></Link>
        <Link to='/products'> <img src={foto2} alt='foto2' className='foto2' /></Link> */}
        <Link to='/products'> <img src={foto3} alt='foto3' className='foto3' /></Link>
    </div>
  )
}

export default Seccion