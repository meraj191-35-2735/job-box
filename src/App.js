import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
// import { useEffect } from "react";
// import { themeChange } from "theme-change";
import "./App.css";

function App() {
  // useEffect(() => {
  //   themeChange(false);
  // 👆 false parameter is required for react project
  // }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
