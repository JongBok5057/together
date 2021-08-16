import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

function App() {
  return (
    <div className={styles.app}>
      <Login />
    </div>
  );
}

export default App;
