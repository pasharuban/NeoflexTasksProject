export const buttonElementHoverBackground = (typeOfButton: string) =>
  (typeOfButton === 'filledGreen' && 'background-color:#5B9479') ||
  (typeOfButton === 'filledPink' && 'background-color:#B03671');

export const buttonElementHoverColor = (typeOfButton: string) => typeOfButton === 'color:notFilled' && 'color:#c9e6d8';

export const buttonElementHoverBorder = (typeOfButton: string) =>
  typeOfButton === 'notFilled' && 'border:1px solid #7DB59A';

export const buttonElementActiveBackground = (typeOfButton: string) =>
  (typeOfButton === 'filledGreen' && 'background-color:#4F896C') ||
  (typeOfButton === 'filledPink' && 'background-color:#832552');

export const buttonElementActiveFontWeight = (typeOfButton: string) =>
  typeOfButton === 'filledGreen' && 'font-weight:900';

export const buttonElementActiveColor = (typeOfButton: string) => typeOfButton === 'notFilled' && 'color:#4F896C';

export const buttonElementActiveBorder = (typeOfButton: string) =>
  typeOfButton === 'notFilled' && 'border:2px solid #4F896C';

export const buttonElementBackground = (typeOfButton: string) =>
  (typeOfButton === 'filledGreen' && 'background-color: #7DB59A') ||
  (typeOfButton === 'filledPink' && 'background-color: #E84393') ||
  (typeOfButton === 'notFilled' && 'background: none');

export const buttonElementColor = (typeOfButton: string) =>
  ((typeOfButton === 'filledGreen' || typeOfButton === 'filledPink') && 'color:#FFFFFF') ||
  (typeOfButton === 'notFilled' && 'color:#858585');

export const buttonElementBorder = (typeOfButton: string) =>
  ((typeOfButton === 'filledGreen' || typeOfButton === 'filledPink') && 'border:none') ||
  (typeOfButton === 'notFilled' && 'border:1px solid #858585');
