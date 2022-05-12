import { useEffect } from "react";

export const useWillUnmount = (callback: VoidFunction) => useEffect(() => callback, []);
