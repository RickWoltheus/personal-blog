import {
  Box,
  chakra,
  useColorModeValue,
  Text,
  Button,
  Stack,
  Icon,
  Image,
  Flex,
  Container,
  Link,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TouchAnimation } from "./TouchAnimation/TouchAnimation";
import { InterfaceAnimation } from "./InterfaceAnimation/InterfaceAnimation";
import { AmsterdamAnimation } from "./AmsterdamAnimation/AmsterdamAnimation";
import { EditorAnimation } from "./EditorAnimation/EditorAnimation";
import { CursorClickIcon } from "@heroicons/react/solid";

export function Hero() {
  const [getInTouch, setGetInTouch] = useState<boolean>(false);
  const [userInterface, setUserInterface] = useState<boolean>(false);
  const [softwareDeveloper, setSoftwareDeveloper] = useState<boolean>(false);
  // const [amsterdam, setAmsterdam] = useState<boolean>(false);
  return (
    <Box>
      <Flex
        bg={"quanary"}
        w="full"
        position={"relative"}
        justifyContent={"space-between"}
      >
        <TouchAnimation animate={getInTouch} />
        {/* <EditorAnimation animate={softwareDeveloper} /> */}
        {/* <AmsterdamAnimation animate={amsterdam} /> */}

        <Box>
          <Box position={"relative"} maxW={"3xl"} py={24}>
            <chakra.p
              fontWeight="bold"
              color={"secondary"}
              fontSize={{ base: "lg" }}
            >
              Hi! My name is Rick,
            </chakra.p>

            <Heading
              mb={6}
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              lineHeight="none"
              letterSpacing={"wide"}
              color={"tertiary"}
            >
              I&apos;am a{" "}
              <Button
                verticalAlign={"revert"}
                fontSize={"inherit"}
                variant={"unstyled"}
                onMouseEnter={() => setUserInterface(true)}
                onMouseLeave={() => setUserInterface(false)}
                padding={0}
              >
                <Text
                  display={{ base: "block", lg: "inline" }}
                  w="full"
                  bgClip="text"
                  transition={"background 0.2s linear"}
                  bgGradient="linear(to-r, primary, primary)"
                  fontWeight="extrabold"
                  _hover={{
                    bgGradient: "linear(to-r, primary, primary)",
                  }}
                >
                  software developer
                </Text>
              </Button>{" "}
              that creates well crafted{" "}
              <Button
                verticalAlign={"revert"}
                fontSize={"inherit"}
                variant={"unstyled"}
                onMouseEnter={() => setUserInterface(true)}
                onMouseLeave={() => setUserInterface(false)}
                padding={0}
              >
                <Text
                  display={{ base: "block", lg: "inline" }}
                  w="full"
                  bgClip="text"
                  bgGradient="linear(to-r, primary,primary)"
                  fontWeight="extrabold"
                  cursor={"pointer"}
                >
                  user interfaces
                </Text>
              </Button>{" "}
            </Heading>
            <Text fontSize={"2xl"} marginBottom={6} color={"tertiary"}>
              Currently I am solving things for good at{" "}
              <Link href="https://lifely.nl/">Lifely</Link>, In my free time I
              like to write about that on my <Link href="/posts">blog</Link>
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              mb={{ base: 4, md: 8 }}
              spacing={2}
              justifyContent={{ sm: "left", md: "left" }}
            >
              <Button
                as="a"
                variant="ghost"
                size="lg"
                onMouseEnter={() => setGetInTouch(true)}
                onMouseLeave={() => setGetInTouch(false)}
              >
                Get in touch
                <Icon
                  boxSize={4}
                  ml={1}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <CursorClickIcon />
                </Icon>
              </Button>
            </Stack>
          </Box>
        </Box>

        <Flex
          flex={1}
          alignItems={"center"}
          justifyContent={"center"}
          paddingLeft={16}
        >
          <Box
            height={"500px"}
            position={"relative"}
            width={"274px"}
            border={"8px"}
            borderColor={"secondary"}
            borderRadius={"3xl"}
            background={"quaternary"}
            alignSelf={"center"}
            justifySelf={"center"}
            placeSelf={"center"}
            marginBottom={8}
          >
            <InterfaceAnimation animate={true} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
