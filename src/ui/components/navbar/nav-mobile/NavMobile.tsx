import styled from "styled-components";
import { NavLink } from "react-router-dom";
// Context
import { useContext } from "react";
import { NavRoutesContext } from "../../../context";
// Iconos
import { BsShop, BsBag, BsImage, BsInfoCircle, BsChat } from "react-icons/bs";
// Colors
import { Colors } from "../../../../shared/styled/colors";

export const NavMobile = () => {
  const { currentUrl, setCurrentUrl } = useContext(NavRoutesContext) as any;

  return (
    <Wrapper>
      <MobileMenu>
        <NavItem
          onClick={() => setCurrentUrl("home")}
          className={`${currentUrl === "home" ? "active" : ""}`}
        >
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
        <NavItem
          onClick={() => setCurrentUrl("products")}
          className={`${currentUrl === "products" ? "active" : ""}`}
        >
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
        <NavItem
          onClick={() => setCurrentUrl("gallery")}
          className={`${currentUrl === "gallery" ? "active" : ""}`}
        >
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
        <NavItem
          onClick={() => setCurrentUrl("about")}
          className={`${currentUrl === "about" ? "active" : ""}`}
        >
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
        <NavItem
          onClick={() => setCurrentUrl("contact")}
          className={`${currentUrl === "contact" ? "active" : ""}`}
        >
          <NavLink
            className={({ isActive }) => `${isActive ? "active" : ""} `}
            to="/contact"
          >
            <Icon>
              <BsChat />
            </Icon>
            <Text>Contacto</Text>
          </NavLink>
        </NavItem>
        <Indicator className="indicator" />
      </MobileMenu>
    </Wrapper>
  );
};

//>>>>StyledComponents<<<<\\

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

  ul li .first a .active .indicator {
    transform: translateX(30px);
  }

  ul li:nth-child(2).active ~ .indicator {
    transform: translateX(40px);
  }
  ul li:nth-child(2).active ~ .indicator {
    transform: translateX(40px);
  }
  ul li:nth-child(2).active ~ .indicator {
    transform: translateX(cal(66px * 3));
  }
  ul li:nth-child(2).active ~ .indicator {
    transform: translateX(40px);
  }
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
    transform: translateY(10px);
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
  top: -30px;
  width: 66px;
  height: 66px;
  background-color: ${Colors.primary};
  border-radius: 50%;

  /* &:before {
    content: "";
    z-index: -100;
    position: absolute;
    top: 44%;
    left: -5px;
    width: 74px;
    height: 42px;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.gray};
    border-top: none;
    border-bottom-left-radius: 42px;
    border-bottom-right-radius: 42px;
  } */
`;
