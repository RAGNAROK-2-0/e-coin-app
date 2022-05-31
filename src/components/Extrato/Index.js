import { useEffect, useState } from 'react'
import { Api } from '../../services/Api';

import './Extrato.css'
import Botao from '../botao/index'

function Extrato() {
    const [dadoApi, setDadoApi] = useState([]);
    const [valorFinal, setValorFinal] = useState(0);

    async function listaExtrato() {
        await Api.get('statement/' + 47732751892, {
        }).then(({ data }) => {
            setDadoApi(data.statement)
            calculaValores()
        }).catch(err => {
        })
    }

    useEffect(() => {
        listaExtrato()
    }, []);

    function calculaValores() {
        let valorFinal = 0;
        let valorSoma = 0;
        let valorSub = 0;
        dadoApi.map((item, index) => {
            let amount = item.amount;
            if (item.type === "deposit") {
                valorSoma = valorSoma + amount;
            } else {
                let valor = amount.replace("-", "");
                valorSub = valorSub - valor;
            }
            valorFinal = valorSoma - valorSub;
        })
        setValorFinal(valorFinal)


    }





    return (
        <div className="fundo">
            <div className="areaMeio">
                <div className="areaRodada"></div>

                <div className="areaExtrato">
                    <div>
                        <div className="areaHistorico">
                            <span className="historico">Historico</span>
                        </div>
                        <div className="areaAcimaTabela">
                            <div className="areaBotoes">
                                <Botao corBotao="btnEsquerdoExtratoSelec" textoBotao="Extrato de Milhas" link="" />
                                <Botao corBotao="btnDireitoExtratoNSelec" textoBotao="Consumo de Milhas" link="" />
                            </div>
                            <div className="areaSvg">

                            </div>
                        </div>
                    </div>
                    <div className="areaTabela">
                        <table>
                            <tr>
                                <td className="trDia tracejadoBottom trPadrao">Dia</td>
                                <td className="trDesc tracejadoBottom trPadrao">Descrição</td>
                                <td className="trValor tracejadoBottom trPadrao">Valor</td>
                            </tr>
                            {dadoApi.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="trCanto tracejadoBottom trDia">{item.dateCreated}</td>
                                        <td className="trMeio tracejadoBottom trDesc">
                                            <span className="tituloExtrato">{item.title}</span>
                                            <span className="">{item.description}</span>
                                        </td>
                                        <td className="trCanto tracejadoBottom trValor">{item.amount}</td>
                                    </tr>)
                            })}
                        </table>
                        <table>
                            <tr>
                                <td className="trCantoFim tracejadoTop trDia"></td>
                                <td className="trMeioFim tracejadoTop trDesc">Minhas restantes:</td>
                                <td className="trCantoFim tracejadoTop trValor">{valorFinal}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


export { Extrato };