import styles from "../styles/LoginTela.module.css";
import stgen from "../styles/General.module.css";
import Cadastro from "../img/Cadastro.png";
import Cadastrar from "../img/Cadastrar.png";
import MenuTop from "../components/MenuTop";
import DadosCadastro from "../components/DadosCadastro";
import React from 'react';
import { Link } from "react-router-dom";

function CadastroTela() {
  return (
    <div className={styles.BackGround}>
      <MenuTop />
      <div className={styles.Cadastro}>
        <img src={Cadastro} height="45" />
      </div>

      <div className={styles.DadosLogin}>
        <DadosCadastro />
        <div>
          <Link to='/logintela'>
            <button
              className={stgen.Botao}
              style={{
                height: 50,
                width: 145,
                marginTop: 14,
                marginLeft: 77
              }}
            >
              <img src={Cadastrar} height="40px" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CadastroTela;
