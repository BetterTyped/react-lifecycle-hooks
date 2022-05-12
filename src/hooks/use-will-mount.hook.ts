import { useState } from "react";

export const useWillMount = (callback: VoidFunction) => {
  useState(callback);
};
