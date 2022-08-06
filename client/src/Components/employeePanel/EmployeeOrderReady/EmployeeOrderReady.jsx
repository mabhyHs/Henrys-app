import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { CardChecklist } from 'react-bootstrap-icons';
import { BiCheckCircle } from 'react-icons/bi';

import './EmployeeOrderReady.css';

function EmployeeOrderReady() {
  return (
    <div className="employee__pending__container mt-5">
      <h2>
        <BiCheckCircle className="employee__checkList" />
        Gestionar pedidos Listos
      </h2>
      <hr />
      <Container>
        <Table bordered hover responsive>
          <thead className="employee__thead">
            <tr>
              <th>Fecha y Hora</th>
              <th>Cliente</th>
              <th>Productos</th>
              <th>Nota</th>
              <th>Total</th>
              <th>Empleado</th>

              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>06/08/2022 - 17:41hs</td>
              <td>Lara Gomez</td>
              <td>
                <ul className="employee__ul">
                  <li>
                    <span className="employee__li__span"> Combo Pareja</span>
                    <br />
                    Cantidad: 2
                    <hr />
                  </li>
                  <li>
                    <span className="employee__li__span"> Bacon XL</span>
                    <br />
                    Cantidad: 1
                    <hr />
                  </li>
                </ul>
              </td>
              <td>Sin ketchup Lorem ipsum dolor sit amet.</td>
              <td>$ 1200.00</td>
              <td>Roberto</td>

              <td>
                <Button>Volver a pendiente</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default EmployeeOrderReady;
