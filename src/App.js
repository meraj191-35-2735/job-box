import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useDispatch } from "react-redux";
import { setUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  AOS.init();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
      }
    });
  }, [dispatch]);
  return (
    <div className="px-3 border-t-4 border-accent">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
