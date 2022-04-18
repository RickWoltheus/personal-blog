import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
} from "@chakra-ui/react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { ArticleList } from "../../components/ArticleList";
import { FeaturedWork } from "../../components/FeaturedWork/FeaturedWork";
import { infra } from "../../infra";
interface Props {
  works: any[];
}

const Index: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <chakra.main bgColor={"quinary.500"}>
        <Box background={"primary.500"} paddingTop={8} paddingBottom={8}>
          <Container maxW={"7xl"}>
            <Heading
              mb={6}
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              lineHeight="none"
              letterSpacing={"wide"}
              color={"quinary.500"}
            >
              Work
            </Heading>
            <FeaturedWork works={props.works} />
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

export async function getStaticProps() {
  const result = await infra.api.works.getEntries();

  return {
    props: {
      works: result.items ?? null,
    },
    revalidate: 1,
  };
}

export default Index;