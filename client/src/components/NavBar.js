import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { BASKET_ROUTE, PRODUCTS_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import CreateProduct from './modals/CreateProduct';


const NavBar = observer(() => {
  const navigate = useNavigate();

  const [createProductModalVisible, setCreateProductModalVisible] = useState(false);


  return (
    <Navbar bg="dark" className='flex-wrap' >
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>OnlineShop</NavLink>
        <Nav className="ml-auto mb-2" style={{ color: 'white' }}>
          <Button
            variant={"outline-light"}
            onClick={() => setCreateProductModalVisible(true)}
          >
            Создать товар
          </Button>
        </Nav>
        <Nav className="ml-auto mb-2" style={{ color: 'white' }}>
          <Button variant={"outline-light"} onClick={() => navigate(PRODUCTS_ROUTE)}>Список продуктов</Button>
        </Nav>
        <Nav className="ml-auto  mb-2" style={{ color: 'white' }}>
          <Button variant={"outline-light"} onClick={() => navigate(BASKET_ROUTE)}>Корзина</Button>
        </Nav>
      </Container>
      <CreateProduct show={createProductModalVisible} onHide={() => setCreateProductModalVisible(false)} />
    </Navbar>
  );
});

export default NavBar;
