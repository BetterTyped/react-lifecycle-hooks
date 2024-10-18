/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export const useDidMount = (callback: VoidFunction | (() => VoidFunction)) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return callback();
    }
  }, []);
};
