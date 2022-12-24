import React from "react";
import styles from "../styles/pages/Login.module.css";
const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.pagetitle}>
          <span>
            <img src="/logo.svg" alt="" />
          </span>
          <span className={styles.title}>Stag Investments</span>
        </div>
        <div className={styles.links}>About</div>
      </div>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.heading}>
            Sit back and relax while we make money for you.
          </div>
          <div className={styles.login}>
            <div className={styles.loginbtn}>Get Started</div>
          </div>
        </div>

        <div className={styles.imgcontainer}>
          <img src="/illustrations/login.svg" alt="" />
        </div>

        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

export default Login;
