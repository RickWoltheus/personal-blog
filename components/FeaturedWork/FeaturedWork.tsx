import { chakra, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface FeaturedWorkProps {
  image: "test";
  imageAlt: string;
  title: string;
  description: string;
  date: string;
  index: number;
  slug: string;
}

export const Work: React.FunctionComponent<FeaturedWorkProps> = ({
  image,
  imageAlt,
  title,
  description,
  date,
  index,
  slug,
}) => {
  return (
    <Link href={`posts/${slug}`} passHref>
      <chakra.a shadow={"2xl"}>
        <GridItem
          left={0}
          w="100%"
          height={"300px"}
          position={"relative"}
          overflow={"hidden"}
          backgroundImage={`https://picsum.photos/id/${index}/200/200`}
          backgroundSize={"cover"}
          backgroundRepeat={"none"}
          backgroundPosition={"center"}
        >
          <Flex
            padding={4}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            textAlign={"left"}
            height={"100%"}
            boxShadow="inset 150px 150px 150px -60px rgba(0,0,0,0.9)"
          >
            <Heading color={"white"}>{title}</Heading>
            <Text as="p" color={"white"} fontSize="lg">
              {description}
            </Text>
          </Flex>
        </GridItem>
      </chakra.a>
    </Link>
  );
};

interface ArticleListProps {
  works: any[];
}

export const FeaturedWork: React.FunctionComponent<ArticleListProps> = (
  props
) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} width={"100%"}>
      {props.works.map((work, index) => (
        <Work
          key={index}
          title={work.fields.title}
          image={work.fields?.heroImage?.fields?.file?.url ?? ""}
          imageAlt={work.fields.imageAlt}
          slug={work.fields.slug}
          description={work.fields.description}
          date={work.fields.publishDate}
          index={index}
        />
      ))}
    </Grid>
  );
};
