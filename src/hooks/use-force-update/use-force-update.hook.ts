import { useCallback, useState } from "react";

export const useForceUpdate = () => {
  const [, rerender] = useState(0);

  return useCallback(() => {
    rerender((prev) => prev + 1);
  }, []);
};
