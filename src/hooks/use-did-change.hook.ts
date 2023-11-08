import { useEffect, useRef } from "react";

export const useDidChange = <T extends unknown[]>(
  callback: (previousDependencies: T | null) => void,
  dependencies: T,
  useOnMount = false,
) => {
  const prev = useRef<T | null>(null);
  const mountRef = useRef(useOnMount);

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
      return;
    }

    return () => {
      callback(prev.current);
      prev.current = dependencies;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
