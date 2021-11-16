import React from 'react';
import styled from 'styled-components';

import NewClaimForm from './NewClaimForm';
import ClaimTitle from '../ClaimTitle/ClaimTitle';

const Container = styled.div``;

const NewClaim: React.FC = () => {
  return (
    <Container>
      <ClaimTitle title="Creating new claim" />
      <NewClaimForm />
    </Container>
  );
};

export default NewClaim;
