import { useRef } from "react";

export const useWillMount = (callback: VoidFunction) => {
  const willMount = useRef(true);

  if (willMount.current) {
    callback();
  }

  willMount.current = false;
};
