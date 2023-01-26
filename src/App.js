import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
// import { useEffect } from "react";
// import { themeChange } from "theme-change";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // useEffect(() => {
  //   themeChange(false);
  // 👆 false parameter is required for react project
  // }, []);
  AOS.init();
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
