import { useState, useContext } from "react";
import { MainContext } from "@/state";
import Link from "next/link";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2>TODO</h2>
      <Link href="/todolist">My Todo</Link>
    </div>
  );
};

export default Navbar;

//   const { state, dispatch } = useContext(MainContext);
//   const [inputUsername, setInputUsername] = useState("");

//   const onHandleLogout = () => {
//     dispatch({ type: "SET_LOGOUT" });
//   };

//   const onHandleLogin = () => {
//     dispatch({ type: "SET_LOGIN" });
//   };

//   const onHandleInputUsername = (e) => setInputUsername(e.target.value);

//   const onHandleSubmit = (e) => {
//     e.preventDefault();
//     dispatch({ type: "SET_USERNAME", payload: inputUsername });
//     setInputUsername("");
//   };

//   return (
//     <div className={styles.navbar}>
//       <strong onClick={state?.isLogged ? onHandleLogout : onHandleLogin}>
//         {state?.isLogged ? state.username : "Login"}
//       </strong>
//       <form onSubmit={onHandleSubmit}>
//         <input
//           className={styles.input}
//           type="text"
//           placeholder="Inserisci username"
//           value={inputUsername}
//           onChange={onHandleInputUsername}
//         />
//       </form>
//     </div>
//   );
// };
