import { LogInPage } from "./pages/LogIn/LogInPage";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./assets/themes/theme.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SchoolListPage from "./pages/SchoolList/SchoolListPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ChakraProvider theme={theme}>
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/schools" element={<SchoolListPage />} />
          </Routes>
        </ChakraProvider>
      </Router>
    </div>
  );
}

export default App;
