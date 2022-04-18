import { extendTheme } from "@chakra-ui/react";
import { components } from "./components";
import foundations from "./foundations";
import colors from "./foundations/colors";

const direction = "ltr";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra",
};

export const theme = {
  components,
  direction,
  ...foundations,
  config,
  styles: {
    global: {
      body: {
        backgroundColor: "blue",
      },
    },
  },
};

export default extendTheme(theme);
