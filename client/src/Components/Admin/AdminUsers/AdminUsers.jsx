import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  PersonCheckFill,
  PersonXFill,
  PencilSquare,
} from 'react-bootstrap-icons';

import './AdminUsers.css';
import { getUsers } from '../../../Redux/actions/actions';

function AdminUsers() {
  const token = JSON.parse(window.localStorage.getItem("user")).token
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  useEffect(() => {
    dispatch(getUsers(token))
  }, [dispatch, getUsers])

  function handleConfirmed(){
    
  }
  return (
    <Container>
      <div className="adminUsers__container">
        <h2>Gestionar tus usuarios</h2>
        <hr />
        <div className="filters__btn__container mb-3">
          <p>Filtrar Usuarios:</p>

          <ButtonGroup
            aria-label="Filter Buttons"
            className="me-2 filter__btn"
            size="sm"
          >
            <Button className="filter__btn">Activos</Button>
            <Button className="filter__btn">Inactivos</Button>
            <Button className="filter__btn">Rol</Button>
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
            {users.length > 0&&(
              users.map((user) => {
                return(
            <tr key={user.id}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="adminUser__td__btns">
                <Button variant="outline-secondary" size="sm">
                  <PencilSquare />
                </Button>
                {!user.isConfirmed ?(
                <Button variant="outline-success" size="sm">
                  <PersonCheckFill />
                </Button>
                ):
                <Button variant="outline-danger" size="sm">
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
        <button onClick={() => console.log(users)}>Prueba</button>
      </div>
    </Container>
  );
}

export default AdminUsers;
