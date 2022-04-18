import { Box, Icon } from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CursorIcon } from "./Cursor";
import { useRandomInterval } from "../hooks/useRandomInterval";
import { useMeasure } from "../hooks/useMeasure";

export function randomNumberInRange(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const TouchAnimation: React.FunctionComponent<{
  animate: boolean;
}> = ({ animate }) => {
  const { ref, measure } = useMeasure();
  const [icons, setIcons] = useState<number[]>([]);
  const iconsRef = useRef<number[]>();

  useRandomInterval(
    (intervals) => {
      const newValue = [...icons, intervals];
      iconsRef.current = newValue;
      setIcons(newValue);
    },
    160,
    200,
    animate
  );

  const animationComplete = useCallback((id) => {
    const newValue = iconsRef.current?.filter((iconId) => iconId !== id);
    iconsRef.current = newValue;
    setIcons(newValue ?? []);
  }, []);

  return (
    <Box top={0} bottom={0} left={0} right={0} position={"absolute"} ref={ref}>
      {icons.map((id) => (
        <MemoizedCursorIconContainer
          key={id}
          measure={measure}
          id={id}
          onAnimationComplete={animationComplete}
        />
      ))}
    </Box>
  );
};

const CursorIconContainer: React.FunctionComponent<{
  measure: {
    width: number;
    height: number;
  };
  id?: number;
  onAnimationComplete?: (id?: number) => void;
}> = (props) => {
  return (
    <CursorIcon
      style={{
        left: Math.round(Math.random() * props.measure.width),
        top: Math.round(Math.random() * props.measure.height),
      }}
      id={props.id}
      onAnimationComplete={props.onAnimationComplete}
    />
  );
};
const MemoizedCursorIconContainer = React.memo(CursorIconContainer);
