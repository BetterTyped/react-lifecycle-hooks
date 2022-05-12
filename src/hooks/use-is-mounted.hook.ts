import { useRef, useEffect } from "react";

export const useIsMounted = () => {
  const componentIsMounted = useRef(true);
  useEffect(() => {
    componentIsMounted.current = true;
    return () => {
      componentIsMounted.current = false;
    };
  }, []);
  return componentIsMounted.current;
};
