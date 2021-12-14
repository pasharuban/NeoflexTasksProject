import { RegistrationDataTypes } from './registrationDataTypes';
import { LoginDataTypes } from './loginDataTypes';

export type State = {
  updateRegistrationForm: boolean;
  openCreateNewClaimForm: boolean;
  openIncomingClaimForm: boolean;
  userName: string;
  claims: any[];
  currentTableElement: Record<string, any>;
  loading: boolean;
  userData: RegistrationDataTypes | LoginDataTypes | null;
  authError: boolean | null;
  errorMessage: string;
};
