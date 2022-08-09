import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { MdPendingActions } from 'react-icons/md';
import './EmployeePendingOrder.css';
import { setStateOrder } from '../../requests';

function EmployeePendingOrder() {

  const session = useSelector(state => state.loginState);
  const orders = useSelector(state => state.orders);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e){
    try {
        const data = {status: "Listo", employee: session.firstName + " " + session.lastName}
        await setStateOrder(e.target.id, data)

    } catch (error) {
        
    } finally{
        handleClose();
    }
  }
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
                    {ord.data.additional_info.items && ord.data.additional_info.items.map((item, i)=> 
                       <li key={i}>
                       <span className="employee__li__span">{item.title}</span>
                       <br />
                       Cantidad: {item.quantity}
                       <hr />
                     </li>)}                  
                </ul>
              </td>
              <td>{ord.data.metadata.note ? ord.data.metadata.note : ""}</td>
              <td>$ {ord.data.transaction_details.total_paid_amount}</td>
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
                    <Button id={ord.purchaseId} onClick={handleSubmit} variant="primary">Confirmar</Button>
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
