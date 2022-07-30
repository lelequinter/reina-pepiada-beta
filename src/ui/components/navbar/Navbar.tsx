import { Link } from "react-router-dom";
import styled from "styled-components";
import { Dropmenu } from "./dropmenu/Dropmenu";
import { Menu } from "./menu/Menu";
import { Colors } from "../../../shared/styled/colors";
import { NavMobile } from "./nav-mobile/NavMobile";

export const Navbar = () => {
  return (
    <>
      <Header>
        <Logo to="/">
          Reina Pepiada
        </Logo>
        <Menu />
      </Header>
      <Dropmenu />
      <NavMobile />
    </>
  );
};

//>>>>StyledComponents<<<<\\

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #cdcdcd;
  box-shadow: 0px 30px 50px rgba(16, 16, 16, 0.02);
  margin-top: 10px;
  position: sticky;
  z-index: 100;

  @media (max-width: 992px) {
    border-bottom: 1px solid #cdcdcd;
  }
`;

const Logo = styled(Link)`
  font-family: Selima;
  font-size: 30px;
  color: ${Colors.primary};
  font-weight: 400;

  &:link,
  &:active {
    color: ${Colors.primary};
    text-decoration: none;
  }
`;
