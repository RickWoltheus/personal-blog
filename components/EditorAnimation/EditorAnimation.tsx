import { Box, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useMeasure } from "../hooks/useMeasure";
import { Spinner } from "@chakra-ui/react";

export const EditorAnimation: React.FunctionComponent<{
  animate: boolean;
}> = ({ animate }) => {
  const { ref, measure } = useMeasure();
  //   const [boxes, setBoxes] = useState<number[]>([1, 2, 3, 4]);
  //   const [showLoader, setShowLoader] = useState<boolean>(false);
  //   const controls = useAnimation();

  //   useEffect(() => {
  //     // if (animate) {
  //     //   ulSequence();
  //     // } else {
  //     //   ulStopSequence();
  //     // }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [animate]);

  //   const ulStopSequence = async () => {
  //     await controls.start("closed");
  //   };

  //   const ulSequence = async () => {
  //     await controls.start("open");
  //     await controls.start("scroll");
  //     setShowLoader(true);
  //     setTimeout(async () => {
  //       setShowLoader(false);
  //       await controls.start("done");
  //     }, 600);
  //   };

  return (
    <Box
      top={0}
      bottom={0}
      left={0}
      right={0}
      position={"absolute"}
      paddingLeft={4}
      paddingRight={4}
      paddingTop={4}
      ref={ref}
    >
      {/* <motion.div variants={variantsNav} animate={animate ? "open" : "closed"}> */}
      <Flex
        width={"100%"}
        height={"32px"}
        background={"gray.300"}
        borderTopRadius={8}
        alignItems={"center"}
      >
        <Box
          marginLeft={"8px"}
          width={"16px"}
          height={"16px"}
          background={"red.200"}
          borderRadius={"100%"}
          border={"solid 1px"}
          borderColor={"red.300"}
        />
        <Box
          marginLeft={"8px"}
          width={"16px"}
          height={"16px"}
          background={"orange.200"}
          borderRadius={"100%"}
          border={"solid 1px"}
          borderColor={"orange.300"}
        />
        <Box
          marginLeft={"8px"}
          width={"16px"}
          height={"16px"}
          background={"green.200"}
          borderRadius={"100%"}
          border={"solid 1px"}
          borderColor={"green.300"}
        />
      </Flex>
      <Box
        width={"100%"}
        height={"100%"}
        background={"gray.200"}
        borderBottomRadius={8}
        marginBottom={4}
        alignItems={"center"}
      >
        {renderItems()}
      </Box>
    </Box>
  );

  function renderItems() {
    return (
      <Box
        width={80}
        height={8}
        background={"red.200"}
        borderRadius={8}
        marginBottom={4}
        alignItems={"center"}
      ></Box>
    );
  }
};
