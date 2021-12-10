import { ActionTypeTypes } from '../../types/actionTypeTypes';
import {
  OPEN_INCOMING_CLAIM_FORM,
  CLOSE_INCOMING_CLAIM_FORM,
  CHANGE_STATUS_OF_INCOMING_CLAIM,
  UPDATE_CURRENT_TABLE_ELEMENT,
} from '../actions/types';

interface InitialStateTypes {
  openIncomingClaimForm: boolean;
  currentTableElement: Record<string, any>;
  claims: any[];
}

const initialState: InitialStateTypes = {
  openIncomingClaimForm: false,
  currentTableElement: {},
  claims: [
    {
      _id: '61952b6626b99e54076a71b4',
      title: 'Figma smart web system for to build',
      description: 'some description',
      type: 'Hardware',
      status: {
        name: 'Done',
        slug: 'done',
      },
      user: '61951d4451c9c5c03333fa49',
      createdAt: '2021-11-17T16:18:46.981Z',
      updatedAt: '2021-11-17T16:18:46.981Z',
      __v: 0,
    },
    {
      _id: '61952b6626b99e540766626b',
      title: 'Figma smart web system for to build',
      description: 'some description',
      type: 'Software',
      status: {
        name: 'Declined',
        slug: 'declined',
      },
      user: '61951d4451c9c5c03333fa49',
      createdAt: '2021-07-22T16:18:46.981Z',
      updatedAt: '2021-11-17T16:18:46.981Z',
      __v: 0,
    },
    {
      _id: '61952b6626b99e54076a407666',
      title: 'Figma smart web system for to build',
      description: 'some description',
      type: 'Networking',
      status: {
        name: 'New',
        slug: 'new',
      },
      user: '61951d4451c9c5c03333fa49',
      createdAt: '2021-11-12T16:18:46.981Z',
      updatedAt: '2021-11-17T16:18:46.981Z',
      __v: 0,
    },
    {
      _id: '61952b6626b99e54076626b666',
      title: 'Figma smart web system for to build',
      description: 'some description',
      type: 'troubleshooting',
      status: {
        name: 'In progress',
        slug: 'in progress',
      },
      user: '61951d4451c9c5c03333fa49',
      createdAt: '2021-11-12T16:18:46.981Z',
      updatedAt: '2021-11-17T16:18:46.981Z',
      __v: 0,
    },
  ],
};

const incomingClaimFormReducer = (state = initialState, action: ActionTypeTypes): InitialStateTypes => {
  switch (action.type) {
    case OPEN_INCOMING_CLAIM_FORM:
      return { ...state, openIncomingClaimForm: !state.openIncomingClaimForm, currentTableElement: action.payload };
    case CLOSE_INCOMING_CLAIM_FORM:
      return { ...state, openIncomingClaimForm: !state.openIncomingClaimForm, currentTableElement: {} };
    case CHANGE_STATUS_OF_INCOMING_CLAIM:
      return {
        ...state,
        claims: state.claims.map((claim) => {
          if (claim._id === state.currentTableElement._id) {
            claim.status = { name: action.payload, slug: action.payload };
          }

          return claim;
        }),
      };

    case UPDATE_CURRENT_TABLE_ELEMENT:
      return { ...state, openIncomingClaimForm: true, currentTableElement: action.payload };

    default:
      return state;
  }
};

export default incomingClaimFormReducer;
