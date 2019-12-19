import styled from 'styled-components';

export const MainNav = styled.nav`
  background-color: #ccc;
  width: 20%;
  height: 100%;
`;

export const Header = styled.header`
  text-align: center;
  padding: 4%;
  background-color: grey;
`;

export const Hr = styled.hr`
  margin: 0;
  border: none;
  background-color: black;
  height: .3%
`;

export const CardButton = styled.button`
  border: none; // resets defaults
  outline: none; // reset defaults when active
  font-size: 20px;
  font-weight: 500;
  background-color: inherit;
  padding: 10%;
  width: 100%;
  :hover {
    background-color: white;
  }
  :active {
    background-color: #29B6F6;
  }
`;