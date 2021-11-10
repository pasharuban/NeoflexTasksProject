import React from 'react';
import styled from 'styled-components';

import iconPlus from '../../../../assets/TasksTablePage/icons/icon-plus.svg';

const CreateBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 174px;
  height: 48px;

  background: #7db59a;
  border-radius: 16px;

  outline: none;
  border: none;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 32px;
  letter-spacing: 0.2px;

  color: #ffffff;

  transition: all 0.5s;

  &:hover {
    background-color: #4f896c;
    cursor: pointer;
  }
`;

const ButtonIcon = styled.img`
  padding: 0;
`;

const CreateButton: React.FC = () => {
  return (
    <CreateBtn>
      <ButtonIcon src={iconPlus} alt="alt" />
      Create claim
    </CreateBtn>
  );
};

export default CreateButton;
