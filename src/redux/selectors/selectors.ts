import { RootState } from '../rootReducer';

export const getLoadingState = (state: RootState) => state.auth.loading;
export const getAuthErrorState = (state: RootState) => state.auth.authError;

export const getErrorMessage = (state: RootState) => state.auth.errorMessage;
export const getCurrentUserData = (state: RootState) => state.auth.userData;
