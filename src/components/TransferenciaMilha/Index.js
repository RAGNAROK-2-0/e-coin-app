import './TransferenciaMilha.css'
import Botao from '../botao/index'
import Input from '../Input/Input'
import { DataContext } from '../context/DataContext'


function TranferenciaMilhas(linkImg, nomeLoja, descLoja) {

    const [valorFinal, setValorFinal] = useState(0);

    const { Credentials } = useContext(DataContext);

    let cpf;

    useEffect(() => {
        cpf = Credentials.getCpfUser();

        carregaMilhas(cpf)
    }, []);

    async function transfMilha(event) {
        event.preventDefault();

        const data = {
            transferencia
        }

        await transfereMilha(data);
    }

    async function transfereMilha({transferencia}) {
        await Api.get('withdraw/', {
            title: 'Transferencia de Milhas',
            description: 'Parabéns! Você usou as suas milhas!',
            amount: transferencia,
            cpf: cpf
        }).then(({ data }) => {
            carregaMilhas(cpf)           
        }).catch(err => {
        })
    }

    async function carregaMilhas({cpf}) {
        await Api.get('statement/' + cpf,{
        }).then(({ data }) => {
            calculaValores(data.statement)
        }).catch(err => {
        })
    }

    function calculaValores() {
        let valorFinal = 0;
        let valorSoma = 0;
        let valorSub = 0;
        dadoApi.map((item) => {
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
        <form onSubmit={transfMilha}>
            <div className="campoTitulo">
                <div className="campoTextos">
                    <span className="transferirMilhas">Transferir Milhas</span>
                    <span className="escolheuLoja">Agora que você escolheu a loja que quer tranferir, só falta escolher o valor.</span>
                </div>
                <div className="campoSvg">
                </div>
            </div>
            <div className="cardRosa">
                <div className="campoTranf">
                    <div className="espacoInput campoTranf">
                        <Input tipoLabel="normal" titulo="Minhas milhas:" estiloComponent="background" tipoInput="number" value={valorFinal} onChange={e => setMilhas(e.target.value)}/>
                    </div>
                    <div className="espacoInput campoTranf">
                        <Input tipoLabel="normal" titulo="Transferir:" estiloComponent="background" tipoInput="number" value={transferencia} onChange={e => setTransfere(e.target.value)}/>
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
                <Botao textoBotao="Transferir" type="submmit" corBotao="verde"/>
            </div>
        </form>
    );
}


export {TranferenciaMilhas};