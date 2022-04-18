import { ComponentStyleConfig } from "@chakra-ui/theme";
import { mode } from "@chakra-ui/theme-tools";

export const Button: ComponentStyleConfig = {
  // 1. We can update the base styles
  baseStyle: (props) => ({
    borderRadius: 0,

    border: mode("1px solid black", "1px solid white")(props),
    boxSizing: "border-box",
    // fontWeight: "normal",
    color: mode("black", "white")(props),
    cursor: "pointer",
    background: undefined,

    _hover: {
      background: undefined,
      borderBottom: mode("5px solid inherit", "5px solid white")(props),
    },
  }),
  variants: {
    unstyled: {
      border: "none",
      _hover: {
        paddingTop: 0,
        borderBottom: "none",
      },
    },
  },
};
