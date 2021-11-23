export type State = {
  updateRegistrationForm: boolean;
  openCreateNewClaimForm: boolean;
  openIncomingClaimForm: boolean;
  userName: string;
  claims: any[];
  currentTableElement: Record<string, any>;
};
