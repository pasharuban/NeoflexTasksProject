import React from 'react';
import styled from 'styled-components';

import ButtonElement from '../../../../components/ButtonElement/ButtonElement';

const FormButton = styled(ButtonElement)`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 34px;
`;

const FormButtons: React.FC = () => {
  return (
    <Container>
      <FormButton typeOfButton="notFilled" width="82px">
        Cancel
      </FormButton>
      <FormButton typeOfButton="filledGreen" width="82px">
        Done
      </FormButton>
      <FormButton typeOfButton="filledPink" width="82px">
        Decline
      </FormButton>
    </Container>
  );
};

export default FormButtons;
