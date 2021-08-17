import React from "react";
import styles from "./app.module.css";
import FindId from "./components/find_id/find_id";
import FindPw from "./components/find_pw/find_pw";
import Login from "./components/login/login";
import Signup from './components/signup/signup';

function App() {
  return (
    <div className={styles.app}>
      <FindId />
    </div>
  );
}

export default App;
