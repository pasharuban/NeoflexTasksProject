import React from 'react';
import styled from 'styled-components';

import NewClaimTitle from './NewClaimTitle';

const Container = styled.div``;

const NewClaim: React.FC = () => {
  return (
    <Container>
      <NewClaimTitle />
    </Container>
  );
};

export default NewClaim;
