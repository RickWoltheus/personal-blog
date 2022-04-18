import { useEffect, useRef, useState } from "react";

export function useMeasure() {
  const ref = useRef<any>(null);

  const [measure, setMeasure] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      if (!ref || !ref.current) {
        return;
      }
      setMeasure({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    ref,
    measure,
  };
}
