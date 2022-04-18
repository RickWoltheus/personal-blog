import { Box, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useMeasure } from "../hooks/useMeasure";
import { Spinner } from "@chakra-ui/react";

export function randomNumberInRange(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const variantsMenuItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    y: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  scroll: {
    y: -300,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  done: {
    y: -200,
    transition: {
      delay: 1000,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const variantsScroll = {
  closed: {
    y: 0,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  scroll: {
    y: 390,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variantsNav = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const InterfaceAnimation: React.FunctionComponent<{
  animate: boolean;
}> = ({ animate }) => {
  const { ref, measure } = useMeasure();
  const [boxes, setBoxes] = useState<number[]>([1, 2, 3, 4]);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    if (animate) {
      ulSequence();
    } else {
      ulStopSequence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate]);

  const ulStopSequence = async () => {
    await controls.start("closed");
  };

  const ulSequence = async () => {
    await controls.start("open");
    await controls.start("scroll");
    setShowLoader(true);
    setTimeout(async () => {
      setShowLoader(false);
      await controls.start("done");
    }, 600);
  };

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
      width={"100%"}
      ref={ref}
    >
      <motion.div variants={variantsNav} animate={animate ? "open" : "closed"}>
        <Flex gridGap={4} marginLeft={-16}>
          <Box
            width={"100%"}
            height={"46px"}
            background={"secondary"}
            marginBottom={4}
            shadow={"md"}
            borderRadius={"md"}
          />
          <Box
            width={"46px"}
            height={"46px"}
            background={"secondary"}
            borderRadius={"full"}
            shadow={"md"}
          />
        </Flex>
      </motion.div>
      <Flex paddingTop={8} marginLeft={-16} overflow={"hidden"}>
        <motion.ul animate={controls} variants={variantsUl} style={{ flex: 1 }}>
          {boxes.map((id) => (
            <motion.li
              initial={{ opacity: 0 }}
              key={id}
              variants={variantsMenuItem}
            >
              <Box
                shadow={"md"}
                width={"100%"}
                height={"60px"}
                background={"secondary"}
                marginBottom={4}
                borderRadius={"xl"}
              />
            </motion.li>
          ))}
          {showLoader && (
            <Flex
              width={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Spinner color={"secondary"} size={"xl"} />
            </Flex>
          )}
        </motion.ul>
        <motion.div animate={controls} variants={variantsScroll}>
          <Box
            width={2}
            height={100}
            background={"secondary"}
            borderRadius={16}
            marginBottom={4}
          />
        </motion.div>
      </Flex>
    </Box>
  );
};
