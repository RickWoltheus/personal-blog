import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Link: ComponentStyleConfig = {
  baseStyle: (props) => {
    return {
      overflow: "visible",
      underline: "none",
      textDecoration: "none",
      position: "relative",
      zIndex: 100,
      fontWeight: props.theme.fontWeights["normal"],
      background: ``,
      backgroundSize: "16px 16px",
      color: props.theme.colors.secondary,

      _after: {
        content: '""',
        background: props.theme.colors.secondary,
        opacity: 0.2,
        position: "absolute",
        left: "12px",
        bottom: "-6px",
        width: "calc(100% - 8px)",
        height: "calc(100% - 8px)",
        zIndex: -1,
        transition: "0.35s cubic-bezier(0.25, 0.1, 0, 2.05)",
      },

      _hover: {
        _after: {
          left: 0,
          bottom: "-2px",
          width: "100%",
          height: "100%",
        },
        borderBottom: "solid 1px transparent",
        underline: "none",
        textDecoration: "none",
        overflow: "visible",
      },
    };
  },

  variants: {
    unstyled: {
      cursor: "pointer",
      borderBottom: "solid 1px transparent",
      underline: "none",
      textDecoration: "none",
      _hover: {
        borderBottom: "solid 1px transparent",
      },
    },
  },
};
