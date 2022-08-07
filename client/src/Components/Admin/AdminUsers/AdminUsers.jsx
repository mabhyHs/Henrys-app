import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from '../../../Redux/actions/actions';
import {
  PersonCheckFill,
  PersonXFill,
  PencilSquare,
} from 'react-bootstrap-icons';

import './AdminUsers.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function AdminUsers() {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1)
  const [rol, setRol] = useState('')
  const [id, setId] = useState('')
  const [filter, setFilter] = useState('')
  function handleClose(){
    setShow(false)
    if(rol !== ''){
      submitRole(id)
    }
  }
  function handleShow(id){
    setShow(true);
    setId(id)
  }
  const token = JSON.parse(window.localStorage.getItem("user")).token
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUser(token))
  }, [dispatch, token])

  function handlePage(e, page, filter){
    let query = ''
    let role = ''
    if(filter !== '/'){
      role = '&rol=' + filter
      if(filter === 'active'){
        role = '&active=true'
      }
      if(filter === 'inactive'){
        role = '&active=false'
      }
    }
    if(e.target.name === 'next'){
      const newPage = page + 1
      if(page === users.pages) return
      setPage(newPage)
      query ='?pag=' + newPage + role
      dispatch(getUser(token, query))
    }
    else if(e.target.name === 'prev'){
      const newPage = page - 1
      if(page === 1) return
      setPage(newPage)
       query = '?pag=' + newPage + role
      dispatch(getUser(token, query))
  }
  }

  function handleRole(e){
    setRol(e.target.value)
  }

  async function submitRole(id){
    const obj = {id, role: rol}
    try {
      const json = await axios.put('/users/', obj , {
        headers:{
          'auth-token': token
        }
      })
      setRol('')
      setId('')
      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: 'Exito!',
        text: 'Se ha podido cambiar el rol con exito!',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659301858/success-henrys_nlrgo0.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
      setTimeout(function(){
        window.location.reload()
      }, 3000)
    } catch (error) {
      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: 'Error',
        text: 'Algo salio mal..',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
    }
  }

  function filterUsers(e){
    const name = e.target.name
    let query = '?rol=' + name
    if(name === '/') query = ''
    if(name === 'active'){
      query = '?active=true'
    }
    if(name === 'inactive'){
      query = '?active=false'
    }
    setPage(1)
    setFilter(name)
   dispatch(getUser(token, query))
  }

  async function handleDelete(id){
    try{
      await axios.delete('/users/' + id, {
        headers:{
          'auth-token': token
        }
      })

      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: 'Exito!',
        text: 'Se ha podido desactivar el usuario!',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659301858/success-henrys_nlrgo0.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
      setTimeout(function(){
        window.location.reload()
      }, 3000)
    }catch(error){
      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: 'Error',
        text: 'Algo salio mal..',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
    }
  }

  async function handleActive(id){
    const obj = {}
    try{
      await axios.post('/users/' + id, obj, {
        headers:{
          'auth-token': token
        }
      })

      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: 'Exito!',
        text: 'Se ha podido desactivar el usuario!',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659301858/success-henrys_nlrgo0.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
      setTimeout(function(){
        window.location.reload()
      }, 3000)
    }catch(error){
      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: 'Error',
        text: 'Algo salio mal..',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
    }
  } 

  return (
    <Container>
      <div className="adminUsers__container">
        <h2>Gestionar tus usuarios</h2>
        <hr />
        <div className="filters__btn__container mb-3">
          <p>Filtrar Usuarios:</p>
          <h3>{rol}</h3>
          <ButtonGroup
            aria-label="Filter Buttons"
            className="me-2 filter__btn"
            size="sm"
          >
            <Button className="filter__btn" name='active' onClick={(e) => filterUsers(e)}>Activos</Button>
            <Button className="filter__btn" name='inactive' onClick={(e) => filterUsers(e)}>Inactivos</Button>
            <Button className="filter__btn" name='admin' onClick={(e) => filterUsers(e)}>Administradores</Button>
            <Button className="filter__btn" name='customer' onClick={(e) => filterUsers(e)}>Usuarios</Button>
            <Button className="filter__btn"name='employee' onClick={(e) => filterUsers(e)}>Empleados</Button>
            <Button className="filter__btn"name='/' onClick={(e)=> filterUsers(e)}>Todos</Button>
          </ButtonGroup>
        </div>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Nombre y Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.rows  &&(
              users.rows.map((user) => {
                return(
              
            <tr key={user.id}>
              <td>{user.firstName}  {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="adminUser__td__btns">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleShow(user.id)}
                >
                  <PencilSquare />
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modificar Rol</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Select
                      aria-label="selectRol"
                      defaultValue="Selecionar rol"
                      onChange={(e) => handleRole(e)}
                    >
                      <option hidden>Selecionar</option>
                      <option value="admin">ADMIN</option>
                      <option value="employee">EMPLEADO</option>
                      <option value="customer">USUARIO</option>
                    </Form.Select>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={() => handleClose()}>
                      Confirmar
                    </Button>
                  </Modal.Footer>
                </Modal>
                  {user.deletedAt?(
                <Button variant="outline-success" size="sm" onClick={() => handleActive(user.id)}>
                  <PersonCheckFill />
                </Button>
                   ): 
                <Button variant="outline-danger" size="sm" onClick={() => handleDelete(user.id)}>
                  <PersonXFill />
                </Button>
                  }
              </td>
            </tr>
                )
              })
            )}
          </tbody>
        </Table>
        <div>
          <span>Pag {users.pag} de {users.pages}</span>
          <button name='next' onClick={(e) => handlePage(e, page, filter)}>Next</button>
          <button name='prev' onClick={(e) => handlePage(e, page, filter)}>Prev</button>
          </div>
        <button onClick={() => console.log(users)}>prueba</button>
      </div>
    </Container>
  );
}

export default AdminUsers;
