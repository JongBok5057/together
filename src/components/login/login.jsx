import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => {
  const onLogin = (event) => {};
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <ul className={styles.list}>
          <li className={styles.item}>
            <input className={styles.input} type="text" placeholder="아이디" />
          </li>
          <li>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호"
            />
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              로그인
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
