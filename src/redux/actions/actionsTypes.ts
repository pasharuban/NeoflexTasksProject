export type AuthStartedType = {
  type: string;
};

export type AuthFailureType = {
  type: string;
  payload: string;
};

export type LoginSuccessType = {
  type: string;
  payload: Record<string, unknown>;
};

export type RegistrationSuccessType = {
  type: string;
  payload: Record<string, unknown>;
};
