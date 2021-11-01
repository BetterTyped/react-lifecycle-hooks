import { useEffect, useRef } from "react";

export const useDidUpdate = (
  callback: VoidFunction | (() => VoidFunction),
  dependencies: any[],
  useOnMount = false,
) => {
  const didMountRef = useRef(useOnMount);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    return callback();
  }, dependencies);
};

export default useDidUpdate;
