import React from 'react';
import Button from 'react-bootstrap/Button';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import './AdminPagination.css';
function AdminPagination() {
  return (
    <div>
      <>
        <Button variant="secondary">
          <CaretLeftFill />
        </Button>
      </>

      <>
        <Button variant="secondary">
          <CaretRightFill />
        </Button>
      </>
    </div>
  );
}

export default AdminPagination;
