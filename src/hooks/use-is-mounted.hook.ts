import { useRef, useEffect } from "react";

export const useIsMounted = () => {
  const componentIsMounted = useRef(true);
  useEffect(
    () => () => {
      componentIsMounted.current = false;
    },
    [],
  );
  return componentIsMounted;
};

export default useIsMounted;
