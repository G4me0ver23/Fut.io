import styles from "../styles/LoginTela.module.css";
import React from "react";
import DadosLogin from "./DadosLogin";
function DadosCadastro(){
    return(
        <div className={styles.DadosLogin}>
            <h3>Nome:</h3>
            <input type="text" placeholder="Reginaldo da Silva Santos" />
            <DadosLogin />
            <h3>Confirmar senha:</h3>
            <input type="password" />
        </div>
    )
}
export default DadosCadastro;
