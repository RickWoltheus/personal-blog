import {
  useColorModeValue,
  useDisclosure,
  chakra,
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  VisuallyHidden,
  Text,
  Avatar,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { LightBulbIcon } from "@heroicons/react/solid";
import { AppThemeContext } from "../pages/_app";
import { colorThemes } from "../theme/foundations/colors";
export function NavBar() {
  const bg = useColorModeValue("white", "gray.800");
  const { switchTheme } = useContext(AppThemeContext);

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        bgColor={"quinary"}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          maxW={"7xl"}
        >
          <Flex alignItems={"center"}>
            <Avatar src="/rick.jpeg" name="Rick Woltheus"></Avatar>
            <chakra.a
              href="/"
              title="Rick Woltheus Home Page"
              display="flex"
              alignItems="center"
              marginLeft={2}
            >
              {/* <Logo /> */}
              <VisuallyHidden>Rick Woltheus</VisuallyHidden>
            </chakra.a>
            <chakra.h1
              fontSize="md"
              fontWeight="bold"
              ml="2"
              cursor={"pointer"}
            >
              <Link href="/">Rick Woltheus</Link>
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href={"/posts"} passHref>
                <Button variant="ghost" as="a">
                  Posts
                </Button>
              </Link>
              <Link href={"/work"} passHref>
                <Button variant="ghost" as="a">
                  Work
                </Button>
              </Link>
              <IconButton
                variant="ghost"
                borderRadius={"100%"}
                aria-label="Call Sage"
                icon={<LightBulbIcon height={24} width={24} />}
              />
            </HStack>
          </HStack>
        </Flex>
      </chakra.header>
      <Box bgColor={"secondary"}>
        <Container
          bgColor={"secondary"}
          maxW={"7xl"}
          paddingTop={8}
          paddingBottom={8}
        >
          <Text
            fontSize={"2xl"}
            marginBottom={8}
            right={0}
            justifySelf={"flex-end"}
            alignSelf={"flex-end"}
            color={"tertiary"}
          >
            Don&apos;t like my green theme? what! what a shame! please try out
            my other themes then.
          </Text>
          <Flex>
            <Button
              variant={"unstyled"}
              width={200}
              height={75}
              border={"4px"}
              borderColor={"quaternary"}
              borderRadius={"xl"}
              overflow={"hidden"}
              display={"flex"}
              onClick={() => switchTheme("greenTheme")}
            >
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.primary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.secondary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.tertiary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.quaternary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.quinary}
              />
            </Button>
            <Button
              variant={"unstyled"}
              width={200}
              height={75}
              border={"4px"}
              borderColor={"quaternary"}
              borderRadius={"xl"}
              overflow={"hidden"}
              display={"flex"}
              onClick={() => switchTheme("blueOrange")}
            >
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.blueOrange.primary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.blueOrange.secondary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.blueOrange.tertiary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.blueOrange.quaternary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.blueOrange.quinary}
              />
            </Button>
            <Button
              variant={"unstyled"}
              width={200}
              height={75}
              border={"4px"}
              borderColor={"quaternary"}
              borderRadius={"xl"}
              overflow={"hidden"}
              display={"flex"}
              onClick={() => switchTheme("darkBlue")}
            >
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.darkBlue.primary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.darkBlue.secondary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.darkBlue.tertiary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.darkBlue.quaternary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.darkBlue.quinary}
              />
            </Button>
            <Button
              variant={"unstyled"}
              width={200}
              height={75}
              border={"4px"}
              borderColor={"quaternary"}
              borderRadius={"xl"}
              overflow={"hidden"}
              display={"flex"}
              onClick={() => switchTheme("greenTheme")}
            >
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.primary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.secondary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.tertiary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.quaternary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.quinary}
              />
            </Button>
            <Button
              variant={"unstyled"}
              width={200}
              height={75}
              border={"4px"}
              borderColor={"quaternary"}
              borderRadius={"xl"}
              overflow={"hidden"}
              display={"flex"}
              onClick={() => switchTheme("greenTheme")}
            >
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.primary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.secondary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.tertiary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.quaternary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.quinary}
              />
            </Button>
            <Button
              variant={"unstyled"}
              width={200}
              height={75}
              border={"4px"}
              borderColor={"quaternary"}
              borderRadius={"xl"}
              overflow={"hidden"}
              display={"flex"}
              onClick={() => switchTheme("greenTheme")}
            >
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.primary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.secondary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.tertiary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.quaternary}
              />
              <Box
                height={"100%"}
                width={"100%"}
                bgColor={colorThemes.greenTheme.quinary}
              />
            </Button>
          </Flex>
        </Container>
      </Box>
    </React.Fragment>
  );
}
