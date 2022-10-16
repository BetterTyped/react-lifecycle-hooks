/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export const useDidUpdate = (
  callback: VoidFunction | (() => VoidFunction),
  dependencies: any[],
  useOnMount = false,
) => {
  const mountRef = useRef(useOnMount);

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
      return;
    }

    return callback();
  }, dependencies);
};
