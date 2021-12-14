import { ActionTypeTypes } from '../../types/actionTypeTypes';
import {
  UPDATE_REGISTRATION_FORM,
  OPEN_INCOMING_CLAIM_FORM,
  CLOSE_INCOMING_CLAIM_FORM,
  OPEN_CREATE_NEW_CLAIM_FORM,
  UPDATE_CURRENT_TABLE_ELEMENT,
  CHANGE_STATUS_OF_INCOMING_CLAIM,
  CREATE_NEW_CLAIM,
} from '../actions/types';

type initialStateType = {
  updateRegistrationForm: boolean;
  openCreateNewClaimForm: boolean;
  openIncomingClaimForm: boolean;
  currentTableElement: Record<string, any>;
  claims: any[];
};

const initialState: initialStateType = {
  currentTableElement: { _id: '' },
  updateRegistrationForm: false,
  openCreateNewClaimForm: false,
  openIncomingClaimForm: false,

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

const formsReducer = (state = initialState, action: ActionTypeTypes): initialStateType => {
  switch (action.type) {
    case CREATE_NEW_CLAIM:
      return {
        ...state,
        claims: [...state.claims, action.payload],
      };

    case UPDATE_CURRENT_TABLE_ELEMENT:
      return { ...state, currentTableElement: action.payload };
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
    case OPEN_CREATE_NEW_CLAIM_FORM:
      return { ...state, openCreateNewClaimForm: !state.openCreateNewClaimForm };
    case OPEN_INCOMING_CLAIM_FORM:
      return { ...state, openIncomingClaimForm: !state.openIncomingClaimForm, currentTableElement: action.payload };
    case CLOSE_INCOMING_CLAIM_FORM:
      return { ...state, openIncomingClaimForm: !state.openIncomingClaimForm, currentTableElement: {} };
    case UPDATE_REGISTRATION_FORM:
      return { ...state, updateRegistrationForm: !state.updateRegistrationForm };
    default:
      return state;
  }
};

export default formsReducer;
