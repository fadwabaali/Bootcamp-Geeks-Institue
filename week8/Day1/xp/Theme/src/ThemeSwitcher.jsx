import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        marginBottom: "20px",
        cursor: "pointer",
        background: theme === "light" ? "#222" : "#eee",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeSwitcher;