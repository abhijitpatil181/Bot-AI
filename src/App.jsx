import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    !localStorage.getItem("chatData") &&
      localStorage.setItem("chatData", JSON.stringify([]));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}>
          <ToastContainer />
        </RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
