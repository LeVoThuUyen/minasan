import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyles = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 10px;
  border-bottom: solid gray 1px;
  background-color: #242526;
`;

export const AppName = styled.h2`
  &:hover {
    color: blue;
    cursor: pointer; 
  }
`;



export const LogoContainer = styled(Link)`
  margin: 10px;
`;

export const OptionsContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Left = styled.div`
display: flex;
width: 29%;
align-items: center;
justify-content: space-between;
`; 
