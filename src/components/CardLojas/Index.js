import { useState } from "react";
import { Api } from "../../services/Api";
import { useNavigate } from "react-router-dom";

import "./CardLojas.css";

function CardLojas({
  pagTransferencia,
  linkImg,
  nomeLoja,
  descricao,
  favorito = "N",
  ...rest
  
}) {
  return (
    <a className="clica2 " {...rest}>
      <div className="card2">
        <div className="base2">
          <img className="img2" src={linkImg} />
        </div>
        <div className="titulo2">
          <span className="loja2">
            {nomeLoja}
          </span>

        </div>
        <span className="desc2">
          {descricao}
        </span>
      </div>
    </a>
  );
}

export { CardLojas };
