import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, redirect } from "react-router-dom";
import { BASKET_ROUTE, CREATE_ROUTE, PRODUCTS_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";


const NavBar = observer(() => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" >
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>OnlineShop</NavLink>
        <Nav className="ml-auto" style={{ color: 'white' }}>
          <Button
            variant={"outline-light"}
            onClick={() => navigate(CREATE_ROUTE)}
          >
            Создать товар
          </Button>
        </Nav>
        <Nav className="ml-auto" style={{ color: 'white' }}>
          <Button variant={"outline-light"} onClick={() => navigate(PRODUCTS_ROUTE)}>Список продуктов</Button>
        </Nav>
        <Nav className="ml-auto" style={{ color: 'white' }}>
          <Button variant={"outline-light"} onClick={() => navigate(BASKET_ROUTE)}>Корзина</Button>
        </Nav>
      </Container>
    </Navbar>

  );
});

export default NavBar;
