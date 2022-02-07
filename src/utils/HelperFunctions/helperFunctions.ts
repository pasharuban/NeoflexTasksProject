import { RouteComponentProps } from 'react-router';
import { maxWidth } from '../../mediaQueries/mediaQueries';
import { routes } from '../../routes/routes';

export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getEuropeFormatDate = (date: Date): string =>
  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

export const handleRedirectToDashboard = (history: RouteComponentProps['history']) => {
  history.push(routes.dashboard);
};

export const redirectToMainPage = (history: RouteComponentProps['history']) => {
  history.push(routes.main);
};

export const validatePassword = (_: string | null, value: string, callback: (arg?: string) => void) => {
  if (value.length < 5) {
    callback('less than 5 chars!');
  } else {
    callback();
  }
};

export const isEmpty = (obj: Record<string, any>) => {
  if (Object.keys(obj).length === 0 && obj.constructor === Object) return true;

  return false;
};

export const hideElementOnTablet = () => {
  return `${maxWidth.tablet} {
    display: none;
  }`;
};

export const showElementOnTablet = () => {
  return `${maxWidth.tablet} {
    display: block;
  }`;
};

export const makeIconWhiteOnTablet = () => {
  return `${maxWidth.tablet} {
    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(300deg) brightness(105%) contrast(101%);
  }`;
};
