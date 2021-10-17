import { useEffect } from "react";

export const useDidMount = (callback: VoidFunction) => useEffect(callback, []);

export default useDidMount;
