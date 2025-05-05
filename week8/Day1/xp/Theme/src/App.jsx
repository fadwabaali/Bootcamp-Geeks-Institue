import { ThemeProvider } from "./ThemeContext";
import ThemedContent from "./ThemedContent";

function App() {

  return (
    <ThemeProvider>
      <ThemedContent />
    </ThemeProvider>
  );
}

export default App;