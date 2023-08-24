import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#f4e1e2",
      100: "#c7686d",
      200: "#bf5259",
      300: "#b73d44",
      400: "#af272f",
      500: "#AF272F",
      600: "#9e232a",
      700: "#8c1f26",
      800: "#7a1b21",
      900: "#69171c",
    },
    white: {
      secondary: "#efefef",
    },
  },
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
    mories: `'Mories'`,
    moriesDisplay: `'moriesDisplay'`,
  },
});
