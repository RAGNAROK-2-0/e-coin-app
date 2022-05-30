import './TransferenciaMilha.css'
import Lottie from 'react-lottie';
import Botao from '../botao/index'
import Footer from '../Footer/index'
import Input from '../Input/Input'
import animationData from './lf20_dntjgwj3.json';


function TranferenciaMilhas(linkImg, nomeLoja, descLoja) {

    // const carteira = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     }
    // };

    return (
        <div className="fundo">
            <div>
                CABEÇALHO
            </div>
            <div className="campoTitulo">
                <div className="campoTextos">
                    <span className="transferirMilhas">Transferir Milhas</span>
                    <span className="escolheuLoja">Agora que você escolheu a loja que quer tranferir, só falta escolher o valor.</span>
                </div>
                <div className="campoSvg">
                    {/* <Lottie
                        options={carteira}
                        height={400}
                        width={400}
                    /> */}
                </div>
            </div>
            <div className="cardRosa">
                <div className="campoTranf">
                    <div className="espacoInput campoTranf">
                        <Input tipoLabel="normal" titulo="Minhas milhas:" estiloComponent="background" tipoInput="number" />
                    </div>
                    <div className="espacoInput campoTranf">
                        <Input tipoLabel="normal" titulo="Transferir:" estiloComponent="background" tipoInput="number" />
                    </div>
                </div>
                <div className="campoImg">
                    <img className="seta" src="./seta-direita-reta.png"></img>
                </div>
                <div className="campoLoja">
                    <div className="datalhesLoja">
                        <div className="base">
                            <img className="img" src={linkImg}></img>
                        </div>
                        <div className="campoDescricao">
                            <span className="loja">{nomeLoja}</span>
                            <span className="desc">{descLoja}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="campoBtn">
                <Botao textoBotao="Transferir" link="seila" corBotao="verde"/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}


export {TranferenciaMilhas};