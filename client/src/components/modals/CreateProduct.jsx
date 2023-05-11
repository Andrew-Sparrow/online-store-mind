import React, { useState } from 'react';
import { Button, Form, } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import { createProduct } from "../../http/productAPI";
import { observer } from "mobx-react-lite";


const CreateProduct = observer(({ show, onHide }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);


  const selectFile = e => {
    setFile(e.target.files[0]);
  }

  const addProduct = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', `${ price }`);
    formData.append('img', file);

    createProduct(formData).then(() => onHide());
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить продукт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="mt-3"
            placeholder="Введите название продукта"
          />
          <Form.Control
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите стоимость продукта"
            type="number"
          />
          <Form.Control
            className="mt-3"
            type="file"
            onChange={selectFile}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button
          variant="outline-success"
          onClick={() => {
            addProduct();
            setTitle('');
            setPrice('');
            setFile(null);
          }}>Добавить новый продукт</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateProduct;

