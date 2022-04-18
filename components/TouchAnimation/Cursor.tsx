import { Icon } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { randomNumberInRange } from "./TouchAnimation";

const prefferedColors = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "quinary",
];
interface Props {
  style: any;
  id?: number | undefined;
  onAnimationComplete?: (id?: number) => void;
}

export const CursorIcon: React.FunctionComponent<Props> = ({
  style,
  onAnimationComplete,
  id,
}) => {
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const controls = useAnimation();
  const directions = useRef({
    x: randomNumberInRange(-60, 60),
    y: randomNumberInRange(-60, 60),
  });
  const color = useRef(
    prefferedColors[Math.round(Math.random() * prefferedColors.length - 1)]
  );

  const sequence = async () => {
    await controls.start({
      x: directions.current.x,
      y: directions.current.y,
      opacity: 1,
      transition: { duration: 0.6 },
    });
    await controls.start({
      scale: 0.99,
      transition: { duration: 0.2 },
    });
    setIsClicking(true);
    await controls.start({
      scale: 1,
      transition: { duration: 0.2 },
    });
    setIsClicking(false);
    await controls.start({
      scale: 1,
      x: 0,
      y: 0,
      opacity: 0,
      transition: { duration: 0.6 },
    });
    onAnimationComplete?.(id);
  };

  useEffect(() => {
    sequence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0 }}
      style={{
        position: "absolute",
        ...style,
      }}
      animate={controls}
    >
      <Icon
        boxSize={16}
        ml={1}
        viewBox="0 0 20 20"
        color={`${color.current}`}
        fill="currentColor"
      >
        {isClicking ? (
          <path
            fillRule="evenodd"
            d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
            clipRule="evenodd"
          />
        ) : (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            id="svg_1"
            d="m7.372,6.072a1,1 0 0 0 -1.3,1.3l4,10a1,1 0 0 0 1.823,0.075l1.38,-2.759l3.018,3.02a1,1 0 0 0 1.414,-1.415l-3.019,-3.02l2.76,-1.379a1,1 0 0 0 -0.076,-1.822l-10,-4z"
          />
        )}
      </Icon>
    </motion.div>
  );
};
