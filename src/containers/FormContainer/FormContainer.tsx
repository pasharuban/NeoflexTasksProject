import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 400px;
  border: 2px solid red;
`;

const FormContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FormContainer;
