import { RegistrationDataTypes } from './registrationDataTypes';

export type State = {
  updateRegistrationForm: boolean;
  openCreateNewClaimForm: boolean;
  openIncomingClaimForm: boolean;
  userName: string;
  claims: any[];
  currentTableElement: Record<string, any>;
  loading: boolean;
  userData: RegistrationDataTypes | null;
  registrationError: boolean | null;
  errorMessage: string;
};
