import { useEffect } from "react";

export const useDidRender = (callback: VoidFunction) => useEffect(callback, []);

export default useDidRender;
