import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Register.css';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
    user:'',
  });


  const handleInput = (event) => { //recopilar informacion de formulario
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => { // enviar informacion formulario
    event.preventDefault();
    console.log(form);
    props.history.push('/');
  };

  return (
    <>
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              className='input'
              type='text'
              placeholder='Nombre'
              onChange={handleInput}
            />
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <select name="user" onChange={handleInput}>
              <option value="vendedor">Vendedor</option> 
              <option value="administrador">Administrador</option> 
            </select>
            {/* eslint-disable-next-line react/button-has-type */}
            <button className='button' type='submit'>Registrarme</button>
          </form>
          <Link to='/login'>Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};


export default Register;