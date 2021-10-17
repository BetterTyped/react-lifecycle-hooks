import { useLayoutEffect } from "react";

export const useDidRender = (callback: VoidFunction) => useLayoutEffect(callback, []);

export default useDidRender;
