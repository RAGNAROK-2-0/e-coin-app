import './Extrato.css'
import Lottie from 'react-lottie';
import Botao from '../botao/index'
import Footer from '../Footer/index'
import animationData from './lf20_sezwmi7u.json';


function Extrato(linkImg, nomeLoja, descLoja) {

    const porco = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const linhasLayout = [];

    let valorFinal = 0;
    let valorSoma = 0;
    let valorSub = 0;

    linhasData.data.forEach((data) => {
        linhasLayout.push(
            data.Sociais.map((item) => {

                let amount = item.amount;
                let tipo = item.type;

                if (tipo == "deposit") {
                    valorSoma = valorSoma + amount;
                } else {
                    let valor = amount.replace("-", "");
                    valorSub = valorSub - valor;
                }

                return (
                    <tr>
                        <td className="trCanto tracejadoBottom trDia">{item.dateCreated}</td>
                        <td className="trMeio tracejadoBottom trDesc">
                            <span className="tituloExtrato">{item.title}</span>
                            <span className="">{item.description}</span>
                        </td>
                        <td className="trCanto tracejadoBottom trValor">{item.amount}</td>
                    </tr>
                );
            })
        );
    });

    valorFinal = valorSoma - valorSub;

    return (
        <div className="fundo">
            <div className="cabecalho">
                CABEÇALHO
            </div>
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
                                <Lottie
                                    options={porco}
                                    height={400}
                                    width={400}
                                />
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
                            {linhasLayout}
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
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}


export { Extrato };