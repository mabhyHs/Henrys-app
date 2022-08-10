import React, { Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { BiCheckCircle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { GiPartyPopper } from 'react-icons/gi';

import './EmployeeOrderReady.css';

function EmployeeOrderReady() {
  const orders = useSelector((state) => state.orders);

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
            </tr>
          </thead>
          <tbody>
            {!orders.length && (
              <tr>
                <td colSpan={6} className="pt-5 pb-5">
                  <h2>
                    <GiPartyPopper className="giPartyPopper" /> ¡Felicitaciones!
                    <GiPartyPopper className="giPartyPopper" />
                  </h2>
                  <p>Todos los pedidos fueron entregados exitosamente.</p>
                </td>
              </tr>
            )}
            {orders &&
              orders?.map((ord, i) => (
                <Fragment key={i}>
                  {ord.status === 'Listo' && (
                    <tr>
                      <td>{ord.createdAt}</td>
                      <td>
                        {ord.customer[0].firstName +
                          ' ' +
                          ord.customer[0].lastName}
                      </td>
                      <td>
                        <ul className="employee__ul">
                          {ord.data.additional_info.items &&
                            ord.data.additional_info.items.map((item, i) => (
                              <li key={i}>
                                <span className="employee__li__span">
                                  {item.title}
                                </span>
                                <br />
                                Cantidad: {item.quantity}
                                <hr />
                              </li>
                            ))}
                        </ul>
                      </td>
                      <td>
                        {ord.data.metadata.note ? ord.data.metadata.note : ''}
                      </td>
                      <td>
                        $ {ord.data.transaction_details.total_paid_amount}
                      </td>
                      <td>{ord.employee ? ord.employee : ''}</td>
                    </tr>
                  )}
                </Fragment>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default EmployeeOrderReady;
