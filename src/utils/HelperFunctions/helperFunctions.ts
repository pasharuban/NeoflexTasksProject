import { routes } from '../../routes/routes';

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getEuropeFormatDate = (date: Date): string => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const handleRedirectToDashboard = (history: Record<string, any>) => {
  history.push(routes.dashboard);
};

export const redirectToMainPage = (history: Record<string, any>) => {
  history.push(routes.main);
};

export const validatePassword = (_: string | null, value: string, callback: (arg?: string) => void) => {
  if (value.length < 5) {
    callback('less than 5 chars!');
  } else {
    callback();
  }
};
