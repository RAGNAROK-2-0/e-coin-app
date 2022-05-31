import { useEffect, useState, useContext } from "react";
import { Api } from "../../services/Api";
import { DataContext } from "../../context/DataContext";

import "./Extrato.css";
import Botao from "../Botao/index";

function Extrato() {
  const [dadoApi, setDadoApi] = useState([]);
  const { Credentials } = useContext(DataContext);
  const { cpf } = Credentials.getCpfUser();

  async function listaExtrato() {
    await Api.get("statement/" + cpf, {})
      .then(({ data }) => {
        setDadoApi(data.statement);
      })
      .catch(err => {});
  }

  useEffect(() => {
    listaExtrato();
  }, []);

  // const valorFinal = dadoApi.reduce((acc, item) => {
  //   return item.type == "deposit" ? (acc =  acc +item.amount) : (acc -= item.amount);
  // }, 0);

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

  console.log(valorFinal);

  return (
    // <div className="fundo">
    <div className="areaMeio">
      <div className="areaRodada" />

      <div className="areaExtrato">
        <div>
          <div className="areaHistorico">
            <span className="historico">Historico</span>
          </div>
          <div className="areaAcimaTabela">
            <div className="areaBotoes">
              <Botao
                corBotao="btnEsquerdoExtratoSelec"
                textoBotao="Extrato de Milhas"
                link=""
              />
            </div>
            <div className="areaSvg" />
          </div>
        </div>
        <div className="areaTabela">
          <table>
            <thead>
              <tr>
                <td className="trDia tracejadoBottom trPadrao">Dia</td>
                <td className="trDesc tracejadoBottom trPadrao">Descrição</td>
                <td className="trValor tracejadoBottom trPadrao">Valor</td>
              </tr>
            </thead>
            <tbody>
              {dadoApi.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="trCanto tracejadoBottom trDia">
                      {new Intl.DateTimeFormat("pt-BR").format(
                        new Date(item.dateCreated)
                      )}
                    </td>
                    <td className="trMeio tracejadoBottom trDesc">
                      <span className="tituloExtrato">
                        {item.title}
                      </span>
                      <span className="">
                        {item.description}
                      </span>
                    </td>
                    <td className="trCanto tracejadoBottom trValor">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                      }).format(item.amount)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td className="trCantoFim tracejadoTop trDia" />
                <td className="trMeioFim tracejadoTop trDesc">
                  Minhas restantes:
                </td>
                <td className="trCantoFim tracejadoTop trValor">
                  {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                      }).format(valorFinal.total + valorFinal.withdraw * 2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </div>
  );
}

export { Extrato };
