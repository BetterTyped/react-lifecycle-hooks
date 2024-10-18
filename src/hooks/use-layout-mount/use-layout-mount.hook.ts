/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useRef } from "react";

export const useLayoutMount = (callback: VoidFunction | (() => VoidFunction)) => {
  const mounted = useRef(false);

  useLayoutEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return callback();
    }
  }, []);
};
