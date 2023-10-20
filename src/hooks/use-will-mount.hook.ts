import { useState } from "react";

export const useWillMount = (callback: () => void) => {
  useState(callback);
};
