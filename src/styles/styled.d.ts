import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primaryMedium: string;
      grayDark: string;
      grayMedium: string;
      grayMedium2: string;
      graylight: string;
      blackDark: string;
      blackMedium: string;
      blackLight: string;
      blackLighter: string;
      errorDark: string;
      errorMedium: string;
      errorLight: string;

      categories: {
        frontend: string;
        backend: string;
        mobile: string;
        ux: string;
        datasc: string;
        infra: string;
        marketing: string;
        inovation: string;
      };
    };
  }
}
