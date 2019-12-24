import styled from 'styled-components';

export const MainDiv = styled.div`
  text-align: center;
  margin: 2%;
  padding: 1%;
  width: 100%;
`;

export const InputTitle = styled.input`
  border: none;
  width: 95%;
  padding: 1%;
  font-size: 3em;
  outline: none;
  border-bottom-style: solid;
  border-bottom-color: black;
`;

export const BlockButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: stretch;
  padding: 1%;
`;

export const DropDownDiv = styled.div`
  width: 20%;
`;

export const DropDownButton = styled.div`
  border: 1px solid #000;
  outline: none;
  background-color: #ccc;
  padding: 10%;
  overflow: hidden;
  :hover {
    background-color: white;
  }
  :active {
    background-color: #29B6F6;
  }
`;

export const DropDownContent = styled.div`
  display: none;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  // min-width: inherit;
  width: inherit;
  max-width: 15%;
  z-index: 99;
  ${DropDownDiv}:hover & {
    display: flex;
  }
`;