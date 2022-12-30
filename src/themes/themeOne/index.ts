// Import type defanition
import {MyThemeType} from '../type';

// extend default theme with custom colours
const theme: MyThemeType = {
  colors: {
    primary: '#00A3FF',
    primary_50: '#E5F6FF',
    secondary_500: '#1E2749',
    neutral: '#F2F2F2',
    neutral_50: '#F9FAFA',
    neutral_100: '#EDF0F1',
    neutral_200: '#E1E5E8',
    neutral_500: '#C3CCD1',
    neutral_600: '#A6B4BB',
    neutral_700: '#6E838F',
    shades_white: '#FFFFFF',
    shades_black: '#000000',
    bgSecondary: '#E9EAED',
    success: '#42ba96',
    success_50: '#E2FCEE',
    success_500: '#10B45B',
    error: '#df4759',
    modal_bg: 'rgba(0, 0, 0, 0.65)',
    gradientOne: {
      start: '#29C0E9',
      end: '#1285CF',
    },
    black: '#000',
    primaryButton: '#222222',
    primaryBorderButton: '#E3DFE3',
    bottomTabBackground: '#FDFDF6',
    green: '#DEF5E5',
  },
  dark: false,
};

export default theme;
