import React from 'react';
import styled from 'styled-components';

import NewClaimTitle from './NewClaimTitle';
import { ItemForm } from '../../../../components/ItemForm/ItemForm';
import FormItemElement from '../../../../components/FormItemElement/FormItemElement';
import InputElement from '../../../../components/InputElement/InputElement';

const Container = styled.div``;

const NewClaim: React.FC = () => {
  return (
    <Container>
      <NewClaimTitle />
      <ItemForm>
        <FormItemElement>
          <InputElement placeholder="Input!" />
        </FormItemElement>
      </ItemForm>
    </Container>
  );
};

export default NewClaim;
