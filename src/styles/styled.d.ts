import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    textColorDarker: string;
    textColorLighter: string;
    fontFamilies: {
      primary: string;
    };
    fontWheights: {
      thin: number;
      regular: number;
      bold: number;
      extraBold: number;
    };
    fontSizes: {
      small: string;
      normal: string;
      medium: string;
      mediumLarge: string;
      large: string;
      xLarge: string;
      xxLarge: string;
      xxxLarge: string;
      xxxxLarge: string;
    };
    spaces: {
      p500: string;
      p400: string;
      p300: string;
      p200: string;
      p100: string;
      p50: string;
      p25: string;
    };
    mq: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    media: {
      max: {
        xs: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        sm: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        md: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        lg: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        xl: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        hover: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
      };
      min: {
        xs: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        sm: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        md: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        lg: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        xl: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        hover: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
      };
    };
  }
}
