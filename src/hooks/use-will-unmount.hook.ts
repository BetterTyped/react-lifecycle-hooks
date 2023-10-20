/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const useWillUnmount = (callback: () => void) => {
  useEffect(() => callback, []);
};
