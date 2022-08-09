import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { MdPendingActions } from 'react-icons/md';
import './EmployeePendingOrder.css';

function EmployeePendingOrder() {

  const orders = useSelector(state => state.orders.rows);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(orders)

  return (
    <div className="employee__pending__container mt-5">
      <h2>
        <MdPendingActions className="employee__cardList" />
        Gestionar pedidos Pendientes
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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders?.map((ord, i) => 
                
                <tr key={i}>
              <td>{ord.createdAt}</td>
              <td>{ord.customer[0].firstName + " " + ord.customer[0].lastName}</td>
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
              <td>
                <Button variant="primary" onClick={handleShow}>
                  Listo
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Confirmar Estado</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    ¿Estás seguro de pasar éste pedido se encuentra listo?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary">Confirmar</Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
                
                )}            
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default EmployeePendingOrder;
