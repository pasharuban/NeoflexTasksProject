interface IBreakPoints {
  smaller1100: string;
  larger2000: string;
}

const breakPoints: IBreakPoints = {
  smaller1100: '1100px',
  larger2000: '2000px',
};

export const maxWidth = {
  tablet: `media only screen and (max-width:1100px)`,
};

export const mainWidth = {
  tablet: `media only screen and (min-width:2000px)`,
};

export default breakPoints;

// думаю передавать эту штуку через react context
// чтобы не импортировать по 100 раз в разных компонентах
