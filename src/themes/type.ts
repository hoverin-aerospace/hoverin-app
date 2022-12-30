export interface Colors {
  primary: string;
  primary_50: string;
  neutral_50: string;
  neutral_100: string;
  neutral_200: string;
  neutral_700: string;
  shades_white: string;
  secondary_500: string;
  neutral_500: string;
  neutral_600: string;
  shades_black: string;
  bgSecondary: string;
  bgTertiary?: string;
  success?: string;
  success_50: string;
  success_500: string;
  error?: string;
  modal_bg?: string;
  gradientOne?: {
    start: string;
    end: string;
  };
  primaryButton?: string;
  primaryBorderButton?: string;
  neutral?: string;
  bottomTabBackground?: string;
  green?: string;
  black?: string;
}
export interface MyThemeType {
  colors: Colors;
  dark: boolean;
}
