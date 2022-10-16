/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect } from "react";

const isBrowser = typeof window !== "undefined";
const effect = isBrowser ? useEffect : useLayoutEffect;

export const useIsomorphicEffect = effect;
