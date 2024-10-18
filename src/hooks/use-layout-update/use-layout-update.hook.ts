/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useRef } from "react";

export const useLayoutUpdate = (
  callback: VoidFunction | (() => VoidFunction),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dependencies: any[],
  useOnMount = false,
) => {
  const mountRef = useRef(useOnMount);

  useLayoutEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
      return;
    }

    return callback();
  }, dependencies);
};
