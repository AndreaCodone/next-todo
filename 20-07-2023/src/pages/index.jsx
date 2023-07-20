import Head from "next/head";
import { useReducer } from "react";
import styles from "@/styles/Index.module.scss";
import { MainContext } from "@/state";
import { mainReducer } from "@/state/reducers";
import { initialState } from "@/state";
import Form from "../components/form/Form";
import Navbar from "../components/navbar/Navbar";

export default function Login() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <Head>
        <title>next-todo</title>
        <meta name="description" content="The final Todo-App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <Form />
      </div>
    </MainContext.Provider>
  );
}
