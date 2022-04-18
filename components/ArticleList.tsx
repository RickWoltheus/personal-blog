import {
  Box,
  chakra,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  SpaceProps,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface ArticleProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
  index: number;
  slug: string;
}

export const Article: React.FunctionComponent<ArticleProps> = ({
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
      <chakra.a shadow={"xl"}>
        <GridItem
          left={0}
          w="100%"
          height={"300px"}
          position={"relative"}
          overflow={"hidden"}
          backgroundImage={image}
          backgroundSize={"cover"}
          backgroundRepeat={"none"}
          backgroundPosition={"center"}
          borderRadius={8}
        >
          <Flex
            padding={4}
            flexDirection={"column"}
            justifyContent={"space-between"}
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
  articles: any[];
}

export const ArticleList: React.FunctionComponent<ArticleListProps> = (
  props
) => {
  console.log(props);
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={6}
    >
      {props?.articles.map((article, index) => (
        <Article
          key={index}
          title={article.fields.title}
          image={article.fields?.heroImage?.fields?.file?.url ?? ""}
          imageAlt={article.fields.imageAlt}
          slug={article.fields.slug}
          description={article.fields.description}
          date={article.fields.publishDate}
          index={index}
        />
      ))}
    </Grid>
  );
};
