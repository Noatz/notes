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
  padding: 1%;
`;

export const BlockButtons = styled.button`
  border: 1px solid #000;
  outline: none;
  background-color: #ccc;
  font-size: 18px;
  :active {
    background-color: #29B6F6;
  }
`;