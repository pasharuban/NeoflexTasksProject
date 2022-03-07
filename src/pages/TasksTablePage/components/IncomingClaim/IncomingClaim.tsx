import React from 'react';
import styled from 'styled-components';

import ClaimTitle from '../ClaimTitle/ClaimTitle';
import IncomingClaimForm from './IncomingClaimForm';

const Container = styled.div`
  width: 100%;
`;

const IncomingClaim: React.FC = () => {
  return (
    <Container>
      <ClaimTitle title="Incoming claim" />
      <IncomingClaimForm />
    </Container>
  );
};

export default IncomingClaim;
