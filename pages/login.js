import Head from "next/head";
import { useState } from "react";
import styles from "../styles/login.module.css";
import authApi from "../services/auth";
import cookie from "js-cookie";
import { useRouter } from "next/router";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    authApi({ id, password })
      .then((token) => {
        cookie.set("token", token.access);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="container">
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <h1 className="h3 mb-3 fw-normal">Please Login</h1>

            <div className="form-floating">
              <input
                onChange={(e) => setId(e.target.value)}
                value={id}
                type="text"
                className="form-control"
                id="userid"
                placeholder="User ID"
              />
              <label htmlFor="userid">User ID</label>
            </div>
            <div className="form-floating">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-success" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
