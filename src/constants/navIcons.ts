import iconHome from '../assets/TasksTablePage/icons/icon-home.svg';
import iconGlobe from '../assets/TasksTablePage/icons/icon-globe.svg';
import iconArchive from '../assets/TasksTablePage/icons/icon-archive.svg';
import iconPieChart from '../assets/TasksTablePage/icons/icon-pie-chart.svg';
import iconDollarSign from '../assets/TasksTablePage/icons/icon-dollar-sign.svg';
import iconDatabase from '../assets/TasksTablePage/icons/icon-database.svg';
import iconNavigation from '../assets/TasksTablePage/icons/icon-navigation.svg';

const navIcons = [
  {
    src: iconHome,
    alt: 'home',
    label: 'Home',
    onClick: () => {
      return;
    },
  },
  {
    src: iconGlobe,
    alt: 'globe',
    label: 'Services',
    onClick: () => null,
  },
  {
    src: iconArchive,
    alt: 'archive',
    label: 'Storage',
    onClick: () => null,
  },
  {
    src: iconPieChart,
    alt: 'pie-chart',
    label: 'Charts',
    onClick: () => null,
  },
  {
    src: iconDollarSign,
    alt: 'dollar',
    label: 'Currency',
    onClick: () => null,
  },
  {
    src: iconDatabase,
    alt: 'database',
    label: 'Base',
    onClick: () => null,
  },
  {
    src: iconNavigation,
    alt: 'navigation',
    label: 'Locations',
    onClick: () => null,
  },
];

export default navIcons;
