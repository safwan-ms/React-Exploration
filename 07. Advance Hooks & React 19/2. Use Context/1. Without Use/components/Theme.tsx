import { createContext, ReactNode, useState } from "react";
import Card from "./Card";

type Theme = "light" | "dark";

interface ThemeController {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeController | undefined>(
  undefined
);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};

export default Theme;
