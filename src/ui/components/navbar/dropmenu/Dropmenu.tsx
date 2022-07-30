import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { Colors } from "../../../../shared/styled/colors";

interface Props {
  isOpen: boolean;
}

export const Dropmenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Dropdown isOpen={isOpen ? true : false}>
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
      </Dropdown>

      <Notch
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => {
          setTimeout(() => {
            setIsOpen(false);
          }, 200);
        }}
      >
        <FiMoreHorizontal color={`${Colors.mid_gray}`} size={20} />
      </Notch>
    </Wrapper>
  );
};

//>>>>StyledComponents<<<<\\

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Dropdown = styled.ul<Props>`
  list-style-type: none;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100%;
  height: 142px;
  border: 1px solid ${Colors.gray};
  border-top: none;
  padding: 0 10px;
  padding: 0;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 10px 0;
  margin: 0;
  gap: 0;

  @media (min-width: 992px) {
    display: none;
  }
`;

const Notch = styled.button`
  background-color: #fff;
  width: 100px;
  height: 20px;
  border: 1px solid ${Colors.gray};
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  bottom: -20px;
  @media (min-width: 992px) {
    display: none;
  }
`;

const NavItem = styled.li`
  .active {
    background-color: ${Colors.primary};
    border-radius: 50px;
    color: ${Colors.white};
    padding: 3px 30px;
    transition: flex 0.5s ease-in-out;
    -webkit-transition: all 180ms ease-in-out;
  }

  a {
    padding: 3px 30px;
    color: ${Colors.black};
    font-size: 1.2rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.black};
    &:link,
    &:active {
      color: ${Colors.white};
      text-decoration: none;
    }
  }
`;
