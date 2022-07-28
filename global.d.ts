import {MyThemeType} from './src/themes/type';

declare module '@react-navigation/native' {
  export type MyTheme = MyThemeType;
  export function useTheme(): MyTheme;
}
