import { useEffect, useState } from 'react'
import { Api } from '../../services/Api';

import './CardLojas.css'
import Botao from '../botao/index'


function LojasMilhas() {

    const [cardLoja, setCardLoja] = useState([]);

    const { Credentials } = useContext(DataContext);

    const [cpf, setCPF] = useState();

    useEffect(() => {
        setCPF(Credentials.getCpfUser());
        listaLojas()
    }, []);

    async function listaLojas() {
        await Api.get('stores')
        .then(({ data }) => {
            setCardLoja(data.statement)
        }).catch(err => {
        })
    }
  
    return (
        <div className="corFundo">
            <div className="fundo">
                <div>
                 
                </div>
                <div className="textos">
                    <span className="txt1">
                        Pronto para começar a viajar?
                    </span>
                    <span className="txt2">
                        Aqui estão as lojas que aceitam as nossas Milhas:
                    </span>
                </div>
            </div>
            <div className="lugarLojas">
                <div className="areaBotao">
                    <Botao textoBotao="Todos" corBotao="esquerdoRosa" onClick=""/>
                    <Botao textoBotao="Favoritos" corBotao="direitoTransparente" onClick=""/>
                </div>
                <div className="areaCards">
                    {cardLoja.map((item, index) => <CardLojas 
                        pagTransferencia={'/Transferencia'} 
                        linkImg={item.imgLoja} 
                        nomeLoja={item.nomeLoja} 
                        descricao={item.descricaoLoja} 
                        favorito={item.filter(filter => filter.cpf == cpf) ? 'S' : 'N'}></CardLojas>
                    )}
                </div>
            </div>
        </div>
    );
  }


  export {LojasMilhas};