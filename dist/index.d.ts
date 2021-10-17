declare const useDidMount: (callback: VoidFunction) => void;

declare const useDidRender: (callback: VoidFunction) => void;

declare const useDidUpdate: (callback: VoidFunction, dependencies: any[], useOnMount?: boolean) => void;

declare const useWillUnmount: (callback: VoidFunction) => void;

export { useDidMount, useDidRender, useDidUpdate, useWillUnmount };
