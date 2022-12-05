import { ThemeProvider } from "@mui/material";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { getTheme, ThemesModes } from "src/toolbox/theme";

type ThemeContextProps = {
  mode: ThemesModes;
  changeTheme(theme: ThemesModes): void;
};
const ThemeContext = createContext<ThemeContextProps>({
  mode: "defaultTheme",
  changeTheme(m: ThemesModes) {},
});

type ThemeContextProviderProps = {
  children: React.ReactNode;
};
export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemesModes>("darkTheme");

  const changeTheme = useCallback((m: ThemesModes) => setMode(m), []);

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
