import React from "react";

// Utility helper for random number generation
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
export const useRandomInterval = (
  callback: (intervals: number) => void,
  minDelay: number,
  maxDelay: number,
  shouldInterval: boolean
) => {
  const timeoutId = React.useRef<any>(null);
  const intervals = React.useRef<number>(0);
  const savedCallback = React.useRef(callback);
  const savedShouldUpdate = React.useRef(false);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    savedShouldUpdate.current = shouldInterval;
  }, [shouldInterval]);

  React.useEffect(() => {
    const isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";
    if (isEnabled) {
      window.clearTimeout(timeoutId.current);
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        if (!savedShouldUpdate.current) {
          return;
        }
        const timeOut = window.setTimeout(() => {
          intervals.current = intervals.current + 1;
          savedCallback.current(intervals.current);
          timeoutId.current = timeOut;

          if (savedShouldUpdate.current) {
            handleTick();
          }
        }, nextTickAt);
      };
      if (savedShouldUpdate.current) {
        handleTick();
      }
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay, shouldInterval]);

  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);

  return cancel;
};
