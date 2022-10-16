/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const useDidMount = (callback: VoidFunction | (() => VoidFunction)) => {
  useEffect(callback, []);
};
