import styled from 'styled-components';
import { Props } from '.';

export const Card = styled.div<Props>`
  color: ${props => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  padding: 8px;
  border: 1px solid ${props => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${props => (props.ativo ? '#fff' : '#fcfcfc')};
  border-radius: 8px;
`;
export const Contador = styled.div`
  font-weight: bold;
  font-size: 25px;
  display: block;
`;
export const Label = styled.div`
  font-size: 14px;
`;
