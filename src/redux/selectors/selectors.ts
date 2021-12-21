import { RootState } from '../rootReducer';

export const getAuthLoadingState = (state: RootState) => state.auth.loading;
export const getAuthErrorState = (state: RootState) => state.auth.authError;
export const getAuthErrorMessage = (state: RootState) => state.auth.errorMessage;
export const getCurrentUserData = (state: RootState) => state.auth.userData;

export const getDashboardData = (state: RootState) => state.getData.tableData;

export const getGetDataLoadingState = (state: RootState) => state.getData.loading;
export const getGetDataErrorState = (state: RootState) => state.getData.getDataError;
export const getGetDataErrorMessage = (state: RootState) => state.getData.errorMessage;

export const getPostDataLoadingState = (state: RootState) => state.postData.loading;
export const getPostDataErrorState = (state: RootState) => state.postData.postDataError;
export const getPostDataErrorMessage = (state: RootState) => state.postData.errorMessage;

export const getCurrentClaimState = (state: RootState) => state.getData.currentClaim;

export const getUpdateClaimError = (state: RootState) => state.getData.updateClaimError;
export const getUpdateClaimLoading = (state: RootState) => state.getData.updateClaimLoading;
export const getUpdateClaimErrorMessage = (state: RootState) => state.getData.updateClaimErrorMessage;
