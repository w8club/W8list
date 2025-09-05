import React, { createContext, useContext } from "react";
import { tokens } from "./tokens";
const C = createContext(tokens);
export const useTheme = () => useContext(C);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <C.Provider value={tokens}>{children}</C.Provider>;
}
