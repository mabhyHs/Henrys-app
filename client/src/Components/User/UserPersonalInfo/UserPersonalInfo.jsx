import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { actualizarDatosUsuario, updatePassword } from '../../../Redux/actions/actions';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import './UserPersonalInfo.css';
import axios from 'axios';

function UserPersonalInfo() {
  // const id = JSON.parse(window.localStorage.getItem("user")).id
  // const token = JSON.parse(window.localStorage.getItem("user")).token
  // const email = JSON.parse(window.localStorage.getItem("user")).email
  // const firstName = JSON.parse(window.localStorage.getItem("user")).firstName
  // const lastName = JSON.parse(window.localStorage.getItem("user")).lastName

  const id = '123'
  const token = '456'
  const email = 'kevinstevenzeasuarez@gmail.com'
  const firstName = 'Kevin'
  const lastName = 'Zea'

  const [input, setInput] = useState({firstName, lastName, email})
  const [password, setPassword] = useState({})
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

  function handleSubmit(e, input){
    e.preventDefault()
    if(Object.keys(input).length === 0){
      alert('por favor llene los campos de los datos que desea actualizar')
      return
    }
    
    dispatch(actualizarDatosUsuario(input, id, token))
    setInput({firstName, lastName, email})
    window.location.reload()
    alert('sus datos se han actualizado correctamente')
  }
  function clearData(){
    console.log(input)
    setInput({firstName, lastName, email})
    window.location.reload()
    
  }

  function handlePassword(e){
    setPassword({...password, [e.target.name]: e.target.value})
    setError(validate({...password, [e.target.name]: e.target.value}))
  }

  async function submitPassword(password){
    if(Object.keys(password).length === 0){
      alert('por favor llene los campos de los datos que desea actualizar')
      return
    }
    const obj = {passwordOld: password.beforePassword, passwordNew: password.confirm, email }

    try {
      const json = await axios.put('/changePassword/', obj, {
        headers:{
          'auth-token': token
        }
      });
      if(json.status === 201){
        Swal.fire({
          customClass: {
            confirmButton: 'confirmBtnSwal',
          },
          title: 'Opss...',
          text: 'Se ha podido cambiar la contraseña!',
          imageUrl:
            'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: 'Logo henrys',
        });
      }
      else{
        Swal.fire({
          customClass: {
            confirmButton: 'confirmBtnSwal',
          },
          title: 'Opss...',
          text: 'por el else',
          imageUrl:
            'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: 'Logo henrys',
        });
      }
      
    } catch (error) {
      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: 'Opss...',
        text: 'No se ha podido cambiar la contraseña!',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
    }
    
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
            <Button variant="primary" type="Submit" disable={Object.keys(error).length !== 0} onClick={(e) => handleSubmit(e, input)}>
              Actualizar Datos
            </Button>
          </div>
          <hr />
          <Row className="mb-3 mt-5">
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Control placeholder="Nombre*" name='firstName' onChange={(e) => handleChange(e)} value={input.firstName}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridApellido">
              <Form.Control placeholder="Apellido*" name='lastName' onChange={(e) => handleChange(e)} value={input.lastName}/>
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
              <Form.Control type="password" placeholder="Antigua Contraseña*" name='beforePassword' onChange={(e) => handlePassword(e)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="Nueva Contraseña*" name='password' onChange={(e) => handlePassword(e)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridConfirPassword">
              <Form.Control type="password" placeholder="Confirmar*" name='confirm' onChange={(e) => handlePassword(e)}/>
            </Form.Group>
            {error.password &&(
              <p>{error.password}</p>
            )}
            <Button variant="primary" type="Submit" disable={Object.keys(error).length !== 0} onClick={() => submitPassword(password)}>
              Actualizar Contraseña
            </Button>
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
