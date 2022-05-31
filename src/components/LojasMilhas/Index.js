import { useEffect, useState, useContext } from "react";
import { Api } from "../../services/Api";
import Lottie from "react-lottie";
import animationData from "./lf30_editor_b7azmw1c";
import { CardLojas } from "../CardLojas";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../context/DataContext";

import "./LojasMilhas.css";
import Botao from "../Botao/index";

function LojasMilhas() {

  const navigate = useNavigate()
  const [cardLoja, setCardLoja] = useState([]);

  const { Credentials } = useContext(DataContext);

  const [cpf, setCPF] = useState(Credentials.getCpfUser());

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {}
  };

  useEffect(() => {
    // setCPF(Credentials.getCpfUser());
    listaLojas();
  }, []);

  async function listaLojas() {
    await Api.get("stores")
      .then(({ data }) => {
        setCardLoja(data);
      })
      .catch(err => {});
  }

  return (
    <div className="corFundo">
      <div className="fundo2">
        <div className="svg">
          <Lottie options={defaultOptions} />
        </div>
        <div className="textos">
          <span className="txt1">Pronto para começar a viajar?</span>
          <span className="txt2">
            Aqui estão as lojas que aceitam as nossas Milhas:
          </span>
        </div>
      </div>
      <div className="lugarLojas">
        <div className="areaBotao" />
        <div className="areaCards">
          {cardLoja.map((item, index) => {
            if (index > 2) {
              return (
                <CardLojas
                onClick={() => navigate('/send/'+item.idLoja)}
                  pagTransferencia={"/transfer"}
                  linkImg={item.imgLoja == "" ? "/aviao.png" : item.imgLoja}
                  nomeLoja={item.nomeLoja}
                  descricao={item.descricaoLoja}
                  favorito={
                    item.favoritedBy.filter(filter => filter.cpf == cpf)
                      ? "S"
                      : "N"
                  }
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export { LojasMilhas };
