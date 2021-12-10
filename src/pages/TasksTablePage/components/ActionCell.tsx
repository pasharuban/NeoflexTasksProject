import React from 'react';
import styled from 'styled-components';

import { useHistory, useRouteMatch } from 'react-router';
// for typing dispatch
import { ThunkDispatch } from 'redux-thunk';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionOpenIncomingClaimForm } from '../../../redux/actionCreators';

import { State } from '../../../types/stateTypes';
import { Action } from '../../../redux/reducer';

import TableCellBaseFontSize from './TableCellBaseFontSize';

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const CellActionText = styled(TableCellBaseFontSize)`
  font-style: normal;
  font-weight: normal;
  line-height: 20px;

  text-decoration-line: underline;

  color: #148bff;

  &:hover {
    cursor: pointer;
  }
`;

const CellActionWrapper: React.FC<{
  openIncomingClaimForm: (index: Record<string, unknown>) => void;
  index: Record<string, unknown>;
}> = ({ openIncomingClaimForm, index }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <CellActionText
      onClick={() => {
        openIncomingClaimForm(index);
        history.push(`${url}/${index._id}`);
      }}
    >
      {capitalizeFirstLetter('browse')}
    </CellActionText>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, never, Action>) => {
  const dispatchOpenIncomingClaimForm = bindActionCreators(actionOpenIncomingClaimForm, dispatch);

  return {
    openIncomingClaimForm: (index: Record<string, unknown>) => {
      dispatchOpenIncomingClaimForm(index);
    },
  };
};

export default connect(null, mapDispatchToProps)(CellActionWrapper);
