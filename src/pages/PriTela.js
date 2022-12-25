import styles from "../styles/PriTela.module.css";
import stgen from "../styles/General.module.css";
import Futio from "../img/Futio.png";
import Interrogacao from "../img/Interrogacao.png";
import FundoPriTela from "../img/FundoPriTela.jpg";
import Menu from "../img/Menu.png";
import Enter from "../img/Enter.png";
import React from 'react';
import { Link } from "react-router-dom";
function PriTela() {
  var FundoPriTelaSt = {
    backgroundImage: `url(${FundoPriTela})`,
    backgroundRepeat: "no-repeat"
  };
  return (
    <div className={styles.PriTela} style={FundoPriTelaSt}>
      <div className={stgen.MenuTop}>
        <div>
          <button className={stgen.Botao} style={{
            height: 30,
            width: 30,
            marginTop: 8,
            marginLeft:23
          }}>
            <img src={Menu} style={{ height: 35 }} />
          </button>
        </div>

        <div></div>

        <div>
          <Link to='/helptela'>
            <button className={stgen.Botao} style={{
              height: 35,
              width: 35,
              marginTop: 10,
              marginRight:34
            }}>
              <img src={Interrogacao} height="33" width="35"  />
            </button>
          </Link>
        </div>
      </div>

      <div>
        <img src={Futio} width="350px" />
      </div>

      <div>
        <Link to='/logintela'>
          <button className={stgen.Botao} style={{ height: 100, width: 230, marginLeft: 54}}>
            <img src={Enter} width="230px" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PriTela;
