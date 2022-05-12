import { useLayoutEffect } from "react";

export const useDidRender = (callback: VoidFunction, dependencies: any[] = []) =>
  useLayoutEffect(callback, dependencies);
