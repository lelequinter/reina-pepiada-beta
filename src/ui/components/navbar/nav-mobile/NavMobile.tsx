import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
// Iconos
import {
  BsShop,
  BsBag,
  BsImage,
  BsInfoCircle,
  BsChatDots,
} from "react-icons/bs";

import { Colors } from "../../../../shared/styled/colors";

export const NavMobile = () => {
  return (
    <Wrapper>
      <MobileMenu>
        <NavItem>
          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""} `}
            to="/home"
          >
            <Icon>
              <BsShop />
            </Icon>
            <Text>Inicio</Text>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""} `}
            to="/products"
          >
            <Icon>
              <BsBag />
            </Icon>
            <Text>Productos</Text>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""} `}
            to="/gallery"
          >
            <Icon>
              <BsImage />
            </Icon>
            <Text>Galeria</Text>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""} `}
            to="/about"
          >
            <Icon>
              <BsInfoCircle />
            </Icon>
            <Text>Sobre mi</Text>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""} `}
            to="/contact"
          >
            <Icon>
              <BsChatDots />
            </Icon>
            <Text>Contacto</Text>
          </NavLink>
        </NavItem>
        <Indicator />
      </MobileMenu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${Colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  border: 1px solid ${Colors.gray};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const MobileMenu = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  margin: 5px 0;
  width: 100%;

  .active span {
    transform: translateY(-35px);
    svg {
      color: ${Colors.white};
    }
  }

  .active p {
    opacity: 1;
    transform: translateY(5px);
  }
`;

const NavItem = styled.li`
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;

  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
    color: ${Colors.black};
  }
`;

const Icon = styled.span`
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5rem;
  text-align: center;
  transition: 0.5s;
  color: ${Colors.dark_gray};
`;

const Text = styled.p`
  position: absolute;
  color: ${Colors.dark_gray};
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
`;

const Indicator = styled.div`
  position: absolute;
  top: -35px;
  width: 65px;
  height: 65px;
  background-color: ${Colors.primary};
  border-radius: 50%;
  border: 6px solid ${Colors.white};
`;
