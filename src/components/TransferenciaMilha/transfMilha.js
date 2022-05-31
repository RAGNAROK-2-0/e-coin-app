import "./TransferenciaMilha.css";
import Botao from "../Botao/Botao";
import { Input } from "../Input/Input";
import { DataContext } from "../../context/DataContext";
import { useState, useEffect, useContext } from "react";
import { Api } from "../../services/Api";
import { useNavigate,useParams } from "react-router-dom";


function TranferenciaMilhas() {
  const navigate = useNavigate();
  const params = useParams();

  const [milhas, setMilhas] = useState();
  const [transfere, setTransfere] = useState();
  const [dadoApi, setDadoApi] = useState([]);
  const [erro, setError] = useState(false);

  const [cardLoja, setCardLoja] = useState([]);

  const [nomeLoja, setnomeLoja] = useState("");
  const [descLoja, setDescLoja] = useState("");
  const [linkImg, setlinkImg] = useState("");

  const { Credentials } = useContext(DataContext);

  const { cpf } = Credentials.getCpfUser();

  const valorFinal = dadoApi.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0
    }
  );

  useEffect(() => {
    listaExtrato();
    listaLojas();
  }, []);

  useEffect(
    () => {
     const data = cardLoja.find(
        item => (item.idLoja == params.id)
      );


      console.log(cardLoja)
      console.log(params.id)
      console.log(data)

      setnomeLoja(data?.nomeLoja);
      setDescLoja(data?.descricaoLoja);
      setlinkImg(data?.imgLoja);
    },
    [cardLoja]
  );

  async function listaLojas() {
    await Api.get("stores")
      .then(({ data }) => {
        setCardLoja(data);
      })
      .catch(err => {});
  }
  async function listaExtrato() {
    await Api.get("statement/" + cpf, {})
      .then(({ data }) => {
        setDadoApi(data.statement);
      })
      .catch(err => {});
  }

  async function transfMilha(event) {
    event.preventDefault();

    if (valorFinal < transfere) {
      setError(true);
    } else {
      setError(false);

      await transfereMilha();
    }
  }

  async function transfereMilha() {
    await Api.post("statement/withdraw", {
      title: "Transferencia de Milhas",
      description: "Parabéns! Você usou as suas milhas!",
      amount: Math.abs(transfere),
      cpf: cpf
    })
      .then(({ data }) => {
        navigate("/statement");
      })
      .catch(err => {
        navigate("/statement");
      });
  }

  return (
    <center className="corFundo">
      <form onSubmit={transfMilha} className="corFundo">
        <div className="campoTitulo">
          <div className="campoTextos">
            <span className="transferirMilhas">Transferir Milhas</span>
            <span className="escolheuLoja">
              Agora que você escolheu a loja que quer tranferir, só falta
              escolher o valor.
            </span>
          </div>
          <div className="campoSvg" />
        </div>
        <div className="cardRosa">
          <div className="campoTranf">
            <div className="espacoInput campoTranf">
              <Input
                error={erro}
                tipoLabel="normal"
                titulo="Minhas milhas:"
                estiloComponent="background"
                type="text"
                value={valorFinal.total + valorFinal.withdraw * 2}
              />
            </div>
            <div className="espacoInput campoTranf">
              <Input
                error={erro}
                tipoLabel="normal"
                titulo="Transferir:"
                estiloComponent="background"
                tipoInput="number"
                value={transfere}
                onChange={e => setTransfere(e.target.value)}
              />
            </div>
          </div>
          <div className="campoImg">
            <img className="seta" src="/seta-direita-reta.png" />
          </div>
          <div className="campoLoja">
            <div className="datalhesLoja">
              <div className="">
                <img className="base" src={linkImg} />
              </div>
              <div className="campoDescricao">
                <span className="loja">
                  {nomeLoja}
                </span>
                <span className="desc">
                  {descLoja}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="campoBtn">
          <Botao textoBotao="Transferir" type="submmit" corBotao="verde" />
        </div>
      </form>
    </center>
  );
}

export { TranferenciaMilhas };
