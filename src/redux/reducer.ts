import { State } from '../types/stateTypes';

export enum Actions {
  UPDATE_REGISTRATION_FORM = 'UPDATE_REGISTRATION_FORM',
  OPEN_CREATE_NEW_CLAIM_FORM = 'OPEN_CREATE_NEW_CLAIM_FORM',
}

export interface Action {
  type: string;
}

const initialState: State = {
  updateRegistrationForm: false,
  openCreateNewClaimForm: false,
  userName: 'Ivan Ivanov',
  claims: [
    {
      _id: '61952b6626b99e54076a71b4',
      S: 'Figma smart web system for to build',
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
  ],
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case Actions.UPDATE_REGISTRATION_FORM:
      return { ...initialState, updateRegistrationForm: !state.updateRegistrationForm };
    case Actions.OPEN_CREATE_NEW_CLAIM_FORM:
      return { ...initialState, openCreateNewClaimForm: !state.openCreateNewClaimForm };
    default:
      return state;
  }
};

export default reducer;
