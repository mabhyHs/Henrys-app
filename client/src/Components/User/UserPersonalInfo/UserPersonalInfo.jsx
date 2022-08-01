import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { actualizarDatosUsuario } from '../../../Redux/actions/actions';
import { useDispatch } from 'react-redux';

import './UserPersonalInfo.css';

function UserPersonalInfo() {
  const [input, setInput] = useState({})
  const [error, setError] = useState({})
  const dispatch = useDispatch()

  function handleChange(e){
    setInput({...input, [e.target.name]: e.target.value})
    setError(validate({...input, [e.target.name]: e.target.value}))
  }

  function validate(input){
    let error = {}
    if(input.email){
      // eslint-disable-next-line no-useless-escape
      if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email))){
        error.email = 'por favor ingrese un correo electronico valido'
      }
    }
    if(input.password || input.confirm){
      if(input.confirm !== input.password){
        error.password = 'ambos espacios deben tener la misma contraseña por favor verifica que estes escribiendo la misma contraseña'
      }
    }
    return error
  }

  function handleSubmit(input){
    if(Object.keys(input).length === 0){
      alert('por favor llene los campos de los datos que desea actualizar')
      return
    }
    dispatch(actualizarDatosUsuario(input))
  }
  function clearData(){
    console.log(input)
    setInput({})
    window.location.reload()
    
  }
  return (
    <div className="userPersonalInfo__container">
      <Container>
        <h1>Mis Datos</h1>
        <Form className="mb-5">
          <div className="mb-4">
            <Button variant="outline-warning" className="userInfo__btn m-3" onClick={() => clearData()}>
              Cancelar
            </Button>
            <Button variant="primary" type="Submit" disable={Object.keys(error).length !== 0} onClick={() => handleSubmit(input)}>
              Actualizar
            </Button>
          </div>
          <hr />
          <Row className="mb-3 mt-5">
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Control placeholder="Nombre*" name='name' onChange={(e) => handleChange(e)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridApellido">
              <Form.Control placeholder="Apellido*" name='surName' onChange={(e) => handleChange(e)} value={input.surName}/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Control type="email" placeholder="Email*" name='email' onChange={(e) => handleChange(e)} value={input.email}/>
          </Form.Group>
          {error.email &&(
            <p>{error.email}</p>
          )}
          <Row className="mb-5">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="Contraseña*" name='password' onChange={(e) => handleChange(e)} value={input.password}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridConfirPassword">
              <Form.Control type="password" placeholder="Confirmar*" name='confirm' onChange={(e) => handleChange(e)} value={input.confirm}/>
            </Form.Group>
            {error.password &&(
              <p>{error.password}</p>
            )}
          </Row>
          <hr />
          <Button as={Link} to="/userprofiledashboard" variant="primary">
            Volver
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default UserPersonalInfo;
