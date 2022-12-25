import styles from "../styles/LoginTela.module.css";
import React from "react";
function DadosLogin(){
    return(
        <div className={styles.DadosLogin}>
            <h3>Email:</h3>
            <input type="text" placeholder="ex: silvxcleiton06@gmail.com" />
            <h3>Senha:</h3>
            <input type="password" />
        </div>
    )
}
export default DadosLogin;
