import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../../shared/styled/colors";

export const Menu = () => {
  return (
    <StyledMenu>
      <NavItem>
        <NavLink
          className={({ isActive }) =>
            `nav-link home ${isActive ? "active" : ""} `
          }
          to="/home"
        >
          Inicio
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={({ isActive }) =>
            `nav-link products ${isActive ? "active" : ""} `
          }
          to="/products"
        >
          Productos
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={({ isActive }) =>
            `nav-link gallery ${isActive ? "active" : ""} `
          }
          to="/gallery"
        >
          Galeria
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={({ isActive }) =>
            `nav-link about ${isActive ? "active" : ""} `
          }
          to="/about"
        >
          Sobre nosotros
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={({ isActive }) =>
            `nav-link contact ${isActive ? "active" : ""} `
          }
          to="/contact"
        >
          Contacto
        </NavLink>
      </NavItem>
    </StyledMenu>
  );
};

//>>>>StyledComponents<<<<\\

const StyledMenu = styled.ul`
  display: flex;
  height: 30px;
  gap: 20px;
  list-style-type: none;
  margin: 5px;
  padding: 0;

  @media (max-width: 992px) {
    display: none;
  }
`;

const NavItem = styled.li`
  .active {
    background-color: var(--my-primary);
    border-radius: 50px;
    color: ${Colors.white};
    padding: 3px 10px;
    transition: flex 0.5s ease-in-out;
    -webkit-transition: all 200ms ease-in-out;
  }

  a {
    padding: 3px 10px;
    font-size: 1.2rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.black};
    &:link,
    &:active {
      color: ${Colors.black};
      text-decoration: none;
    }
  }
`;
