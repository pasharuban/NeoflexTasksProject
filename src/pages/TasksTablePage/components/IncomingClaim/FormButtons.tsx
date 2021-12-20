import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router';

import { handleRedirectToDashboard } from '../../../../utils/HelperFunctions/helperFunctions';

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

  align-self: flex-start;
`;

const FormButtons: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <FormButton
        onClick={() => handleRedirectToDashboard(history)}
        typeOfButton="notFilled"
        width="82px"
        type="button"
      >
        Cancel
      </FormButton>
      <FormButton typeOfButton="filledGreen" width="82px" value="Done" type="button">
        Done
      </FormButton>
      <FormButton typeOfButton="filledPink" width="82px" value="Decline" type="button">
        Decline
      </FormButton>
    </Container>
  );
};

export default FormButtons;
