import "../styles/globals.css";

import type { AppProps } from "next/app";
import {
  Box,
  chakra,
  ChakraProvider,
  Container,
  Flex,
  GlobalStyle,
  Link,
  Text,
} from "@chakra-ui/react";
import { NavBar } from "../components/Navbar";
import theme from "../theme";
import { Fonts } from "../theme/Fonts";
import { useState } from "react";
import React from "react";
import colors, { colorThemes } from "../theme/foundations/colors";

function createTheme(themeName: keyof typeof colorThemes = "greenTheme") {
  return {
    ...theme,
    colors: {
      ...colors,
      ...colorThemes[themeName],
    },
    styles: {
      global: {
        body: {
          backgroundColor: colorThemes[themeName].background,
        },
      },
    },
  };
}

export const AppThemeContext = React.createContext<{
  switchTheme: (themeName: keyof typeof colorThemes) => void;
}>({
  switchTheme: (themeName: keyof typeof colorThemes) => undefined,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(createTheme());

  return (
    <AppThemeContext.Provider
      value={{
        switchTheme: (themeName: keyof typeof colorThemes) =>
          setCurrentTheme(createTheme(themeName)),
      }}
    >
      <ChakraProvider theme={currentTheme}>
        <GlobalStyle />
        <Fonts />
        <NavBar />
        <Component {...pageProps} />
        <hr></hr>
        <chakra.footer
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          padding={8}
          bgColor={"quinary"}
        >
          <Container
            alignItems={"flex-start"}
            display={"flex"}
            width={"100%"}
            maxW={"7xl"}
          >
            <Box>
              <Text fontWeight={"bold"}>© 2022–{new Date().getFullYear()}</Text>
              <Link>Rick Woltheus</Link>
            </Box>
            <Box marginLeft={8}>
              <Text fontWeight={"bold"}>Social</Text>
              <Flex>
                <Link>Linkedin</Link> / <Link>Github</Link>
              </Flex>
            </Box>
          </Container>
        </chakra.footer>
      </ChakraProvider>
    </AppThemeContext.Provider>
  );
}

export default MyApp;
