import { LogInPage } from "./pages/LogIn/LogInPage";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        100: "#e19b46",
      },
      secondary: "#5561e1",
    },
  });
  return (
    <div className="App">
      <ChakraProvider>
        <LogInPage />
      </ChakraProvider>
    </div>
  );
}

export default App;
